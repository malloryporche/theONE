//  QUOTE ANIMATION  //

	//DEFINE VARIABLES//
	var quote = "Welcome to the One";
	var quote2 = "A Portfolio Theme, featuring Multiple Customizable Page Layouts";
	var quote3 = "Featuring modern HTML5 and CSS3 technologies";
	var quote4 = "Parallax Slider and Custom Animations";
	var quote5 = "A fully responsive internet experience";
	var quote6 = "Optimized for Cross-Browser Capability";

var quoteFade = function(quote) {
	$('#header_quote_animation').append('<h1 id="one">' + quote +'</h1>');
	
	$('#header_quote_animation').fadeIn(5000).fadeOut(3000);

}

var quoteShow = function(quote) {
	quote.show('slow');
}

quoteFade(quote);
.delay(5000).quoteFade(quote2);
quoteShow();