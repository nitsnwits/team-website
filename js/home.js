$(document).ready(function() {
	$('#cloud-button').on('click', function(){
		window.location.href="./Cloud.html"
	});

	$('#bigdata-button').on('click', function(){
		console.log("being clicked");
		window.location.href="./BigData.html"
	});

	$('#iot-button').on('click', function(){
		window.location.href="./Iot.html"
	});
});