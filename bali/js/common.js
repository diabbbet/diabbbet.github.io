$(function() {

	$('.carousel').slick({
		slidesToShow: 2,
		appendArrows: $('.carousel-buttons'),
		prevArrow: '<button class="carousel-btn left"><img src="img/left-arrow.png" alt="arrow"></button>',
		nextArrow: '<button class="carousel-btn right"><img src="img/right-arrow.png" alt="arrow"></button>',
		responsive: [
		{
			breakpoint: 1400,
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

	$('.about-btn, .detail-btn').click(function() {
		$('.modal-place--wrapper').fadeIn();
	});

	$('.header-btn').click(function() {
		$('.modal-write--wrapper').fadeIn();
	});

	$('.footer-btn').click(function() {
		$('.modal-consult--wrapper').fadeIn();
	});

	$('.modal-place--overlay, .modal-write--overlay, .exit').click(function() {
		$('.modal-place--wrapper, .modal-write--wrapper, .modal-consult--wrapper').fadeOut();
	});

	$('.gallery-anchor').click(function(e) {
		$('body').animate( { scrollTop: $('section.gallery').offset().top }, 1000 );
	});

	$('.about-anchor').click(function(e) {
		$('body').animate( { scrollTop: $('.about-company').offset().top }, 1000 );
	});

	$('.tour-anchor, .main-btn').click(function(e) {
		$('body').animate( { scrollTop: $('.links .container').offset().top }, 1000 );
	});

	$('.gallery-anchor').click(function(e) {
		$('body').animate( { scrollTop: $('.gallery').offset().top }, 1000 );
	});

	$('.about-tour-anchor').click(function(e) {
		$('body').animate( { scrollTop: $('.tour-detail').offset().top }, 1000 );
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

	$('.days-slider').slick({
		slidesToShow: 1,
		prevArrow: '<button class="carousel-btn left"><img src="img/left-arrow.png" alt="arrow"></button>',
		nextArrow: '<button class="carousel-btn right"><img src="img/right-arrow.png" alt="arrow"></button>',
		arrows: false,
		dots: true
	});

	$('.exist-slider').slick({
		slidesToShow: 1,
		prevArrow: '<button class="carousel-btn left"><img src="img/left-arrow.png" alt="arrow"></button>',
		nextArrow: '<button class="carousel-btn right"><img src="img/right-arrow.png" alt="arrow"></button>',
		arrows: true,
		dots: false
	});

	$('.curators-gallery').slick({
		slidesToShow: 3,
		prevArrow: '<button class="carousel-btn left"><img src="img/left-arrow.png" alt="arrow"></button>',
		nextArrow: '<button class="carousel-btn right"><img src="img/right-arrow.png" alt="arrow"></button>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$('.days-global_carousel').slick({
		infinite: false,
		slidesToShow: 1,
		prevArrow: '<button class="carousel-btn left days-global_prev"><img src="img/left-arrow.png" alt="arrow"></button>',
		nextArrow: '<button class="carousel-btn right days-global_next"><img src="img/right-arrow.png" alt="arrow"></button>',
		adaptiveHeight: true,
		draggable: false,
		swipe: false
	});



});
