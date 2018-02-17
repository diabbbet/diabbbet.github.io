$(function() {

	$('#slider').slick({
		dots: true,
		appendDots: $('#slider_controlls'),
		infinite: false
	});

	$('#slider_controlls').find('button').each(function(i) {
		var num = i+1;
		$(this).text('STAGE '+num+'');
	});

	$('#slider_in_slider').slick({
		draggable: false,
		infinite: false,
		arrows: false
	});

	$('#team-slider').slick({
		draggable: false,
		infinite: false,
		arrows: false,
		slidesToShow: 5,
		responsive: [{

			breakpoint: 992,
			settings: {
				arrows: true,
				slidesToShow: 2
			}

		}, {

			breakpoint: 620,
			settings: {
				arrows: true,
				slidesToShow: 1
			}

		}]

	});

	$('#arrow_next').on('click', function() {
		$('#slider_in_slider').slick('slickNext');
	});

	$('#arrow_prev').on('click', function() {
		$('#slider_in_slider').slick('slickPrev');
	});

	$('#roadmap_slider').slick({
		infinite: false
	});

	$('#btn_reg').on('click', function() {
		$('#reg_modal').fadeIn('fast');
	});

	$('#btn_video').on('click', function() {
		$('#video_modal').fadeIn('fast');
	});

	$('.exit').on('click', function() {
		$(this).parents('.modal').fadeOut('fast');
	});

	$('.animate').viewportChecker();

	form();

});

//форма
function form() {

	if ($('#reg_form').length) {
		function initForm() {
			var $form = $('#reg_form');
			$form.on('change', '.validate', function(){
				validateField($(this));
			});

			$form.find('.submit').on('click', function(){
				if (validateForm($form)) {
					var data = $form.serialize();
					var url = $form.attr('action');
					$.ajax({
						url: url,
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
		initForm();

	}

}