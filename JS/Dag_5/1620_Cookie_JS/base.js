function makeCookie() {
	// this is how you make a cookie


	let getInp = document.getElementById("idTxt").value

	// the cookie needs a name
	// the format is this
	// name=content
	let intoCookie = "cookieName=" + getInp;


	//	By default, the cookie is deleted when the browser is closed

	// 	add the expires tag with a date to set how long the cookie show last
	// ex 1 + from the corrent date
	let date = new Date(Date.now() + 86400e3); // 86400 sec  = 1 day
	date = date.toUTCString(); // the format the cookie wants
	document.cookie = intoCookie + "; expires=" + date;

	// or  max-age to set it by the second 
	// 3600 sec = 1 hour
	//document.cookie = intoCookie + ";  max-age=3600";



	console.log("make cookie");

	//when you make a cookie it will stay there for that site, refreshing the page normally wont remove it.
	// read more here: https://www.w3schools.com/js/js_cookies.asp
}

function getCookie() {
	// this is how you can get a cookie
	let cookie = document.cookie;
	// print it
	console.log(cookie);
	// get the value of the cookie out
	console.log(cookie.split("=")[1]);
	// split it on the "=" and use the second part
	// if you got many cookies then you might need to loop it
	// or try some of these : https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie


	// put it somewhere on a page
	document.getElementById("putThatDataDown").innerHTML = cookie.split("=")[1];
}