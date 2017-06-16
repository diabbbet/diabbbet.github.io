$(function() {

	// хедер бг
	$('.main .title').parent().parent().find('.header .header-line').css('background', 'none');

	// слайдер на главной
	$('.siting-slider').slick({
		slidesToShow: 3,
		autoplay: true,
		pauseOnHover: true,
		centerMode: true,
		centerPadding: '0',
		prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24"><path fill="#fff" d="M.5 11.39l10.72-9.94a1.76 1.76 0 0 1 2.37 0c.65.6.65 1.59 0 2.19l-7.86 7.3h28.64c.92 0 1.67.69 1.67 1.55 0 .86-.75 1.56-1.67 1.56H5.73l7.86 7.29c.65.61.65 1.59 0 2.2a1.76 1.76 0 0 1-2.37 0L.49 13.59a1.48 1.48 0 0 1 0-2.2z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24"><path fill="#fff" d="M36.51 11.39L25.78 1.45a1.76 1.76 0 0 0-2.37 0c-.65.6-.65 1.59 0 2.19l7.87 7.3H2.63c-.92 0-1.67.69-1.67 1.55 0 .86.75 1.56 1.67 1.56h28.65l-7.87 7.29a1.48 1.48 0 0 0 0 2.2 1.75 1.75 0 0 0 2.37 0l10.73-9.95c.65-.6.65-1.59 0-2.2z"/></svg></button>'
	});


	// слайдер фотоальбом
	$('.photoalbum-slider').slick({
		slidesToShow: 1,
		autoplay: true,
		pauseOnHover: true,
		infinite: true,
		asNavFor: '.photoalbum-dots',
		prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24"><path fill="#fff" d="M.5 11.39l10.72-9.94a1.76 1.76 0 0 1 2.37 0c.65.6.65 1.59 0 2.19l-7.86 7.3h28.64c.92 0 1.67.69 1.67 1.55 0 .86-.75 1.56-1.67 1.56H5.73l7.86 7.29c.65.61.65 1.59 0 2.2a1.76 1.76 0 0 1-2.37 0L.49 13.59a1.48 1.48 0 0 1 0-2.2z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24"><path fill="#fff" d="M36.51 11.39L25.78 1.45a1.76 1.76 0 0 0-2.37 0c-.65.6-.65 1.59 0 2.19l7.87 7.3H2.63c-.92 0-1.67.69-1.67 1.55 0 .86.75 1.56 1.67 1.56h28.65l-7.87 7.29a1.48 1.48 0 0 0 0 2.2 1.75 1.75 0 0 0 2.37 0l10.73-9.95c.65-.6.65-1.59 0-2.2z"/></svg></button>'
	});


	// доты фотоальбом
	$('.photoalbum-dots').slick({
		slidesToShow: 3,
		autoplay: true,
		pauseOnHover: true,
		asNavFor: '.photoalbum-slider',
		centerPadding: '0',
		prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24"><path class="orange" fill="#e1dfdf" d="M.5 11.39l10.72-9.94a1.76 1.76 0 0 1 2.37 0c.65.6.65 1.59 0 2.19l-7.86 7.3h28.64c.92 0 1.67.69 1.67 1.55 0 .86-.75 1.56-1.67 1.56H5.73l7.86 7.29c.65.61.65 1.59 0 2.2a1.76 1.76 0 0 1-2.37 0L.49 13.59a1.48 1.48 0 0 1 0-2.2z"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24"><path class="orange" fill="#e1dfdf" d="M36.51 11.39L25.78 1.45a1.76 1.76 0 0 0-2.37 0c-.65.6-.65 1.59 0 2.19l7.87 7.3H2.63c-.92 0-1.67.69-1.67 1.55 0 .86.75 1.56 1.67 1.56h28.65l-7.87 7.29a1.48 1.48 0 0 0 0 2.2 1.75 1.75 0 0 0 2.37 0l10.73-9.95c.65-.6.65-1.59 0-2.2z"/></svg></button>',
		centerMode: true,
		focusOnSelect: true,
		infinite: true
	});


	// слайдер внутренняя аукцион
	$('.cottage-slider').slick({
		slidesToShow: 1,
		autoplay: true,
		pauseOnHover: true,
		arrows: false,
		dots: true
	});


	// модалка вход
	$('.header-profile a').click(function() {
		$('.entry-modal--wrapper').fadeIn();
	});

	// модалка регистрация
	$('.reg-btn').click(function() {
		$('.register-modal--wrapper').fadeIn();
		$('.entry-modal--wrapper').fadeOut();
	});


	// модалка спасибо за заявку
	$('.modal-btn--test').click(function() {
		$('.thanks-modal--wrapper').fadeIn();
	});


	// модалка задайте вопрос
	$('.faq-write--btn').click(function() {
		$('.faq-modal--wrapper').fadeIn();
	});


	// модалка отзыв
	$('.review-feedback--btn').click(function() {
		$('.fedback-modal--wrapper').fadeIn();
	});


	//модалка правила 
	$('.auctions-rule--btn, .cottage-rule').click(function() {
		$('.rule-modal--wrapper').fadeIn();
	});


	// модалка схема 
	$('.scheme-btn').click(function() {
		$('.scheme-modal--wrapper').css('opacity', '1');
		$('.scheme-modal--wrapper').css('pointer-events', 'auto');
	});

	$('.scheme-overlay').click(function() {
		$('.scheme-modal--wrapper').css('opacity', '0');
		$('.scheme-modal--wrapper').css('pointer-events', 'none');
	});


	$('.modal-overlay').click(function() {
		$('.modal-wrapper').fadeOut();
	});

	$('.exit').click(function() {
		$(this).parent().parent().fadeOut('fast');
	});


	// спойдер FAQ
	$('.faq-questions li').click(function() {
		$(this).find('.faq-questions--desc').collapse('toggle');
	});

	$('.pen').click(function() {
		$(this).parent().find('.personal-text span').css('display', 'none');
		$(this).parent().find('.personal-text').append('<input>');
		$(this).parent().find('input').focus();
		$('.personal-overlay').addClass('active');
	});
	$('.personal-overlay').click(function() {
		$('.personal-overlay').removeClass('active');
		$('.personal-name .personal-text span').css('display', 'block');
		$('.personal-name .personal-text span').text($('.personal-name .personal-text input').val());
		$('.personal-name .personal-text input').css('display', 'none');

		$('.personal-tel .personal-text span').css('display', 'block');
		$('.personal-tel .personal-text span').text($('.personal-tel .personal-text input').val());
		$('.personal-tel .personal-text input').css('display', 'none');

		$('.personal-mail .personal-text span').css('display', 'block');
		$('.personal-mail .personal-text span').text($('.personal-mail .personal-text input').val());
		$('.personal-mail .personal-text input').css('display', 'none');
	});


	// скроллбар отзывы
	$('.review-item--desc').mCustomScrollbar();

	// скроллбар внутренняя аукциона
	$('.cottage-checkwrapper').mCustomScrollbar();

	// скроллбар услуги
	$('.services-price--table-wrapper').mCustomScrollbar();

	$('.cottage-desc.accomo-inside').mCustomScrollbar();
	$('.cottage-desc.auctions-inside').mCustomScrollbar();

	
	$('.accomodation-home--btn').click(function() {
		$('.accomodation-home--btn').removeClass('active');
		$(this).addClass('active');
		$('.accomodation-home--info').fadeIn('fast');
	});

	$('.home-info--exit').click(function() {
		$('.accomodation-home').removeClass('active');
		$('.accomodation-home--info').fadeOut('fast');
	});

	$('.accomodation-img img').click(function() {
		$('.accomodation-home--btn').removeClass('active');
		$('.accomodation-home--info').fadeOut('fast');
	});
	



	// кнопка внутренняя аукциона
	$('.cottage-additionally--btn').click(function() {
		$('.cottage-additionally--checkwrapper').toggleClass('active');
	});

	$('.cottage-additionally--clear').click(function() {
		$('input:checked').removeAttr('checked');
	});

	// селект фильтр
	$('#type-home').niceSelect();
	$('#num-person').niceSelect();

	$("#price-home").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 0,
		max: 500,
		from: 0,
		to: 250,
		type: 'double',
		step: 1
	});


	// флипкаунтер
	var clock_1 = $('.flipcounter_1').FlipClock({
		clockFace : "DailyCounter",
		language : "ru"
	});

	var clock_2 = $('.flipcounter_2').FlipClock({
		clockFace : "DailyCounter",
		language : "ru"
	});

	var clock_3 = $('.flipcounter_3').FlipClock({
		clockFace : "DailyCounter",
		language : "ru"
	});

	var clock_4 = $('.flipcounter_4').FlipClock({
		clockFace : "DailyCounter",
		language : "ru"
	});

	var clock_5 = $('.flipcounter_5').FlipClock({
		clockFace : "DailyCounter",
		language : "ru"
	});
	
	var clock_6 = $('.flipcounter_6').FlipClock({
		clockFace : "DailyCounter",
		language : "ru"
	});


	var date = "june 29 2017 22:22:21";
	var firstDate = new Date(date);
	var lastDate = Date.now();
	var remaining = firstDate - lastDate;
	remaining /=1000;

	clock_1.setTime(remaining);
	clock_1.setCountdown(true);
	clock_2.setTime(remaining);
	clock_2.setCountdown(true);
	clock_3.setTime(remaining);
	clock_3.setCountdown(true);
	clock_4.setTime(remaining);
	clock_4.setCountdown(true);
	clock_5.setTime(remaining);
	clock_5.setCountdown(true);
	clock_6.setTime(remaining);
	clock_6.setCountdown(true);

	if ($('.flipcounter .flip:nth-of-type(2) .flip-clock-active .inn').text() == 0) {
		$('.flipcounter .flip:nth-of-type(1)').css('display', 'none');
		$('.flipcounter .flip:nth-of-type(2)').css('display', 'none');
		$('.flipcounter .flip-clock-divider.days').css('display', 'none');
		$('.fire').css('display', 'none');
	} else {
		$('.flipcounter .flip:nth-of-type(1)').css('display', 'block');
		$('.flipcounter .flip:nth-of-type(2)').css('display', 'block');
		$('.flipcounter .flip-clock-divider.days').css('display', 'block');
		$('.fire').css('display', 'block');
	}
	if ($('.flipcounter .flip:nth-of-type(2) .flip-clock-active .inn').text() != 0) {
		$('.flipcounter .flip:nth-of-type(5)').css('display', 'none');
		$('.flipcounter .flip:nth-of-type(6)').css('display', 'none');
		$('.flipcounter .flip-clock-divider.minutes').css('display', 'none');
	} else {
		$('.flipcounter .flip:nth-of-type(5)').css('display', 'block');
		$('.flipcounter .flip:nth-of-type(6)').css('display', 'block');
		$('.flipcounter .flip-clock-divider.minutes').css('display', 'block');
	}


	$('.burger-wrapper').click(function() {
		$('.burger-wrapper .burger').toggleClass('active');
		$('.header-nav').toggleClass('active');
	});

	ymaps.ready(function () {
		var myMap = new ymaps.Map('scheme', {
			center: [53.476208, 50.005206],
			zoom: 13
		}),

		myPlacemark = new ymaps.Placemark([53.474750, 49.991725], {
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/map-marker.svg',
			iconImageSize: [30, 42],
			iconImageOffset: [-13, -40]
		}),

		myPlacemarkWithContent = new ymaps.Placemark([53.487969, 50.028595], {
		}, {
			iconLayout: 'default#imageWithContent',
			iconImageHref: 'img/map-marker.svg',
			iconImageSize: [30, 42],
			iconImageOffset: [-13, -40]
		});
		myPlacemarkWithMastr = new ymaps.Placemark([53.468939, 49.957672], {
		}, {
			iconLayout: 'default#imageWithContent',
			iconImageHref: 'img/map-marker.svg',
			iconImageSize: [30, 42],
			iconImageOffset: [-13, -40]
		});

		var myPolyline = new ymaps.Polyline([
			[53.487969, 50.028595],
			[53.487384, 50.029222],
			[53.484267, 50.028042],
			[53.484062, 50.029630],
			[53.478795, 50.027746],
			[53.478795, 50.027746],
			[53.478584, 50.027468],
			[53.477144, 50.018648],
			[53.476734, 50.018369],
			[53.476222, 50.015580],
			[53.476837, 49.997191],
			[53.476389, 49.994830],
			[53.475966, 49.994079],
			[53.475531, 49.992921],
			[53.475057, 49.992320],
			[53.474187, 49.986955],
			[53.473739, 49.985325],
			[53.473009, 49.984316],
			[53.472663, 49.983544],
			[53.472612, 49.981076],
			[53.472305, 49.979531],
			[53.472074, 49.978630],
			[53.471844, 49.975476],
			[53.471383, 49.974317],
			[53.470359, 49.969682],
			[53.470090, 49.965605],
			[53.469411, 49.963545],
			[53.469053, 49.960627],
			[53.468939, 49.957672]
			], {
				balloonContent: "Ломаная линия"
			}, {
				balloonCloseButton: false,
				strokeColor: "#ad7ef6",
				strokeWidth: 6,
				strokeOpacity: 1
			});

		myMap.geoObjects
		.add(myPlacemark)
		.add(myPlacemarkWithContent)
		.add(myPlacemarkWithMastr)
		.add(myPolyline);
	});


});
