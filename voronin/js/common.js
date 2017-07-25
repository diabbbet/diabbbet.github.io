$(function() {

	$('.header').hover(function() {
		$('.header').toggleClass('active');
	});

	$('.help-btn').click(function() {
		$('section').removeClass('active');
		$('.help').addClass('active');
	});

	$('.founder-btn').click(function() {
		$('section').removeClass('active');
		$('.founder').addClass('active');
	});

	$('.calendar-btn').click(function() {
		$('section').removeClass('active');
		$('.calendar').addClass('active');
	});

	$('.schedule-months').slick({
	});

});
