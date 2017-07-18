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

	// Add target=_blank to external links
	// Thanks to http://css-tricks.com/snippets/jquery/open-external-links-in-new-window/
	$("#wb-cont a[href^='http://']").attr("target","_blank");
	$("#wb-cont a[href^='https://']").attr("target","_blank");

}); 