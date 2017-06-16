	$(document).ready(function() {

		var $container = $('.galleryGrid');
		$container.imagesLoaded(function() {
			$container.masonry({
				itemSelector: '.gridItem',
				columnWidth: 309
			});
			
		});

		$('.fullpage').fullpage({
			menu: '#menu',
			lockAnchors: false,
			anchors:['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage'],
			afterLoad: function (anchorLink, index) {
				if (anchorLink == 'secondPage' || anchorLink == '4thpage' || anchorLink == '6thpage') {
					$('#menu').addClass('dark');
				} else {
					$('#menu').removeClass('dark');
				}
			}
		});

		$('.lauyoutsCarousel').slick({
			arrows: false,
			dots: true,
			draggable: false
		});

		$('.areaCarousel').slick({
			arrows: true,
			dots: false,
			fade: true,
			autoplay: true,
			draggable: false,
			nextArrow: '<a class="prevArrow"></a>',
			prevArrow: '<a class="nextArrow"></a>'
		});


		$('.galleryCarousel').slick({
			arrows: true,
			dots: false,
			draggable: false,
			fade: true,
			nextArrow: '<a class="galleryPrevArrow"></a>',
			prevArrow: '<a class="galleryNextArrow"></a>'
		});

		$('.galleryCarouselMobile').slick({
			arrows: true,
			dots: false,
			draggable: false,
			fade: false,
			responsive: [{

				breakpoint: 780,
				settings: {
					slidesToShow: 2,
					adaptiveHeight: true,
					vertical: true
				}
			},{

				breakpoint: 740,
				settings: {
					slidesToShow: 1,
					adaptiveHeight: false,
					vertical: false
				}
			},{

				breakpoint: 420,
				settings: {
					slidesToShow: 2,
					adaptiveHeight: false,
					vertical: true,
					adaptiveHeight: true
				}
			}
			]
		});

		$('.navNumber').on('mouseenter', function () {
			$(this).siblings().addClass('active');
			$(this).children().addClass('active');
		});

		$('.mnuList').on('mouseleave', function () {
			var thisItem = $(this);
			setTimeout(function () {
				thisItem.children().removeClass('active');
			}, 500);
		});

		$('.navNumber').on('mouseleave', function () {
			var thisItem = $(this);
			setTimeout(function () {
				thisItem.children().removeClass('active');
			}, 500);
		});

		setTimeout(function() {
			$('.modalPopup').addClass('active');
		}, 5000);
		$('.popupExit').on('click', function() {
			$('.modalPopup').removeClass('active');
		});

		$('.preloader').fadeOut();

	});

