$(function() {

	$('.nav').slick({
		slidesToShow: 4,
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
		slidesToShow: 1,
		asNavFor: '.months',
		focusOnSelect: true,
		draggable: false
	});

	$('.months').slick({
		slidesToShow: 1,
		asNavFor: '.schedule-months',
		draggable: false,
		arrows: false
	});

	$('.calendar-col.number.green').click(function() {
		$('.calendar-col.number.green').removeClass('active');
		$(this).addClass('active');
	});

	$('.june .calendar-col.number.green.one').click(function() {
		$('.session-date span').text('1 июня 2017');
	});

	$('.jule .calendar-col.number.green.thirteen').click(function() {
		$('.session-date span').text('13 июля 2017');
	});

	$('.august .calendar-col.number.green.twenty').click(function() {
		$('.session-date span').text('20 августа 2017');
	});

	$('.modal-call').click(function() {
		$('.modal-wrapper').addClass('active');
	});

	$('.exit').click(function() {
		$('.modal-wrapper').removeClass('active');
	});

});
