function buttonFunc() { 

	//document.write("<p> Click!</p>");
	document.getElementById("buttonDemo").innerHTML = "enter stuff into the html";
}








document.getElementById("pwithOnClick").addEventListener("click", function () {

	document.getElementById("buttonDemo").innerHTML = "anyting can be a \"button\"";
});

// same as above but its calling a function, rather then having its own one
/*
document.getElementById("pwithOnClick").addEventListener("click", aNormalFunction());

function aNormalFunction() {
	document.getElementById("buttonDemo").innerHTML = "anyting can be a \"button\"";
}*/


// mouseover
document.getElementById("pwithOnClick").addEventListener("mouseover", function () {

	document.getElementById("buttonDemo").innerHTML = "No Clicks are needed";
});

// mouseout
document.getElementById("pwithOnClick").addEventListener("mouseout", function () {

	document.getElementById("buttonDemo").innerHTML = "Can also check when we leave something";
});

// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// there are a few more that