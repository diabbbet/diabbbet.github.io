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

	$('.about-btn').click(function() {
		$('.modal-place--wrapper').fadeIn();
	});

	$('.modal-place--overlay, .exit').click(function() {
		$('.modal-place--wrapper').fadeOut();
	});

	$('.gallery-anchor').click(function(e) {
		$('body').animate( { scrollTop: $('section.gallery').offset().top }, 1000 );
	});

	$('.about-anchor').click(function(e) {
		$('body').animate( { scrollTop: $('.about-company').offset().top }, 1000 );
	});

	$('.tour-anchor, .main-btn, .footer-btn.main-page').click(function(e) {
		$('body').animate( { scrollTop: $('.links .container').offset().top }, 1000 );
	});

	$('.footer-btn.tour-page').click(function(e) {
		$('body').animate( { scrollTop: $('.about-tour').offset().top }, 1000 );
	});

	$('.gallery-anchor').click(function(e) {
		$('body').animate( { scrollTop: $('.gallery').offset().top }, 1000 );
	});

	$('.about-tour-anchor').click(function(e) {
		$('body').animate( { scrollTop: $('.about-tour .about-text').offset().top }, 1000 );
	});

	$('.review-anchor').click(function(e) {
		$('body').animate( { scrollTop: $('.reviews').offset().top }, 1000 );
	});

	$('.schedule--anchor').click(function(e) {
		$('body').animate( { scrollTop: $('.days').offset().top }, 1000 );
	});

	if ($(window).width() <= '576'){
		$('.days-desc').hide();
		$('.toggle-one').show();
		$('.days-title').click(function(){
			$(this).stop(true,true).toggleClass('opened').stop(true,true).toggleClass('closed').next().stop(true,true).slideToggle();
			if($(this).hasClass('opened')) {
				$(this);
			}
			else {
				$(this);
			}
		});
	}

	$('.days-slider, .exist-slider').slick({
		slidesToShow: 1,
		prevArrow: '<button class="carousel-btn left"><img src="img/left-arrow.png" alt="arrow"></button>',
		nextArrow: '<button class="carousel-btn right"><img src="img/right-arrow.png" alt="arrow"></button>'
	});

	$('.curators-gallery').slick({
		slidesToShow: 3,
		prevArrow: '<button class="carousel-btn left"><img src="img/left-arrow.png" alt="arrow"></button>',
		nextArrow: '<button class="carousel-btn right"><img src="img/right-arrow.png" alt="arrow"></button>'
	});
	



});
