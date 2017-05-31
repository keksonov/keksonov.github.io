$(document).ready(function () {
	var video = $('.adaptive-video');
	var width = video.width();
	var heigth = width * 0.5625;
	video.height(heigth);

	$('.fa-bars').on('click', function() {
		$('.menu-for-mobile').toggleClass('active');
	});

	$('html').smoothScroll();
})