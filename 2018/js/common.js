$(function() {

	//виджет ВКонтакте
	if ($('#vk_groups1').length) {
		function initVK() {
			var width = $('.col.w33').first().width()*1;
			$('#vk_groups1').html('');
			VK.Widgets.Group("vk_groups1", {
				mode: 2, 
				width: width, 
				height: "520"
			}, 51812607);
		}
		initVK();
		$(window).on('resize', function(){
			initVK();
		});
	}

	// виджет твиттер
	if ($('#twitter-wall').length) {
		document.addEventListener("twitter-wall-loaded", function() {
			jQuery('#twitter-wall').twitterWall({
				width: 780,
				height: 510,
				cols: 3,
				rows: 3,
				marginLeft: 5,
				marginTop: 5,
				animationDuration: 2000,
				changeInterval: 4000
			});
		});
	}

	// слайдер турнирная таблица
	if ($('#tournament_gallery').length) {
		$('#tournament_gallery').find('.slider-wrapper').slick({
			slidesToShow: 3,
			prevArrow: '<button class="slider-arrow prev"><i class="icon icon-left"></i><span>Назад</span></button>',
			nextArrow: '<button class="slider-arrow next"><span>вперед</span><i class="icon icon-right"></i></button>'
		});
	}

	if ($('#leader_tabs').length) {
		$('#leader_tabs').find('.tabs-controller').on('click', function() {
			$(this).addClass('active').siblings('.tabs-controller').removeClass('active');

			var item = $(this).attr('data-item');

			$('#leader_tabs').find('.tabs-item[data-item="'+item+'"]').addClass('active').siblings('.tabs-item').removeClass('active');
		});

		$('#leader_tabs').find('.tabs-item').slick({
			slidesToShow: 5,
			arrows: false,
			responsive: [{

				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					infinite: false
				}

			}]
		});
	}

	$('.select').styler();

	// фильтр расписаний
	if ($('#schedule_tabs').length) {
		function initMatchesFilter() {
			function filterMatches() {

				var stageFilter = $('#schedule_tabs').find('.tabs-btn.active').attr('data-stage');

				var teamFilter = $('#team_select').val();

				var cityFilter = $('#city_select').val();

				var matchesFilter = $('#matches_select').val();

				$('#matches_list .schedule-row').each(function(){
					var stage = $(this).attr('data-stage');
					var team1 = $(this).attr('data-team1');
					var team2 = $(this).attr('data-team2');
					var city = $(this).attr('data-city');
					var matches = $(this).attr('data-matches');

					var show = 1;

					if (stageFilter != '0' && stageFilter != stage) {
						show = 0;
					}

					if (teamFilter != 0 && teamFilter != team1 && teamFilter != team2 ) {
						show = 0;
					}

					if (cityFilter != '0' && cityFilter != city) {
						show = 0;
					}

					if (matchesFilter != '0' && matchesFilter != matches) {
						show = 0;
					}

					if (show == 1) {
						$(this).addClass('show');
					} else {
						$(this).removeClass('show');
					}

				});

				$('#matches_list .schedule-row').hide();
				$('#matches_list .schedule-row.show').show();


				$('#matches_list .schedule-table').hide().each(function(){
					if ($(this).find('.schedule-row.show').length) {
						$(this).show();
					}
				});

				$('#matches_list .item-stage').hide().each(function(){
					if ($(this).find('.schedule-row.show').length) {
						$(this).show();
					}
				});

				$('#matches_list').each(function(){
					if ($(this).find('.schedule-row.show').length) {
						$(this).find('#oops').removeClass('show');
					} else {
						$(this).find('#oops').addClass('show');
					}
				});

			}

			filterMatches();

			$('#schedule_tabs').find('.tabs-btn').on('click', function() {
				if ($(this).hasClass('active')) {
					return false;
				} else {
					$(this).addClass('active').siblings('.tabs-btn').removeClass('active');
					filterMatches();
				}
			});

			$('#selects').find('.select').on('change', function() {
				filterMatches();
			});
		}
		initMatchesFilter();
	}

	if ($('#match_controlls').length) {
		$('#match_controlls').find('.item').on('click', function() {
			$(this).addClass('active').siblings('.item').removeClass('active');
		});
	}

	if ($('#team_controlls').length) {
		$('#team_controlls').find('.item').on('click', function() {
			$(this).addClass('active').siblings('.item').removeClass('active');
			var item = $(this).attr('data-item');
			$('#match_items').find('.match-item[data-item="'+item+'"]').addClass('active').siblings('.match-item').removeClass('active');
		});
	}

	if ($('#dashboard_tabs').length) {
		$('#dashboard_tabs').find('.tabs-btn').on('click', function() {
			$(this).addClass('active').siblings('.tabs-btn').removeClass('active');
			var dashboard = $(this).attr('data-dashboard');
			$('#dashboard_items').find('.dashboard-item[data-dashboard="'+dashboard+'"]').addClass('active').siblings('.dashboard-item').removeClass('active');
		});
	}

	if ($('#translation_photos').length) {
		$('#translation_photos').find('.item').on('click', function() {
			$('#translation_gallery').fadeIn('fast');
			$('body').addClass('hidden');

			$('#translation_gallery').find('.slick-slider').slick('unslick');
			$('#translation_gallery').find('.modal-gallery').html('');

			$('#translation_photos').find('.item').each(function() {

				var gallery = '<div class="item"><img src="'+$(this).attr("data-img")+'"></div>';

				$('#translation_gallery').find('.modal-gallery').append(gallery);
			});

			height();

			var index = $(this).index();

			$('#translation_gallery').find('.modal-gallery').slick({
				initialSlide: index,
				prevArrow: '<button class="prev"><i class="icon icon-left"></i></button>',
				nextArrow: '<button class="next"><i class="icon icon-right"></i></button>'
			});
		});

		$(window).resize(function() {
			height();
		});

		function height() {
			var h = $(window).height();
			$('#translation_gallery').find('.modal-gallery .item').css('height', h);
		}
	}

	$('.modal-wrapper').find('.modal-close').on('click', function() {
		$(this).parent().fadeOut('fast');
		$('body').removeClass('hidden');
	});

});


//форма
function anyForm() {

	if ($('#any_form').length) {
		function initMapForm() {
			var $form = $('#any_form');
			$form.on('change', '.validate', function(){
				validateField($(this));
			});

			$form.find('.submit').on('click', function(){
				if (validateForm($form)) {
					var data = $form.serialize();
					$.ajax({
						url: '#api',
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
				}, 2000);

			}
		}
		initMapForm();

	}

}