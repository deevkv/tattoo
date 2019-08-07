var gulp = require("gulp");
var less = require("gulp-less");
var del = require("del");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var imagemin = require("gulp-imagemin");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var concat = require("gulp-concat");
var server = require("browser-sync").create();


gulp.task("serve", function() {
	server.init({
		server: "build/"
	});

	function reload(done) {
		server.reload();
		done();
	}

	gulp.watch("source/less/**/*.less", gulp.parallel("style", reload));
	gulp.watch("source/*.html", gulp.parallel("html", reload));
}); 


gulp.task("style", function() {
	return gulp.src("source/less/**/*.less")
		.pipe(plumber())
		.pipe(concat("style.less"))
		.pipe(less())
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest("build/css"))
		.pipe(minify())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest("build/css"))
		.pipe(server.stream());
});


gulp.task("less", function() {
	return gulp.src("source/less/style.less")
	.pipe(less())
	.pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
	return del(["build/**, !build/.git"]);
});

gulp.task("copy", function() {
	return gulp.src([
			"source/*.html",
			"source/fonts/**/*.{woff,woff2}",
			"source/img/**",
			"source/css/**",
			"source/js/**",
			"source/mp3/**"
		], {
			base: "source"
		})
		.pipe(gulp.dest("build"));
});


gulp.task("sprite", function() {
	return gulp.src("source/img/icon-*.svg")
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename("sprite.svg"))
		.pipe(gulp.dest("build/img"));
});



gulp.task("html", function() {
	return gulp.src("source/*.html")
		.pipe(posthtml([
			include()
		]))
		.pipe(gulp.dest("build"));
});

gulp.task("images", function() {
	return gulp.src("source/img/**/*.{png,jpg,svg}")
		.pipe(imagemin()) 
		.pipe(gulp.dest("build/img"));
});

gulp.task("build", 
	gulp.series("clean","copy","style","sprite","html")
);


