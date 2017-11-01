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

	// about-slider
	if ($('.about-slider').length) {
		aboutSlider();
	}
	

	// location-map
	if ($('#location-map').length) {
		locationMap();
	}

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

	// $('.logo').click(function(timeout) {
	// 	event.preventDefault();
	// 	$('.item-inner').animate({'opacity':'0'}, 500);
	// 	return true;
	// });

});




// content-height
function contentHeight() {
	var $contentHeight = $(window).height() - $('header').height() - $('.controllers').height();
	$('.location').height($contentHeight);
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


// loaction-map
function locationMap() {
	
	var coords = $("#location-map").data("coords").split(",");


	var map = new google.maps.Map(document.getElementById('location-map'), {
		zoom: 16,
		center: new google.maps.LatLng(coords[0], coords[1]),
		styles: [
		{
			"featureType": "all",
			"elementType": "labels",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "on"
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "on"
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "on"
			},
			{
				"lightness": "3"
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels",
			"stylers": [
			{
				"visibility": "on"
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"visibility": "on"
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "on"
			}
			]
		},
		{
			"featureType": "transit",
			"elementType": "labels.text",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		}
		]
	});

	var infowindow = new google.maps.InfoWindow({
		content: '<div id="feature-name"></div>'
	});

	var infowindow2 = new google.maps.InfoWindow({
		content: '<div id="feature-img"></div>',
		position: {lat: 53.222825, lng: 50.194407}
	});

	$('#locations-features span').each(function() {
		var locationsCoords = $(this).data("coords").split(",");
		var locationstype = $(this).data("type");
		var locationstitle = $(this).data("title");
		var iconBase = '../img/baloon_'+locationstype+'.png';

		var locationObjectsIcon = new google.maps.MarkerImage(
			"/img/baloon_"+locationstype+".png",
			new google.maps.Size(40, 48)
			);

		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(locationsCoords[0], locationsCoords[1]),
			map: map,
			title: locationstitle,
			icon: locationObjectsIcon
		});

		marker.addListener('click', function() {
			infowindow.open(map, marker);
			$('#feature-name').html(locationstitle);
		});
	});

	var coords_lb = $("#location-homes").data("coords-lb").split(",");
	var coords_rt = $("#location-homes").data("coords-rt").split(",");
	var img_maps = $("#location-homes").data("img-maps");
	var data_img = $("#location-homes").data("img");
	var imageBounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(coords_lb[0], coords_lb[1]), 
		new google.maps.LatLng(coords_rt[0], coords_rt[1])
		);

	var mapimg = new google.maps.GroundOverlay(img_maps,imageBounds);
	mapimg.setMap(map);

	mapimg.addListener('click', function() {
		infowindow2.open(map, mapimg);
		$('#feature-img').html('<img src='+data_img+'>');
	});


}

// about-slider
function aboutSlider() {

	$('.about-slider').on('init', function(){
		var countSlides = $('.about-slider--item.slick-active').index();
		$('.about-counter .count').html(countSlides);
	});

	$('.about-slider').slick({
		infinite: true,
		prevArrow: '<button class="prev"><i class="icon icon-back"></i></button>',
		nextArrow: '<button class="next"><i class="icon icon-next"></i></button>'
	});

	var quantitySlides = $('.about-slider--item:not(.slick-cloned)').length;
	$('.about-counter .quantity').html(quantitySlides);

	$('.about-slider').on('afterChange', function(){
		var countSlides = $('.about-slider--item.slick-active').index();
		$('.about-counter .count').html(countSlides);
	});

	$('.modal-gallery .exit').on('click', function() {
		$('.modal-gallery').fadeOut('fast');
		$('.modal-slider').slick('unslick');
		$('.modal-slider').html('');
	});

	$('.about-fullscreen').on('click', function() {
		$('.modal-gallery').fadeIn('fast');
		$('.about-slider--item:not(.slick-cloned)').each(function() {
			var dataImg = $(this).attr('data-img');
			var dataTitle = $(this).attr('data-title');
			$('.modal-slider').append('<div class="modal-slider--item" style="background-image: url('+dataImg+')" data-title="'+dataTitle+'"></div>');
		});

		modalSlider();
	});

	function modalSlider() {

		$('.modal-slider').on('init', function(){

			var modalTitle = $('.modal-slider--item.slick-active').attr('data-title');
			var countSlidesModal = $('.modal-slider--item.slick-active').index();

			$('.modal-counter .count').html(countSlidesModal);
			$('.modal-title').html(modalTitle);

		});

		$('.modal-slider').slick({
			prevArrow: '<button class="prev"><i class="icon icon-button-arrow"></i></button>',
			nextArrow: '<button class="next"><i class="icon icon-button-arrow"></i></button>'
		});

		var quantitySlidesModal = $('.modal-slider--item:not(.slick-cloned)').length;
		$('.modal-counter .quantity').html(quantitySlidesModal);

		$('.modal-slider').on('afterChange', function(){

			var countSlidesModal = $('.modal-slider--item.slick-active').index();
			var modalTitle = $('.modal-slider--item.slick-active').attr('data-title');

			$('.modal-counter .count').html(countSlidesModal);
			$('.modal-title').html(modalTitle);
			
		});
	}

}