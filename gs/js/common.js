$(function() {

	$('#gstudio').removeClass('start');

	$('#gstudio a').on('click', function() {
		$('#gstudio').addClass('hide');
		$('#digital_agency').addClass('show');
		$('#links').addClass('show');
		return false;
	});

	$('#digital_agency a').on('click', function() {
		$('#gstudio').removeClass('hide');
		$('#digital_agency').removeClass('show');
		$('#links').removeClass('show');
		return false;
	});

});