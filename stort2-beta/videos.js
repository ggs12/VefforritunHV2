$(document).ready(function() {
	var vidID = getUrlParameter('id');
	//alert(vidID);
	var html = '';
	$.getJSON("./gogn/videos.json", function(data) {

		videos = data["videos"];
		//console.log(videos[vidID].video)

		if (videos[vidID-1] !== undefined) {
		/*
		html += '<video width="500" controls>'; //eflaust verður þetta tekið út. bara control ekki heilu línuna.
		html += '<source src="' + videos[vidID - 1].video + '" type="video/mp4">';
		html += 'Your browser does not support the video tag.</video>'
		*/

		html += '<div id="video_player_box">';
		html += '<h1 class = heading--two>' + videos[vidID - 1].title + '</h2>';
		html += '<video id="my_video" autoplay>';
		html += '<source src="' + videos[vidID - 1].video + '" type="video/mp4">';
		html += '</video>'


		html += '<div id="video_controls_bar">';
		html += '<button id="backbtn" class="btn backbtn"></button>';
		html += '<button id="playpausebtn" class="btn pausebtn"></button>';
		html += '<button id="mutebtn" class="btn mutebtn"></button>';
		html += '<button id="fullscreenbtn" class="btn fullscreenbtn"></button>';
		html += '<button id="nextbtn" class="btn nextbtn"></button>';
		html += '</div>';
		html += '<a href = "index.html" class = return> Til baka </a>';
		html += '</div>';

		console.log(html);
		$('#videoSpilari').append(html);
	}

	else { 
		console.log("Error");
		html += '<div id="error_box">';
		html += '<h1 class = heading--two> Myndband finnst ekki </h2>';
		html += '<a href = "index.html" class = return> Til baka </a>';
		html += '</div>';
		$('#videoSpilari').append(html);
	}
	});

});

var vid, playbtn, mutebtn, fullscreenbtn;

function initializePlayer(){
  // Skilgreinum object references
  vid = document.getElementById('my_video');
  playbtn = document.getElementById('playpausebtn');
  mutebtn = document.getElementById('mutebtn');
  fullscreenbtn = document.getElementById('fullscreenbtn');
  backbtn = document.getElementById('backbtn');
  nextbtn = document.getElementById('nextbtn');

  // Bætum við event listeners
  playbtn.addEventListener("click", playPause, false);
  mutebtn.addEventListener("click", vidmute, false);
  fullscreenbtn.addEventListener("click", toggleFullScreen, false);
  backbtn.addEventListener("click", back, false);
  nextbtn.addEventListener("click", forward, false);
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

  function forward() {
  if (!vid.paused) {
    vid.currentTime += 3;
  }
}

function back() {
  if (!vid.paused) {
    if (vid.currentTime > 3) {
      vid.currentTime -= 3;
    } else {
      vid.currentTime = 0;
    }
  }
}


// from: http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};
