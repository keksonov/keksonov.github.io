$(document).ready(function() {
	// OWL CAROWSEL
	$('.owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		loop: true
	});

	// MOBILE MENU TOGGLE
	$('.fa-bars').on('click', function() {
		$('.mobile-menu').toggleClass('active');
	});
})