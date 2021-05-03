function SetintoLS() {
	// this is how you save into LocalStorage


	let getInp = document.getElementById("idTxt").value



	//The following code accesses the current domain's local Storage object and
	// adds a data item to it using Storage.setItem().

	localStorage.setItem("saveTest", getInp);
	console.log("saved " + getInp);


}

function getGetLS() {
	//	The code for reading the localStorage item is:
	// getItem(nameofItem)

	let savedLS = localStorage.getItem("saveTest");

	console.log("get  " + savedLS);

	document.getElementById("putThatDataDown").innerHTML = savedLS;
}