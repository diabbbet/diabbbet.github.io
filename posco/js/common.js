$(function() {

	// content-height
	contentHeight();
	$(window).resize(function() {
		contentHeight();
	});

	// complexes-switch
	complexes();

	// select-home
	selectHome();

	// pick-room
	pickRoom();

	// contacts-map
	if ($('#contacts-map').length) {
		contactsMap();
	}

	$('.floor-controller').on('click', function() {
		$(this).addClass('active').siblings('.active').removeClass('active');

		var floorIndex = $(this).attr('data-floor');
		$('.floor-selector .floor-img[data-floor='+floorIndex+']').addClass('active').siblings('.active').removeClass('active');
	});


	// mail-modal
	$('.modal-mail .exit').on('click', function() {
		$('.modal-mail').fadeOut('fast');
	});
	$('.send-mail').on('click', function() {
		$('.modal-mail').fadeIn('fast');
		return false;
	});


	// 3d-modal
	$('.link3d').on('click', function() {
		var dataImg = $('.link3d').attr('data-img');
		$('.modal-3d .d3d-box').append('<img src="">');
		$('.modal-3d img').attr('src', dataImg);

		$('.modal-3d').fadeIn('fast');
		return false;
	});
	$('.modal-3d .exit').on('click', function() {
		$('.modal-3d').fadeOut('fast');
		$('.modal-3d img').remove();
	});

	$('.share').on('click', function() {
		$('.social-share').fadeToggle('fast');
	});

	$('.about-slider').slick({

	});

});




// content-height
function contentHeight() {
	var $contentHeight = $(window).height() - $('header').height() - $('.controllers').height();
	$('.switcher, .selector').height($contentHeight);
}


// complexes-switch
function complexes() {
	var switched = $('#controllers_main');
	$('#controllers_main .controller').on('click', function() {
		if (!$(this).hasClass('active') && !switched.hasClass('disabled')) {
			$(this).addClass('active').siblings('.active').removeClass('active');
			switched.addClass('disabled');

			var controllerIndex = $(this).attr('data-item');
			$('#switcher_main .item[data-item='+controllerIndex+']').addClass('active').siblings('.active').removeClass('active');
			$('#bottom_menu__main .bottom-menu[data-item='+controllerIndex+']').addClass('active').siblings('.active').removeClass('active');
			setTimeout(function(){
				switched.removeClass('disabled');
			}, 200);
		}

		return false;
	});
}


// select-home
function selectHome() {
	var dataFill = $('img[usemap]').attr('data-fill');
	var dataOpacity = $('img[usemap]').attr('data-opacity');

	$('img[usemap]').maphilight({
		fillColor: dataFill,
		fillOpacity: dataOpacity,
		stroke: false
	});

	$('.select-home').hover(function() {
		$('.home-popup').toggleClass('active');
	});

	$('.select-room').mouseover(function() {
		var roomsNum = $(this).attr('data-rooms');
		var squareNum = $(this).attr('data-square');
		var priceNum = $(this).attr('data-price');
		$('.rooms-num').html(roomsNum);
		$('.square-num').html(squareNum);
		$('.price-num span').html(priceNum);
		$('.right-info').addClass('active');
	}).mouseout(function() {
		$('.right-info').removeClass('active');
	});
}


// pick-room
function pickRoom() {
	$('.select-room').on('click', function() {
		$('.links-bar').show();
		$('.floor-controllers').hide();
		$('.right-info').addClass('visible');
		$('.floor-img').addClass('hide');
		
		var dataImg = $(this).attr('data-img');
		$('.room-inner').append('<img src="">').find('img').attr('src', dataImg);


		$('.selector-arrow a').on('click', function() {
			$('.links-bar').hide();
			$('.floor-controllers').show();
			$('.room-inner').html('');
			$('.social-share').hide();


			if ($('.floor-img').hasClass('hide')) {
				event.preventDefault();
			}

			$('.right-info').removeClass('visible');
			$('.floor-img').removeClass('hide');

			if (!$('.floor-img').hasClass('hide')) {
				return true;
			}
			
		});
	});
}

// map
function contactsMap() {
	
	var uluru = {lat: 53.224180, lng: 50.193061};
	var map = new google.maps.Map(document.getElementById('contacts-map'), {
		zoom: 16,
		center: uluru
	});

	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		title: 'Поволжская Строительная Корпорация, ООО',
		icon: '../img/baloon1.png'
	});

	var contentString = '<div id="content">'+
	'<div class="map-title">Поволжская Строительная Корпорация</div>'+
	'<div class="map-text">'+
	'Московское ш., 55, этаж 6, офис1,'+
	'</br>'+
	'Самара, Самарская обл., 443080'+
	'</div>'+
	'<a class="map-link" href="tel:+78463733003">8 (846) 373-30-03</a>'+
	'</br>'+
	'<a class="map-link" href="http://www.posko.ru">posko.ru</a>'+
	'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}