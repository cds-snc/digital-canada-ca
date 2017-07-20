$(document).ready(function() {
	$('#js-mainNavButton').on('click touchup', function(){
		$('#js-mobileNav').addClass('active');
		
	});

	$('#js-mobileNav--button').on('click touchup', function(){
		$('#js-mobileNav').addClass('hiding');
		setTimeout(function(){
			$('#js-mobileNav').removeClass('active hiding').removeAttr('class');
		}, 305)
	});

	// Sticky threshold
	var threshold = $('main').position().top;

	var topBar = $('.cds-menu');


	$(window).scroll(function() {

		var scroll = $(window).scrollTop();

		if(scroll >= threshold) {
			if(!topBar.hasClass('sticky')) {
				topBar.addClass('sticky');
			}
		}

		else {
			if(topBar.hasClass('sticky')) {
				topBar.removeClass('sticky');
			}
		}
		

	});

	// Homepage video header/bg controls
	var videobg = $('video#js-video-bg').get(0);

	var videobgControl = $('#js-play-pause');

	videobgControl.on('click touchup', function(){
		if(videobg.paused == true ) {
			videobg.play();
			$('.pause-ico').removeClass('fa-play').addClass('fa-pause');
			$('.button-text').html('Pause');

		}
		else {
			videobg.pause();
			$('.pause-ico').removeClass('fa-pause').addClass('fa-play');
			$('.button-text').html('Play');
		}
	});

	// Add target=_blank to external links
	// Thanks to http://css-tricks.com/snippets/jquery/open-external-links-in-new-window/
	$("#wb-cont a[href^='http://']").attr("target","_blank");
	$("#wb-cont a[href^='https://']").attr("target","_blank");

}); 