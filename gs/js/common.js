document.addEventListener("DOMContentLoaded", ready);

function ready() {

	new fullpage('#fullpage', {
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		onLeave: function(){

			var begins = document.getElementsByClassName('begin');
			for (var i = begins.length - 1; i >= 0; i--) {
				begins[i].beginElement();
			}
		}
	});

	document.getElementById('gstudio_animate').classList.remove('animate');

}