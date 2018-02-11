$(function() {


	anyFunction();

});

function anyFunction() {

	console.log('check!!!');

}


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