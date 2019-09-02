window.onload = function() {
	let scrolled;
	let timer;

window.addEventListener ('scroll', function () {
    const buttonUp = document.querySelector('.button__up');
    if(window.pageYOffset > 1000){
        buttonUp.classList.remove('button__hidden');
	  		buttonUp.classList.add('button__show');
    } else{
        buttonUp.classList.add('button__hidden');
	  		buttonUp.classList.remove('button__show');
    }
});

	document.getElementById('top').onclick = function() {
		scrolled = window.pageYOffset;
		scrollToTop();
	}

	function scrollToTop() {
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 100;
			timer = setTimeout(scrollToTop, 10);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}
}