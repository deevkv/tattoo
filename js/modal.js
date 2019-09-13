const youTubeButtonPlay = document.querySelector('.about__button-play');
const modalYouTube = document.querySelector('.modal-youtube');

youTubeButtonPlay.addEventListener('click', function() {
	event.preventDefault();
	if (modalYouTube.classList.contains('modal-youtube--closed')) {
    modalYouTube.classList.remove('modal-youtube--closed');
    modalYouTube.classList.add('modal-youtube--opened');
    playVideo();
  } else {
    modalYouTube.classList.add('modal-youtube--closed');
    modalYouTube.classList.remove('modal-youtube--opened');
    pauseVideo();
  }
});

modalYouTube.addEventListener('click', function() {
	if (modalYouTube.classList.contains('modal-youtube--opened')) {
    modalYouTube.classList.remove('modal-youtube--opened');
    modalYouTube.classList.add('modal-youtube--closed');
    pauseVideo(); //in file player.js
  }
})