var vid, playbtn, mutebtn, fullscreenbtn;

function initializePlayer(){
  // Set object references
  vid = document.getElementById('my_video');
  playbtn = document.getElementById('playpausebtn');
  mutebtn = document.getElementById('mutebtn');
  fullscreenbtn = document.getElementById('fullscreenbtn');
  // Add event listeners
  playbtn.addEventListener("click", playPause, false);
  mutebtn.addEventListener("click", vidmute, false);
  fullscreenbtn.addEventListener("click", toggleFullScreen, false);
}
window.onload = initializePlayer;

  function playPause() {
    if (vid.paused) {
      vid.play();
      playbtn.classList.remove('playbtn');
      playbtn.classList.add('pausebtn');
      console.log(vid.currentTime);
    } else {
      vid.pause();
      playbtn.classList.remove('pausebtn');
      playbtn.classList.add('playbtn');
    }

  }

  function vidmute () {
    if (vid.muted) {
      vid.muted = false;
      mutebtn.classList.remove('unmutebtn');
      mutebtn.classList.add('mutebtn');
    } else {
      vid.muted = true;
      mutebtn.classList.remove('mutebtn');
      mutebtn.classList.add('unmutebtn');
    }
  }

  function toggleFullScreen () {
    if (vid.requestFullScreen) {
      vid.requestFullScreen();
    } else if (vid.webkitRequestFullScreen) {
      vid.webkitRequestFullScreen();
    } else if (vid.mozRequestFullScreen) {
      vid.mozRequestFullScreen();
    }
  }
