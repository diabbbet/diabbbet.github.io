$(function() {

	$('.carousel').slick({
		slidesToShow: 3,
		appendArrows: $('.carousel-buttons'),
		prevArrow: '<button class="carousel-btn left"><img src="img/left-arrow.png" alt="arrow"></button>',
		nextArrow: '<button class="carousel-btn right"><img src="img/right-arrow.png" alt="arrow"></button>',
		responsive: [
		{
			breakpoint: 1800,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$('.about-slider').slick({
		slidesToShow: 2,
		appendArrows: $('.slider-buttons'),
		prevArrow: '<button class="carousel-btn left"><img src="img/left-arrow.png" alt="arrow"></button>',
		nextArrow: '<button class="carousel-btn right"><img src="img/right-arrow.png" alt="arrow"></button>',
		responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$('.gallery-slider').slick({
		slidesToShow: 1,
		appendArrows: $('.gallery-buttons'),
		prevArrow: '<button class="carousel-btn left"><img src="img/left-arrow.png" alt="arrow"></button>',
		nextArrow: '<button class="carousel-btn right"><img src="img/right-arrow.png" alt="arrow"></button>'
	});

	$('.review-slider').slick({
		slidesToShow: 1,
		appendArrows: $('.review-buttons'),
		prevArrow: '<button class="carousel-btn left"><img src="img/left-arrow.png" alt="arrow"></button>',
		nextArrow: '<button class="carousel-btn right"><img src="img/right-arrow.png" alt="arrow"></button>'
	});

	$('.about-btn, .footer-btn').click(function() {
		$('.modal-place--wrapper').fadeIn();
	});

	$('.modal-place--overlay').click(function() {
		$('.modal-place--wrapper').fadeOut();
	});

	$('.about-anchor').click(function(e) {
		$('body').animate( { scrollTop: $('.about-company .container').offset().top }, 1000 );
	});

	$('.tour-anchor, .main-btn').click(function(e) {
		$('body').animate( { scrollTop: $('.links').offset().top }, 1000 );
	});

	$('.gallery-anchor').click(function(e) {
		$('body').animate( { scrollTop: $('.gallery').offset().top }, 1000 );
	});

	$('.about-tour-anchor').click(function(e) {
		$('body').animate( { scrollTop: $('.about-tour .about-text .title').offset().top }, 1000 );
	});



});
