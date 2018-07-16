$(function() {

	$('#sidebar .label, #sidebar .circle-btn').on('click', function() {
		if ($(window).width() < 1025 && $(this).hasClass('circle-btn')) {
			$('#sidebar').addClass('active');
			$('#sidebar').find('.circle-btn').addClass('active');
		} else {
			var $this = $(this);
			$this.parent().addClass('show');
			var top = $('.calculator').offset().top;
			$('body,html').animate({scrollTop: top}, 1000);

			setTimeout(function(){
				$this.parent().removeClass('show');
			}, 500);
		}
		
	});

	$('.lang-change').on('click', function() {
		$(this).siblings('.lang-popup').toggleClass('active');
		$(this).toggleClass('active');
	});

	// $('#lng').find('.item.active').on('click', function() {
	// 	$(this).closest('#lng').toggleClass('open');
	// 	return false;
	// });

	var spoilerCheck = 0;
	$('.spoiler-btn').on('click', function() {
		if (spoilerCheck == 0) {
			$(this).text('Скрыть');
			$(this).parent().find('.desc').addClass('full');
			spoilerCheck = 1;
		} else {
			$(this).text('Показать еще');
			$(this).parent().find('.desc').removeClass('full');
			spoilerCheck = 0;
		}
	});

	$('body').find('*').not('.circle-btn, #sidebar').on('click', function() {
		$('#sidebar').removeClass('active');
		$('#sidebar').find('.circle-btn').removeClass('active');
	});

	$('[data-link]').on('click', function() {
		var link = $(this).attr('data-link');
		var top = $('[data-anchor="'+link+'"]').offset().top;
		$('body,html').animate({scrollTop: top}, 1000);

		$('.nav.mobile').removeClass('mobile');
		$('.burger').removeClass('active');
		$('body').removeClass('hidden');
		return false;
	});

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
		asNavFor: '#team',
		focusOnSelect: true,
		infinite: true,
		swipeToSlide: true,
		centerMode: true,
		centerPadding: 0,
		responsive: [{
			breakpoint: 1044,
			settings: {
				slidesToShow: 3
			}
		}]
	});

	$('#partners').mousemove(function() {
		var width = $(this).width();
		var wrapperWidth = $(this).find('.partners-items-wrapper').width();
		var offset = wrapperWidth - width;
		var parentOffset = $(this).offset(); 
		var relX = event.pageX - parentOffset.left;
		var persent = relX / width * 100;
		persent = Math.floor(persent);
		var position = offset / 100 * persent;
		if (offset > 1) {
			$(this).find('.partners-items-wrapper').removeClass('short');
			$(this).find('.partners-items-wrapper').css({
				'transform': 'translateX(-'+position+'px)',
				'cursor': 'move'
			});
		}
	});

	if ($(window).width() < 1044) {
		// partners-slider
		$('#partners .partners-items-wrapper').slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 5,
			infinite: false,
			responsive: [{
				breakpoint: 576,
				settings: {
					slidesToShow: 3
				}
			},{
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	}

	// placeholders
	initPlaceholders();

	// form
	form();
	form2();
	// countdown
	countdown();

	// triangles
	triangles();

	// resize
	$(window).on('resize', function() {
		// triangles
		triangles();
	});


	$('.range-slider').each(function() {
		var item = $(this).attr('data-range')*1;
		var max = $(this).attr('data-max')*1;
		var min = $(this).attr('data-min')*1;
		var val = $(this).attr('data-val')*1;
		var step = $(this).attr('data-step')*1;

		$(this).slider({
			range: 'min',
			min: min,
			max: max,
			step: step,
			value: val,
			slide: function( event, ui ) {
				$('.total-input[data-range="'+item+'"]').val(ui.value).attr('data-val', ui.value);
			}
		});
	});

	$('.total-input').each(function() {
		var item = $(this).attr('data-range');
		$(this).on('change', function() {
			if ($(this).val()*1 < $(this).attr('data-min')*1) {
				$(this).val($(this).attr('data-min')*1);
			}
			if ($(this).val()*1 > $(this).attr('data-max')*1) {
				$(this).val($(this).attr('data-max')*1);
			}
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

	if ($(window).width() > 1024) {

		$('#sidebar').on('mouseenter', function() {
			$(this).addClass('active');
			$(this).find('.circle-btn').addClass('active');
		}).on('mouseleave', function() {
			$(this).removeClass('active');
			$(this).find('.circle-btn').removeClass('active');
		});

	}

	$('#burger').on('click', function() {
		$('body').toggleClass('hidden');
		$(this).toggleClass('active');
		$('#nav').toggleClass('mobile');
	});

	$('#roadmap_graph').find('.year').on('mouseenter', function() {
		$('#roadmap_graph .rectangle .red-text').text($(this).attr('data-red'));
		$('#roadmap_graph .rectangle .white-text').text($(this).attr('data-white'));
	});

	$('.refferal-diagramm .line-diagramm').on('mouseenter', function() {
		var percent = $(this).attr('data-percent');
		$('.refferal-diagramm .center-text').text(percent);
		var dataLock = $(this).attr('data-lock');
		$('.lock-lock').removeClass('active');
		$('.lock-lock[data-lock="'+dataLock+'"]').addClass('active');

	});

	$('.btn-invest').on('click', function() {
		calculator();
		return false;
	});

	$('.how-diagramm .line').on('mouseenter', function() {
		var percent = $(this).attr('data-percent');
		$('.how-diagramm .num').text(percent + '%');
		var attr = $(this).attr('data-color');
		$('.how-diagramm .lock').removeClass('active');
		$('.how-diagramm .lock[data-color="'+attr+'"]').addClass('active');
	});

	$('[data-modal-link]').on('click', function() {
		var modal = $(this).attr('data-modal-link');
		$('[data-modal="'+modal+'"]').show();
		$('body').addClass('hidden');
		$('.nav.mobile').removeClass('mobile');
		$('.burger').removeClass('active');
		return false;
	});

	$('.modal .modal-close').on('click', function() {
		$('body').removeClass('hidden');
		$(this).closest('.modal').hide();
	});


});

$(window).on('load', function() {
	$('#load').fadeOut();
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

// form
function form2() {

	if ($('#modal_form').length) {
		var $form = $('#modal_form');
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
			$('#grats2 span').text('Заявка отправлена!');
			$('#grats2').show();

			setTimeout(function(){
				clearForm($form);
				$('#grats2').hide();
			}, 2000);
		}

		function errorForm() {
			$('#grats2 span').text('Что-то пошло не так!');
			$('#grats2').show();

			setTimeout(function(){
				clearForm($form);
				$('#grats2').hide();
			}, 2000);
		}
	}
}

// triangles
function triangles() {
	var wWidth = $(window).width();
	$('#team_triangle').css('border-left-width', wWidth+'px');
	$('#roadmap_triangle').css('border-left-width', wWidth+'px');
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

function calculator() {
	var month_1 = 0.02286438 * ($('#invest').val() * $('#btc').val() / $('#asic').val());
	var month_2 = 0.004572876 * ($('#btc').val() * month_1 / $('#asic').val()) + month_1;
	var month_3 = 0.004572876 * ($('#btc').val() * month_2 / $('#asic').val()) + month_2;
	var month_4 = 0.004572876 * ($('#btc').val() * month_3 / $('#asic').val()) + month_3;
	var month_5 = 0.004572876 * ($('#btc').val() * month_4 / $('#asic').val()) + month_4;
	var month_6 = 0.004572876 * ($('#btc').val() * month_5 / $('#asic').val()) + month_5;

	var y1 = month_1 + month_2 + month_3 + month_4 + month_5 + month_6;

	var month_7 = 0.004572876 * ($('#btc').val() * month_6 / $('#asic').val()) + month_6;
	var month_8 = 0.004572876 * ($('#btc').val() * month_7 / $('#asic').val()) + month_7;
	var month_9 = 0.004572876 * ($('#btc').val() * month_8 / $('#asic').val()) + month_8;
	var month_10 = 0.004572876 * ($('#btc').val() * month_9 / $('#asic').val()) + month_9;
	var month_11 = 0.004572876 * ($('#btc').val() * month_10 / $('#asic').val()) + month_10;
	var month_12 = 0.004572876 * ($('#btc').val() * month_11 / $('#asic').val()) + month_11;
	var month_13 = 0.004572876 * ($('#btc').val() * month_12 / $('#asic').val()) + month_12;
	var month_14 = 0.004572876 * ($('#btc').val() * month_13 / $('#asic').val()) + month_13;
	var month_15 = 0.004572876 * ($('#btc').val() * month_14 / $('#asic').val()) + month_14;
	var month_16 = 0.004572876 * ($('#btc').val() * month_15 / $('#asic').val()) + month_15;
	var month_17 = 0.004572876 * ($('#btc').val() * month_16 / $('#asic').val()) + month_16;
	var month_18 = 0.004572876 * ($('#btc').val() * month_17 / $('#asic').val()) + month_17;

	var y2 = month_1 + month_2 + month_3 + month_4 + month_5 + month_6 + month_7 + month_8 + month_9 + month_10 + month_11 + month_12 + month_13 + month_14 + month_15 + month_16 + month_17 + month_18;

	var month_19 = 0.004572876 * ($('#btc').val() * month_18 / $('#asic').val()) + month_18;
	var month_20 = 0.004572876 * ($('#btc').val() * month_19 / $('#asic').val()) + month_19;
	var month_21 = 0.004572876 * ($('#btc').val() * month_20 / $('#asic').val()) + month_20;
	var month_22 = 0.004572876 * ($('#btc').val() * month_21 / $('#asic').val()) + month_21;
	var month_23 = 0.004572876 * ($('#btc').val() * month_22 / $('#asic').val()) + month_22;
	var month_24 = 0.004572876 * ($('#btc').val() * month_23 / $('#asic').val()) + month_23;
	var month_25 = 0.004572876 * ($('#btc').val() * month_24 / $('#asic').val()) + month_24;
	var month_26 = 0.004572876 * ($('#btc').val() * month_25 / $('#asic').val()) + month_25;
	var month_27 = 0.004572876 * ($('#btc').val() * month_26 / $('#asic').val()) + month_26;
	var month_28 = 0.004572876 * ($('#btc').val() * month_27 / $('#asic').val()) + month_27;
	var month_29 = 0.004572876 * ($('#btc').val() * month_28 / $('#asic').val()) + month_28;
	var month_30 = 0.004572876 * ($('#btc').val() * month_29 / $('#asic').val()) + month_29;

	var y3 = month_1 + month_2 + month_3 + month_4 + month_5 + month_6 + month_7 + month_8 + month_9 + month_10 + month_11 + month_12 + month_13 + month_14 + month_15 + month_16 + month_17 + month_18 + month_19 + month_20 + month_21 + month_22 + month_23 + month_24 + month_25 + month_26 + month_27 + month_28 + month_29 + month_30;

	var month_31 = 0.004572876 * ($('#btc').val() * month_30 / $('#asic').val()) + month_30;
	var month_32 = 0.004572876 * ($('#btc').val() * month_31 / $('#asic').val()) + month_31;
	var month_33 = 0.004572876 * ($('#btc').val() * month_32 / $('#asic').val()) + month_32;
	var month_34 = 0.004572876 * ($('#btc').val() * month_33 / $('#asic').val()) + month_33;
	var month_35 = 0.004572876 * ($('#btc').val() * month_34 / $('#asic').val()) + month_34;
	var month_36 = 0.004572876 * ($('#btc').val() * month_35 / $('#asic').val()) + month_35;
	var month_37 = 0.004572876 * ($('#btc').val() * month_36 / $('#asic').val()) + month_36;
	var month_38 = 0.004572876 * ($('#btc').val() * month_37 / $('#asic').val()) + month_37;
	var month_39 = 0.004572876 * ($('#btc').val() * month_38 / $('#asic').val()) + month_38;
	var month_40 = 0.004572876 * ($('#btc').val() * month_39 / $('#asic').val()) + month_39;
	var month_41 = 0.004572876 * ($('#btc').val() * month_40 / $('#asic').val()) + month_40;
	var month_42 = 0.004572876 * ($('#btc').val() * month_41 / $('#asic').val()) + month_41;

	var y4 = month_1 + month_2 + month_3 + month_4 + month_5 + month_6 + month_7 + month_8 + month_9 + month_10 + month_11 + month_12 + month_13 + month_14 + month_15 + month_16 + month_17 + month_18 + month_19 + month_20 + month_21 + month_22 + month_23 + month_24 + month_25 + month_26 + month_27 + month_28 + month_29 + month_30 + month_31 + month_32 + month_33 + month_34 + month_35 + month_36 + month_37 + month_38 + month_39 + month_40 + month_41 + month_42;
	
	$('#month_1 span').text(Math.round(month_1));
	$('#month_2 span').text(Math.round(month_2));
	$('#month_3 span').text(Math.round(month_3));
	$('#month_4 span').text(Math.round(month_4));
	$('#y1 span').text(Math.round(y1));
	$('#y2 span').text(Math.round(y2));
	$('#y3 span').text(Math.round(y3));
	$('#y4 span').text(Math.round(y4));
	$(".calculator-graph").addClass('build');
	setTimeout(function(){
		$(".calculator-graph").removeClass('build');
	}, 500);
}