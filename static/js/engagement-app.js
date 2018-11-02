$(document).ready(function() {
	
	// Add target=_blank to external links
	// Thanks to http://css-tricks.com/snippets/jquery/open-external-links-in-new-window/
	$("#wb-cont a[href^='http://']").attr("target","_blank");
	$("#wb-cont a[href^='https://']").attr("target","_blank");

}); 