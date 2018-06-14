$(function() {

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

	// triangles
	triangles();

	// resize
	$(window).on('resize', function() {
		// triangles
		triangles();
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
	$('#calculator_triangle').css('border-width', '0 '+wWidth+'px 50px 0');
	$('#how_triangle').css('border-width', '110px '+wWidth+'px 0 0');
}