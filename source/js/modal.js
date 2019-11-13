const youTubeButtonPlay = document.querySelector('.about__button-play');
const modalYouTube = document.querySelector('.modal-youtube');
const bodyClass = document.querySelector('body'); 

youTubeButtonPlay.addEventListener('click', function() {
	event.preventDefault();
	if (modalYouTube.classList.contains('modal-youtube--closed')) {
    bodyClass.classList.add('modal-youtube--hidden');
    modalYouTube.classList.remove('modal-youtube--closed');
    modalYouTube.classList.add('modal-youtube--opened');
  } else {
    modalYouTube.classList.add('modal-youtube--closed');
    modalYouTube.classList.remove('modal-youtube--opened');
    pauseVideo();
  }
});

modalYouTube.addEventListener('click', function() {
	if (modalYouTube.classList.contains('modal-youtube--opened')) {
    bodyClass.classList.remove('modal-youtube--hidden');
    modalYouTube.classList.remove('modal-youtube--opened');
    modalYouTube.classList.add('modal-youtube--closed');
    pauseVideo(); //in file player.js
  }
})