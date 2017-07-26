$(function() {

	window.onload = init;

	var threesixtyMobile;

	function init(){
		threesixtyMobile = $('.threesixty-mobile').ThreeSixty({
			totalFrames: 36,
			endFrame: 36,
			currentFrame: 1,
			imgList: '.threesixty_images',
			progress: '.spinner',
			imagePath:'img/360deg/',
			filePrefix: '',
			ext: '.jpg',
			navigation: false
		});
	}

	$('.threesixty-btn--mobile').click(function() {
		$('.threesixty-popup--mobile').fadeIn();
	});

	$('.threesixty-overlay--mobile').click(function() {
		$('.threesixty-popup--mobile').fadeOut();
	});

});