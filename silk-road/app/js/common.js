$(function() {

	$('.animate').viewportChecker();

	// team-slider
	$('#team').slick({
		fade: true,
		arrows: false,
		draggable: false,
		asNavFor: '#team_controlls'
	});

	// team-slider-controlls
	$('#team_controlls').slick({
		slidesToShow: 5,
		arrows: false,
		draggable: false,
		asNavFor: '#team',
		focusOnSelect: true
	});

	// partners-slider
	$('#partners').slick({
		variableWidth: true,
		arrows: false,
		speed: 1000,
		cssEase: 'linear',
		draggable: false
	});

	var hoverTimer = '';

	$('#partners_prev')
	.on('mouseenter', function() {
		hoverTimer = setInterval(function() {
			$('#partners').slick('slickPrev');
		}, 10);
	})
	.on('mouseleave', function() {
		clearInterval(hoverTimer);
	});

	$('#partners_next')
	.on('mouseenter', function() {
		hoverTimer = setInterval(function() {
			$('#partners').slick('slickNext');
		}, 10);
	})
	.on('mouseleave', function() {
		clearInterval(hoverTimer);
	});

	// placeholders
	initPlaceholders();

	// form
	form();
	// countdown
	countdown();

	// triangles
	triangles();
	// main height
	mainHeight();

	// resize
	$(window).on('resize', function() {
		// triangles
		triangles();
		mainHeight();
	});


	$('.range-slider').each(function() {
		var item = $(this).attr('data-range');
		var max = $(this).attr('data-max');
		var val = $(this).attr('data-val');

		$(this).slider({
			range: 'min',
			max: max,
			value: val,
			slide: function( event, ui ) {
				$('.total-input[data-range="'+item+'"]').val(ui.value).attr('data-val', ui.value);
			}
		});
	});

	$('.total-input').each(function() {
		var item = $(this).attr('data-range');
		$(this).on('change', function() {
			$(this).attr('data-val', $(this).val());
			$('.range-slider[data-range="'+item+'"]').slider('value', $(this).val());
		});
	});

	$('.total-input').keydown(function(event) {
		if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode >= 35 && event.keyCode <= 39)) {
			return;
		} else {
			if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
				event.preventDefault(); 
			}
		}
	});

	var player = videojs('my-player');

	$('#video').find('.controlls-video .item').on('click', function() {
		if ($(this).hasClass('active')) {
			return false;
		}
		$(this).addClass('active').siblings().removeClass('active');
		var url = $(this).attr('data-url');
		$('#video video').attr('src', url);
	});

	$('#scroll_btn').on('click', function() {
		var top = $('.video').offset().top ++;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$('#sidebar').on('mouseenter', function() {
		$(this).addClass('active');
	}).on('mouseleave', function() {
		$(this).removeClass('active');
	});

	$('#burger').on('click', function() {
		$('body').toggleClass('hidden');
		$(this).toggleClass('active');
		$('#nav').toggleClass('mobile');
	})

});

// form
function form() {

	if ($('#partners_form').length) {
		var $form = $('#partners_form');
		$form.on('change', '.validate', function(){
			validateField($(this));
		});

		$form.find('.btn-submit').on('click', function(){
			if ($(this).hasClass('disabled')) {
				return false;
			} else {
				if (validateForm($form)) {
					$(this).addClass('disabled');
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
							errorForm();
						},
						timeout: 60000
					});
				}
				return false;
			}
		});

		function successForm() {
			$('#grats span').text('Заявка отправлена!');
			$('#grats').show();

			setTimeout(function(){
				clearForm($form);
				$('#grats').hide();
			}, 2000);
		}

		function errorForm() {
			$('#grats span').text('Что-то пошло не так!');
			$('#grats').show();

			setTimeout(function(){
				clearForm($form);
				$('#grats').hide();
			}, 2000);
		}
	}
}

// triangles
function triangles() {
	var wWidth = $(window).width();
	$('#team_triangle').css('border-width', '60px 0 0 '+wWidth+'px');
	$('#roadmap_triangle').css('border-width', '0 0 110px '+wWidth+'px');
	$('#calculator_triangle').css('border-right-width', wWidth+'px');
	$('#how_triangle').css('border-left-width', wWidth+'px');
	$('#our_body_triangle').css({
		'border-right-width': wWidth/2+'px',
		'border-left-width': wWidth/2+'px'
	});
	$('#main_triangle').css('border-left-width', wWidth+'px');
}

// main height
function mainHeight() {
	var wHeight = $(window).height();
	var wWidth = $(window).width();
	if (wHeight > 799 || wWidth > 1043 ) {
		$('#main_section').height(wHeight);
	}
}

function countdown() {
	var countdown = new Date('june 17, 2020');

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
		// var daysItem = counter.querySelector('.js-countdown-days');
		var hoursItem = counter.querySelector('.js-countdown-hours');
		var minutesItem = counter.querySelector('.js-countdown-minutes');
		var secondsItem = counter.querySelector('.js-countdown-seconds');

		function updateClock() {
			var time = getRemainingTime(endtime);

			// daysItem.innerHTML = time.days;
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
}