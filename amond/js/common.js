$(function() {

	// header-nav
	$('.burger').on('click', function() {
		$(this).toggleClass('active');
		$('.header-menu').toggleClass('active');
	});

	// modals open/close
	$('.callback .btn').on('click', function() {
		$('.modal-callback').addClass('active');
		$('body').addClass('noscroll');
		return false;
	});

	modalSlider();

	$('.close').on('click', function() {
		$('.modal').removeClass('active');
		$('body').removeClass('noscroll');

		$('.modal-slider').slick('unslick');
		$('.modal-slider').html('');
	});

	// picking toggle
	$('#main_picking').on('click',function() {
		$('.picking').slideToggle(200);
		$(this).toggleClass('active');
	});

	if ($('.section.history').hasClass('active')) {
		historySlider();
	}

	// controls
	$('.control').on('click', function() {
		$(this).addClass('active').siblings('.active').removeClass('active');
		var index = $(this).index();
		$('.about-sections .section').eq(index).addClass('active').siblings('.active').removeClass('active');

		if ($('.section.records').hasClass('active')) {
			recordsSlider();
		}
	});

	// jquery-ui
	jqueryUi();


	// objects-toggle
	$('.objects-controller').on('click', function() {
		$(this).next('.objects-info').slideToggle(200);
		$(this).toggleClass('active');
	});

});



// jquery-ui
function jqueryUi() {
	var minArea = $('#slider_area').attr('data-min')*1;
	var maxArea = $('#slider_area').attr('data-max')*1;
	var minPrice = $('#slider_price').attr('data-min')*1;
	var maxPrice = $('#slider_price').attr('data-max')*1;

	$('#slider_area').slider({
		range: true,
		min: minArea,
		max: maxArea,
		step: 1,
		values: [minArea,maxArea],
		slide: function(event, ui ){

			$('#area_min').text(ui.values[0]);
			$('#area_min_input').val(ui.values[0]);
			$('#area_max').text(ui.values[1]);
			$('#area_max_input').val(ui.values[1]);

		}
	});

	$('#slider_price').slider({
		range: true,
		min: minPrice,
		max: maxPrice,
		values: [minPrice, maxPrice],
		slide: function(event, ui ){

			$('#price_min').text(number_format(ui.values[0], 0, '', ' '));
			$('#price_min_input').val(ui.values[0]);
			$('#price_max').text(number_format(ui.values[1], 0, '', ' '));
			$('#price_max_input').val(ui.values[1]);

		}
	});

	// punch
	$('#widget').draggable();
}


//денежный формат
function number_format(number, decimals, dec_point, thousands_sep){
	var i, j, kw, kd, km;
	if( isNaN(decimals = Math.abs(decimals)) ){
		decimals = 2;
	}
	if( dec_point == undefined ){
		dec_point = ',';
	}
	if( thousands_sep == undefined ){
		thousands_sep = '.';
	}
	i = parseInt(number = (+number || 0).toFixed(decimals)) + '';
	if( (j = i.length) > 3 ){
		j = j % 3;
	} else{
		j = 0;
	}
	km = (j ? i.substr(0, j) + thousands_sep : '');
	kw = i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands_sep);
	kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : '');
	return km + kw + kd;
}

// history-slider
function historySlider() {

	$('.history-slider_container').on('init', function(){
		var counterIntit = $('.history-slider .slide.slick-active').index();
		var nameBdInit = $('.history-slider .slide.slick-active').attr('data-nameBd');
		var nameLtInit = $('.history-slider .slide.slick-active').attr('data-nameLt');

		$('.history-slider .slider-counter .count').html(counterIntit);
		$('.history-slider .slide-name .bold').html(nameBdInit);
		$('.history-slider .slide-name .light').html(nameLtInit);
	});

	$('.history-slider_container').slick({
		infinite: true,
		arrows: false,
		speed: 200,
		touchThreshold: 100,
		waitForAnimate: false
	});

	var counterStatic = $('.history-slider .slide:not(.slick-cloned)').length;
	$('.history-slider .slider-counter .static').text(counterStatic);

	$('.history-slider_container').on('afterChange', function(){
		var counter = $('.history-slider .slide.slick-active').index();
		var nameBd = $('.history-slider .slide.slick-active').attr('data-nameBd');
		var nameLt = $('.history-slider .slide.slick-active').attr('data-nameLt');

		$('.history-slider .slider-counter .count').html(counter);
		$('.history-slider .slide-name .bold').html(nameBd);
		$('.history-slider .slide-name .light').html(nameLt);
	});
}

// records-slider
function recordsSlider() {

	$('.records-slider_container').on('init', function(){
		var counterIntit = $('.records-slider .slide.slick-active').index();
		$('.records-slider .slider-counter .count').html(counterIntit);
	});

	$('.records-slider_container').slick({
		infinite: true,
		arrows: false,
		speed: 200,
		touchThreshold: 100,
		waitForAnimate: false
	});

	var counterStatic = $('.records-slider .slide:not(.slick-cloned)').length;
	$('.records-slider .slider-counter .static').text(counterStatic);

	$('.records-slider_container').on('afterChange', function(){
		var counter = $('.records-slider .slide.slick-active').index();
		$('.records-slider .slider-counter .count').html(counter);
	});
}

// modal-slider
function modalSlider() {

	$('.media-link').on('click', function() {
		$('.modal-photos').addClass('active');
		$('body').addClass('noscroll');

		var description = $(this).parents('.container').prev('.media-header').find('.media-header_desc').text();
		$('.modal-photos .modal-header .desc').html(description);

		var modalInfo = $(this).parent().find('.media-title').text();
		$('.modal-photos .modal-info').html(modalInfo);

		$('.modal-slider').on('init', function(){
			var counterIntit = $('.modal-slider .slide.slick-active').index();
			$('.modal-photos .slider-counter .count').html(counterIntit);
		});

		$(this).find('.photo-reports_img').each(function() {
			var dataImg = $(this).attr('data-img');
			var modalSlider = '<div class="slide"><div class="slide-img" style="background-image: url('+dataImg+')"></div></div>'
			$('.modal-slider').append(modalSlider);
		});

		$('.modal-slider').slick({
			infinite: true,
			arrows: false,
			speed: 200,
			touchThreshold: 100,
			waitForAnimate: false
		});

		var counterStatic = $('.modal-slider .slide:not(.slick-cloned)').length;
		$('.modal-photos .slider-counter .static').text(counterStatic);

		$('.modal-slider').on('afterChange', function(){
			var counter = $('.modal-slider .slide.slick-active').index();
			$('.modal-photos .slider-counter .count').html(counter);
		});

		return false;
	});
}



