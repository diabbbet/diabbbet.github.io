$(function() {

	if($(window).width() > 729) {
		$(window).scroll(function(){
			if ($('header').offset().top > 0) {
				$('header').addClass('dark');
			} else {
				$('header').removeClass('dark');
			}
		});
	}

	if($(window).width() < 730) {
		$('.register').text('Онлайн запись');
		$('.header-wrapper .contacts .time').text('10:00 - 22:00');
	}

	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
			center: [55.566567, 37.485637],
			zoom: 16
		}, {
			searchControlProvider: 'yandex#search'
		}),

		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/mapMarker.png'
		});


		myMap.geoObjects
		.add(myPlacemark);

		myMap.behaviors.disable('scrollZoom'); 
	});

});
