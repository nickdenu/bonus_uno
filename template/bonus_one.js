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
	var data_array = new Array();
	var i = 0;
	var j = 0;
	var datalist = document.createElement("datalist");
    datalist.setAttribute("id", "predictive_text");
    document.getElementById("mainForm").appendChild(datalist);

	$.getJSON( "http://www.mattbowytz.com/simple_api.json?data=all", function( json ){
		for(j = 0; j < json.data.interests.length ; j++, i++)
		{
			var option = document.createElement("option");
			option.setAttribute("value", json.data.interests[j]);
			document.getElementById("predictive_text").appendChild(option);
		}
		
		for(j = 0; j < json.data.programming.length ; j++, i++)
		{
			var option = document.createElement("option");
			option.setAttribute("value", json.data.programming[j]);
			document.getElementById("predictive_text").appendChild(option);
		}
		
	document.getElementById("searchText").onkeyup=function(){predictiveFunction1();};
	
	/**************NOTES*************/
	// I tried a bunch of different ways, as seen below.
	// I couldn't get them to work so as of now, I won't go straight to google when I click the option
	// rather I will be going to google as I submit my form.
	/*$('#mainForm').bind('select',function(){
		console.log("Hello");
	});*/
	
	/*$("options").click(function(){
		var clicked_item = caller.id;
		document.getElementById("mainForm").action = "https://www.google.com/search?q=" + clicked_item.val;
		console.log(clicked_item.val);
		console.log("hi");
		document.forms["mainForm"].submit();
	});*/
	
	//document.querySelector('input[list="predictive_text"]').addEventListener('click',predictiveFunction2);
	
	
});
	
})();


function predictiveFunction1()
{
	var search_bar = document.getElementById("searchText");
    //document.getElementById("mainForm").action = "https://www.google.com/search?q=" + search_bar.value;
	//console.log( document.getElementById("mainForm").action);
	//console.log(search_bar.value);
}

function predictiveFunction2(clicked_item)
{
	click_val = clicked_item.target.value;
	document.getElementById("mainForm").action = "https://www.google.com/search?q=" + click_val;
	console.log(click_val);
	document.forms["mainForm"].submit();
}