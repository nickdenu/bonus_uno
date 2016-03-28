// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
	// Magic!
	var x;
	document.getElementById("searchText").onkeyup=function(){x = myFunction();};
	var data_array;
	$.getJSON( "http://www.mattbowytz.com/simple_api.json", function( data_array ) {
		console.log(stringify(data_array.toString()));
});
	
})();

function myFunction()
{
	var x = document.getElementById("searchText");
	console.log(x.value);
	return x;
}