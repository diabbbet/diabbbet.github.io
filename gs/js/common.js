$(function() {
	var ii = 0;

	$('#gstudio').removeClass('start');
	setTimeout(function() {
		$('.circles-wrapper').addClass('stop');
	}, 3000);

	$(window).on('wheel', function(e) {

		if (ii == 1) {
			return false;
		} else {

			if (event.deltaY > 0) {
				$('#gstudio').addClass('hide');
				$('#digital_agency').addClass('show');
				$('#links').addClass('show');
				$('.circles-wrapper').removeClass('stop');
				ii = 1;
				setTimeout(function() {
					ii = 0;
					$('.circles-wrapper').addClass('stop');
				}, 3000);
				return false;
			} else {
				$('#gstudio').removeClass('hide');
				$('#digital_agency').removeClass('show');
				$('#links').removeClass('show');
				$('.circles-wrapper').removeClass('stop');
				ii = 1;
				setTimeout(function() {
					ii = 0;
					$('.circles-wrapper').addClass('stop');
				}, 3000);
				return false;
			}
		}
	});
});