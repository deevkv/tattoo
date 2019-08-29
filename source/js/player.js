//https://developers.google.com/youtube/iframe_api_reference?hl=ru

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {

  player = new YT.Player('player', {
    height: '360',
    width: '640',
    playerVars: {  'autoplay': 1, 'start': 137, 'controls': 0, 'showinfo': 0, 'rel': 0 },
    videoId: 'oyvcTOHFl6w',
    events: {
      'onReady': onPlayerReady,
      /*'onStateChange': onPlayerStateChange*/

    }
  });
}


function onPlayerReady(event) {
  event.target.playVideo();
}


/*function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PAUSED) {
    
  }
}*/

function stopVideo() {
  player.stopVideo();
}

function pauseVideo() {
  player.pauseVideo();
}