$(function() {

	$('.partners-carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		draggable: false,
		responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	$('.catalog-tabs--controller .item').click(function() {
		$('.catalog-tabs--controller .item').removeClass('active');
		$(this).addClass('active');
		$('.catalog-tabs .item').removeClass('active');
		var index=$(this).index();
		$('.catalog-tabs .item').eq(index).addClass('active');
	});

	$('.popup').click(function() {
		$('.modal-wrapper').fadeIn(100);
	});

	$('.modal-overlay, .modal .exit').click(function() {
		$('.modal-wrapper').fadeOut(100);
	});

	$('#partners').click(function(e) {
		$('body').animate( { scrollTop: $('.partners').offset().top }, 1000 );
		$('header nav ul').removeClass('active');
		return false;
	});

	$('#catalog').click(function(e) {
		$('body').animate( { scrollTop: $('.catalog').offset().top }, 1000 );
		$('header nav ul').removeClass('active');
		return false;
	});

	$('#comparison').click(function(e) {
		$('body').animate( { scrollTop: $('.comparison').offset().top }, 1000 );
		$('header nav ul').removeClass('active');
		return false;
	});

	$('#bonus').click(function(e) {
		$('body').animate( { scrollTop: $('.bonus').offset().top }, 1000 );
		$('header nav ul').removeClass('active');
		return false;
	});

	$('#installation').click(function(e) {
		$('body').animate( { scrollTop: $('.installation').offset().top }, 1000 );
		$('header nav ul').removeClass('active');
		return false;
	});

	$('#wholesale').click(function(e) {
		$('body').animate( { scrollTop: $('.wholesale').offset().top }, 1000 );
		$('header nav ul').removeClass('active');
		return false;
	});

	$('#contacts').click(function(e) {
		$('body').animate( { scrollTop: $('footer').offset().top }, 1000 );
		$('header nav ul').removeClass('active');
		return false;
	});

	$('nav .burger').click(function() {
		$('nav ul').addClass('active');
	});

	$('header nav ul li.exit').click(function() {
		$('header nav ul').removeClass('active');
	});

	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
			center: [55.885632, 37.685949],
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
			iconImageHref: 'img/mapMarker.svg'
		});


		myMap.geoObjects
		.add(myPlacemark);

		myMap.behaviors.disable('scrollZoom'); 
	});

	$("#request").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});

});
