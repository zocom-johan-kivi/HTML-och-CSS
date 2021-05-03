//Lets make some code that loops the count, and calls a new function for each number

let btnCount = 0;

function buttonCount() {
	//print the count
	console.log(btnCount);

	// use getElementsByClassName to gets all tags with the class "hide"
	let allEleWithHide = document.getElementsByClassName("hide");
	// this is now an arrey with all of the html that has that class

	// loop through the arrey
	for (let i = 0; i < allEleWithHide.length; i++) {
		//sets all of them to be display none
		allEleWithHide[i].style.display = "none";
		//we do this before we make one of them display block.
		// its also a way to reset them all back to hidden
	}

	// getElement.. has a few versions, getElementById gets the first one wih that ID
	// getElementsByTagName gets all html tags thats fits and puts them in a arrey, even when there is only one
	// getElementsByClassName is the same

	// you can mix them, so here we get the Id and the P tag thats inside that ID.
	//getElementsByTagName gives out an arrey so we need to ender a index for the arrey =[0]
	document.getElementById("buttonDemo").getElementsByTagName("P")[0].innerHTML = "Showing hidden div number: "+btnCount;

	// same here where we have an arrey of the html with the class "hide"
	// but with the btnCount we set whatever is the currunt count to be display block
	document.getElementsByClassName("hide")[btnCount].style.display = "block";
	// can also use allEleWithHide[btnCount].style.display = "block";
	// its the same


	// add 1 to the count
	btnCount++;

	// reset the count when its above the number of hidden elements we have
	if (btnCount >= allEleWithHide.length) {

		btnCount = 0;

	}
}

// here we have 3 functions that shows a few useful bits of code

//this will toggle an ID to display none or to display block
function showToggle() {

	// gets the tag that has the ID
	let divEle = document.getElementById("toggleDiv");

	// check it is display none
	if (divEle.style.display === "none") {
		// if it is, make it display block
		divEle.style.display = "block";
	} else {
		// if no make it display none
		divEle.style.display = "none";
	}

}

// this shows Date(), a way to get the current time
function getDate() {
	// save the time to a let
	let currentDate = new Date();
	// and put the date
	//into a html tag with a fitting ID
	document.getElementById("putDate").innerHTML = currentDate
}
// Date() has a lot of more features that can be usefel
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


// this function with create new html and even add attributes into the tag
function makeImg() {

	//first pick a type of tag to make, and save it as a variable
	let aImg = document.createElement("IMG");
	// its an Image tag so we need to give it a src and a path to a image
	aImg.setAttribute("src", "img/dog.jpg");
	// can also give it a width and a height
	aImg.setAttribute("width", "304");
	aImg.setAttribute("height", "228");
	// and as it is an Image, we want a alt filled with fitting info
	aImg.setAttribute("alt", "dog");

	//now we need to put this IMG somewhere
	// so select a good spot and use appendChild to put all tag inside it.
	document.getElementById("imgHold").appendChild(aImg);

	// note this creates new html, so try running this function a few times
}
