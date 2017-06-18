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
		nextArrow: '<button class="carousel-btn right"><img src="img/right-arrow.png" alt="arrow"></button>'
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

	

});