$(function() {

	// if ($(window).width() > 1920) {
	// 	whiteRight();

	// }

	// $(window).on('resize', function() {
	// 	whiteRight();
	// });

	$('#team_slider').slick({
		infinite: false,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>'
	});

	$('.media-slider').slick({
		infinite: false,
		slidesToShow: 6,
		arrows: false,
		responsive: [{
			breakpoint: 1260,
			settings: {
				slidesToShow: 4
			}
		}]
	});

	if ($(window).width() < 768) {
		$('.team-items').slick({
			infinite: false,
			nextArrow: '<button type="button" class="slick-next"></button>',
			prevArrow: '<button type="button" class="slick-prev"></button>'
		});
	}

	$('.header-nav .item, .about .link').on('click', function() {
		if ($(this).is("[data-anchor]")) {
			var dataAttr = $(this).attr('data-anchor');
			var topPos = $('[data-anchor="'+dataAttr+'"]:not(.item)').offset().top;

			$('body,html').animate({scrollTop: topPos}, 1000);
			
			return false;
		}
	});

	$('.qube-top').mouseenter(function() {
		$(this).addClass('active');
	}).mouseleave(function() {
		$(this).removeClass('active');
	});

	$('.active').on('click', function() {

		return false;
	});
	
	$('.flag.active').on('click', function() {
		$('.flag-popup').toggle();
	});

	$('#modal .close').on('click', function() {
		$('body').removeClass('hidden');
		$('#modal').removeClass('active');
	});

	$('select').styler({

	});

	$('.modal-btn').on('click', function() {
		$('#modal').addClass('active');
		$('body').addClass('hidden');
		return false;
	});

	// function whiteRight() {
	// 	var triangleOffsetLeft = $('.main-section_triangle').offset().left;
	// 	var triangleWidth = $('.main-section_triangle').width();
	// 	leftCoords = triangleOffsetLeft+triangleWidth-3;
	// 	var rightCoords = $(window).width();

	// 	if ($(window).width() > 1920) {
	// 		$('.main-section_rigth-white').css({
	// 			'left': leftCoords,
	// 			'display': 'block'
	// 		});
	// 	} else {
	// 		$('.main-section_rigth-white').css({
	// 			'display': 'none'
	// 		});
	// 	}
	// }

	$('#modal_form select').on('change', function() {
		var val = $(this).val();
		console.log(val);
		$('#code').text(val);
	});

	//форма
	function form() {

		if ($('#modal_form').length) {
			console.log('kek')
			function initForm() {
				var $form = $('#modal_form');
				$form.on('change', '.validate', function(){
					validateField($(this));
				});

				$form.find('.btn-submit').on('click', function(){
					if (validateForm($form)) {
						var data = $form.serialize();
						$.ajax({
							url: 'mail.php',
							type: 'POST',
							dataType: 'json',
							data: data,
							success: function(data) {
								successForm();
							},
							error: function(data) {
								successForm();
							},
							timeout: 60000
						});
					}
					return false;
				});


				function successForm() {

					setTimeout(function(){
						clearForm($form);
						$('#modal').removeClass('active');
					}, 2000);

				}
			}
			initForm();

		}

	}
	form();

	var countdown = new Date('june 7, 2018');

	function getRemainingTime(endtime) {
		var milliseconds = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor(milliseconds / 1000 % 60);
		var minutes = Math.floor(milliseconds / 1000 / 60 % 60);
		var hours = Math.floor(milliseconds / (1000 * 60 * 60) % 24);
		var days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

		return {
			'total': milliseconds,
			'seconds': seconds,
			'minutes': minutes,
			'hours': hours,
			'days': days
		};
	}

	function initClock(id, endtime) {
		var counter = document.getElementById(id);
		var daysItem = counter.querySelector('.js-countdown-days');
		var hoursItem = counter.querySelector('.js-countdown-hours');
		var minutesItem = counter.querySelector('.js-countdown-minutes');
		var secondsItem = counter.querySelector('.js-countdown-seconds');

		function updateClock() {
			var time = getRemainingTime(endtime);

			daysItem.innerHTML = time.days;
			hoursItem.innerHTML = ('0' + time.hours).slice(-2);
			minutesItem.innerHTML = ('0' + time.minutes).slice(-2);
			secondsItem.innerHTML = ('0' + time.seconds).slice(-2);

			if (time.total <= 0) {
				clearInterval(timeinterval);
			}
		}

		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	}

	initClock('countdown', countdown);



});