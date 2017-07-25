$(function() {

	$('.nav').slick({
		slidesToShow: 3,
		asNavFor: '.main',
		focusOnSelect: true,
		draggable: false,
		arrows: false
	});

	$('.main').slick({
		slidesToShow: 1,
		asNavFor: '.nav',
		draggable: false,
		arrows: false
	});

	$('.header').hover(function() {
		$('.header').toggleClass('active');
	});

	$('.schedule-months').slick({
		slidesToShow: 1
	});

});
