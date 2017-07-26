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
		arrows: false,
		speed: 700
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

	$('.session-date span').text('1 июня 2017');
	$('.session-title').text('сеанс 1');

	$('.june .calendar-col.number.green.one').click(function() {
		$('.session-date span').text('1 июня 2017');
		$('.session-title').text('сеанс 1');
	});

	$('.jule .calendar-col.number.green.thirteen').click(function() {
		$('.session-date span').text('13 июля 2017');
		$('.session-title').text('сеанс 2');
	});

	$('.august .calendar-col.number.green.twenty').click(function() {
		$('.session-date span').text('20 августа 2017');
		$('.session-title').text('сеанс 3');
	});

	$('.modal-call').click(function() {
		$('.modal-wrapper').addClass('active');
	});

	$('.exit').click(function() {
		$('.modal-wrapper').removeClass('active');
	});

	$('.main-calendar--btn').click(function() {
		$('.main').slick('slickNext');
	});

	$('.main-help--btn').click(function() {
		$('.main').slick('slickPrev');
	});

});
