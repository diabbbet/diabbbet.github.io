$(function() {

	if ($(window) && $(window).width() > 999) {
		$('.video').addClass('animate');
		$('#fullpage').fullpage({
			scrollOverflow: true,
			dragAndMove: false,
			onLeave: function(index, nextIndex, direction){
				if (nextIndex == 2) {
					$('.video').addClass('visible');
				}
				if (nextIndex == 4) {
					$('.how-wrapper').addClass('visible');
				}
				if (nextIndex == 7) {
					$('.lines-wrapper, .lines, .diagramm-wrapper').addClass('visible');
				}
				if (nextIndex == 6) {
					$('#sidebar').addClass('visible');
				} else {
					$('#sidebar').removeClass('visible');
				}
			}
		});

		$('#sidebar .label, #sidebar .circle-btn').on('click', function() {
			var $this = $(this);
			$this.parent().addClass('show');

			setTimeout(function(){
				$this.parent().removeClass('show');
				$.fn.fullpage.silentMoveTo(6);
			}, 500);
		});

		$('[data-link]').on('click', function() {
			var link = $(this).attr('data-link');
		});
	} else {
		$(window).on('load', function() {
			var mainHeight = $('.main').height();
			$('#sidebar').css('top', (mainHeight+29) + 'px');
		});
	}

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
		focusOnSelect: true,
		infinite: false,
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
	// countdown
	countdown();

	// triangles
	triangles();
	// main height
	// mainHeight();

	// resize
	$(window).on('resize', function() {
		// triangles
		triangles();
		// mainHeight();
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

	$('#sidebar').on('mouseenter', function() {
		$(this).addClass('active');
		$(this).find('.circle-btn').addClass('active');
	}).on('mouseleave', function() {
		$(this).removeClass('active');
		$(this).find('.circle-btn').removeClass('active');
	});

	if ($(window).width() < 1024) {
		$('#burger').on('click', function() {
			$('body').toggleClass('hidden');
			$(this).toggleClass('active');
			$('#nav').toggleClass('mobile');
		});
	}

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
	});

	$('.how-diagramm .line').on('mouseenter', function() {
		var percent = $(this).attr('data-percent');
		$('.how-diagramm .num').text(percent + '%');
		var attr = $(this).attr('data-color');
		$('.how-diagramm .lock').removeClass('active');
		$('.how-diagramm .lock[data-color="'+attr+'"]').addClass('active');
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
	var month_1 = 0.02286438 * ($('#invest').val()*1) *  ($('#btc').val()*1) / ($('#asic').val()*1);
	$('#month_1 span').text(Math.round(month_1));
	var month_2 = 7 * $('#invest').val() /  1 + month_1;
	$('#month_2 span').text(Math.round(month_2));
	var month_3 = 8 * $('#invest').val() /  1 + month_2;
	$('#month_3 span').text(Math.round(month_3));
	var month_4 = 7 * $('#invest').val() /  1 + month_3;
	$('#month_4 span').text(Math.round(month_4));
	var  month_5 = 8 * $('#invest').val() /  1 + month_4;
	var  month_6 = 9 * $('#invest').val() /  1 + month_5;
	$('#y1 span').text(Math.round(month_6));
	var  month_7 = 8 * $('#invest').val() /  1 + month_6;
	var  month_8 = 9 * $('#invest').val() /  1 + month_7;
	var  month_9 = 9 * $('#invest').val() /  1 + month_8;
	var  month_10 = 10 * $('#invest').val() /  1 + month_9;
	var  month_11 = 10 * $('#invest').val() /  1 + month_10;
	var  month_12 = 10 * $('#invest').val() /  1 + month_11;
	var  month_13 = 10 * $('#invest').val() /  1 + month_12;
	var  month_14 = 11 * $('#invest').val() /  1 + month_13;
	var  month_15 = 11 * $('#invest').val() /  1 + month_14;
	var  month_16 = 12 * $('#invest').val() /  1 + month_15;
	var  month_17 = 12 * $('#invest').val() /  1 + month_16;
	var  month_18 = 12 * $('#invest').val() /  1 + month_17;
	$('#y2 span').text(Math.round(month_18));
	var  month_19 = 13 * $('#invest').val() /  1 + month_18;
	var  month_20 = 14 * $('#invest').val() /  1 + month_19;
	var  month_21 = 13 * $('#invest').val() /  1 + month_20;
	var  month_22 = 15 * $('#invest').val() /  1 + month_21;
	var  month_23 = 15 * $('#invest').val() /  1 + month_22;
	var  month_24 = 17 * $('#invest').val() /  1 + month_23;
	var  month_25 = 16 * $('#invest').val() /  1 + month_24;
	var  month_26 = 18 * $('#invest').val() /  1 + month_25;
	var  month_27 = 16 * $('#invest').val() /  1 + month_26;
	var  month_28 = 18 * $('#invest').val() /  1 + month_27;
	var  month_29 = 19 * $('#invest').val() /  1 + month_28;
	var  month_30 = 20 * $('#invest').val() /  1 + month_29;
	$('#y3 span').text(Math.round(month_30));
	var  month_31 = 21 * $('#invest').val() /  1 + month_30;
	var  month_32 = 22 * $('#invest').val() /  1 + month_31;
	var  month_33 = 22 * $('#invest').val() /  1 + month_32;
	var  month_34 = 23 * $('#invest').val() /  1 + month_33;
	var  month_35 = 24 * $('#invest').val() /  1 + month_34;
	var  month_36 = 25 * $('#invest').val() /  1 + month_35;
	var  month_37 = 27 * $('#invest').val() /  1 + month_36;
	var  month_38 = 28 * $('#invest').val() /  1 + month_37;
	var  month_39 = 28 * $('#invest').val() /  1 + month_38;
	var  month_40 = 27 * $('#invest').val() /  1 + month_39;
	var  month_41 = 31 * $('#invest').val() /  1 + month_40;
	var  month_42 = 31 * $('#invest').val() /  1 + month_41;
	$('#y4 span').text(Math.round(month_42));

	$(".calculator-graph").addClass('build');
	setTimeout(function(){
		$(".calculator-graph").removeClass('build');
	}, 500);
}