$(function() {

	window.onload = init;

	var threesixtyDesktop;
	function init(){

		threesixtyDesktop = $('.threesixty-desktop').ThreeSixty({
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



	$('.threesixty-btn').click(function() {
		$('.threesixty-desktop').fadeIn('slow');
	});

	$('.small-photo').click(function() {
		$('.threesixty-desktop').fadeOut();
	});

});
