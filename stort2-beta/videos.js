$(document).ready(function() {
	var vidID = getUrlParameter('id');
	//alert(vidID);
	var html = '';
	$.getJSON("./gogn/videos.json", function(data) {

		videos = data["videos"];
		console.log(videos[vidID].video)

		html += '<video width="500" controls>'; //eflaust verður þetta tekið út. bara control ekki heilu línuna.
		html += '<source src="' + videos[vidID - 1].video + '" type="video/mp4">';
		html += 'Your browser does not support the video tag.</video>'

		console.log(html);
		$('#videoSpilari').append(html);
	});
});

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
