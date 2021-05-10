
//this is how you can read a click event in jQuery

//note that we need to have the document/html ready before the jQuery code runs
$(document).ready(function(){

	//this selects what id to look for
  $("#secondButton").click(function(){
	  //this selects what html tag with an ID to put some text into
     $("#demo").html("<p>Hello world with jQuery</p>");
  });
});







// here we have the same effect but with only JS
document.getElementById("firstButton").addEventListener("click", function() {

	//into a html tag with a fitting ID
	document.getElementById("demo").innerHTML = "<p>Hello world with JavaScript</p>";
});



/*

jQuery is on its way out, many of its features can now be done with normal JS. 


Read more on it here
http://youmightnotneedjquery.com/
*/