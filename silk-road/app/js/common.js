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
}