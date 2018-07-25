$(function() {
	var ii = 0;

	$('#gstudio').removeClass('start');
	setTimeout(function() {
		$('.circles-wrapper').addClass('stop');
		$('svg animateTransform').attr('repeatCount', '1');
	}, 3500);

	$(window).on('mousewheel', function(e) {
		console.log(e)

		if (ii == 1) {
			return false;
		} else {

			if (e.deltaY > 0) {
				$('#gstudio').addClass('hide');
				$('#digital_agency').addClass('show');
				$('#links').addClass('show');
				$('.circles-wrapper').removeClass('stop');
				$('svg animateTransform').attr('repeatCount', 'indefinite');
				
				ii = 1;
				setTimeout(function() {
					ii = 0;
					$('.circles-wrapper').addClass('stop');
					$('svg animateTransform').attr('repeatCount', '1');
				}, 3500);
				return false;
			} else {
				$('#gstudio').removeClass('hide');
				$('#digital_agency').removeClass('show');
				$('#links').removeClass('show');
				$('.circles-wrapper').removeClass('stop');
				$('svg animateTransform').attr('repeatCount', 'indefinite');
				
				ii = 1;
				setTimeout(function() {
					ii = 0;
					$('.circles-wrapper').addClass('stop');
					$('svg animateTransform').attr('repeatCount', '1');
				}, 3500);
				return false;
			}
		}
	});
});