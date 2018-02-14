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

	$('#arrow_next').on('click', function() {
		$('#slider_in_slider').slick('slickNext');
	});

	$('#arrow_prev').on('click', function() {
		$('#slider_in_slider').slick('slickPrev');
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