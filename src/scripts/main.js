// Main
$(document).ready(function () {
	// Phần Slider
	$('.home-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		loop:true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	});
	// Phần Clients
	$('.home-shop .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 1,
			},
			// breakpoint from 768 up
			768: {
				items: 3,
			},
			// breakpoint from 992 up
			992: {
				items: 4,
			}
		}
	});
});
