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
    playerVars: {'showinfo': 0, 'rel': 0 },
    videoId: 'yuJMx7U4J9Q',
    events: {
      'onReady': onPlayerReady,
      /*'onStateChange': onPlayerStateChange*/

    }
  });
}


function onPlayerReady(event) {
    event.target.playVideo();
}




function stopVideo() {
  player.stopVideo();
}

function pauseVideo() {
  player.pauseVideo();
}