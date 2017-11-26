//=============================
// JQuery gums
//=============================


$(document).ready(function() {

	$.getJSON("./gogn/videos.json", function(data) {
		console.log("uu" + JSON.stringify(data["categories"]));
		var categories = data["categories"];
		var videos = data["videos"];

		//console.log(videos);
		var html = '';
		$.each(categories, function(key, value) {
			html += '<div class=category"' + key + '">';
			html += '<h2>' + value.title + '</h2>';
			console.log(key);
			console.log(value.title);

			for (var i = 0; i < value.videos.length; i++) {


				var index = value.videos[i] - 1;

				var thatVid = videos[index];
				html += '<div class=myndband' + thatVid.id + '/>';
				//html += '<a href="' + window.location.href + "?id=" + thatVid.id + '">';
				//html += '<img src="' + thatVid.poster + '" id=vid'+thatVid.id +' /> </a>';
				html += '<img src="' + thatVid.poster + '" id=' + thatVid.id + ' id=' + thatVid.id + '/>';
				html += '<label for=' + key + 'class = title' + '>' + thatVid.title + '</label>';
				html += '<label for=' + key + 'class = duration' + '>' + duration(thatVid.duration) + '</label>';
				html += '<label for=' + 'class = length' + '>' + timeDifference(thatVid.created) + '</label>';
				html += '</div>';
				console.log(timeDifference(thatVid.created));
			}
		});
		$('#videoSalur').html(html);
	}).done(function() {
		$('img').click(function() {
			window.location.href = "video.html?id=" + this.id;
		});
	});
});
console.log("þetta er þetta : " + window.location.href);

/*
	$.getJSON("gogn/videos.json", function(data) {
		var html = '';
		$.each(data["categories"], function(key, value) {
			html += '<div class="' + key + '">';
			html += '<h2 class="' + value.title + '">';
			$.each(value, function(i, val) {
				html += '<div class=myndband"' + i + '"/>';
				html += '<img src="' + val.poster + '"/>';
				html += '<label for="' + key + '">' + val.title + '</label>';
				html += '<label for =' + new Date(parseInt(val.created)) + '</label>';
				html += '</div>';
				//var date = new Date(parseInt(jsonDate.substr(8 12/12/1994)));
			});
			html += '</div>';
		});
		$('#videoSalur').html(html);
	});
	*/

//Vefforritun/stort2/videos/"./videos/small.png"/.
//=============================
// eitthvað eitthvað eitthvað
//=============================

//=============================
// Búa til takkanna
//=============================

function buttons() {

}

//=============================
// eitthvað eitthvað eitthvað
//=============================


//=============================
// function til að reikna daganna
//=============================


function timeDifference(dateNation) {

	var today = new Date();
	//var videoDates = [];
	var videoTime = new Date(dateNation)
	var timeOf = today - videoTime;
	var min = timeOf / 1000 / 60;
	var hours = min / 60;
	var days = hours / 24
	if (days === 1) {
		return ("Fyrir " + days + " degi síðan")
	}
	if (days < 7) {
		return ("Fyrir " + days + " dögum síðan")
	}
	if (days >= 7 && days < 13) {
		return ("Fyrir " + (days / 7).toFixed(0) + " viku síðan")
	}
	if (days > 14) {
		return ("Fyrir " + (days / 7).toFixed(0) + " vikum síðan")
	}
}


console.log(timeDifference(("2015-3-15")));
console.log(timeDifference(("2019-3-15")));
//===================================
// Ajax leikmaður kominn til að vera
//===================================


//=============================
// function til að reikna duration
//=============================

function duration(seconds) {
	var minutes = (seconds / 60);
	var modseconds = (seconds % 60);
	if (modseconds < 10) {
		modseconds = ("0" + modseconds.toFixed(0));
	};
	var result = (minutes.toFixed(0) + ":" + modseconds);
	return result;
}
console.log("þetta er duration fallið : " + duration(3600));

//=============================
// eitthvað eitthvað eitthvað
//=============================
