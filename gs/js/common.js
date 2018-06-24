$(function() {

	$('#gstudio').removeClass('start');
	$('.circles-wrapper').addClass('animate');
	setTimeout(function() {
		$('.circles-wrapper').removeClass('animate');
	}, 6000);
	

	$('#gstudio a').on('click', function() {
		$('#gstudio').addClass('hide');
		$('#digital_agency').addClass('show');
		$('#links').addClass('show');
		$('.circles-wrapper').removeClass('animate');
		$('.circles-wrapper').addClass('animate');
		setTimeout(function() {
			$('.circles-wrapper').removeClass('animate');
		}, 6000);
		return false;
	});

	$('#digital_agency a').on('click', function() {
		$('#gstudio').removeClass('hide');
		$('#digital_agency').removeClass('show');
		$('#links').removeClass('show');
		$('.circles-wrapper').removeClass('animate');
		$('.circles-wrapper').addClass('animate');
		setTimeout(function() {
			$('.circles-wrapper').removeClass('animate');
		}, 6000);
		return false;
	});

});