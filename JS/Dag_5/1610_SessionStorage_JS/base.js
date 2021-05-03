function SetintoSS() {
	// this is how you save into sessionStorage


	let getInp = document.getElementById("idTxt").value



	//The following code accesses the current domain's sessionStorage object and
	// adds a data item to it using Storage.setItem().

	sessionStorage.setItem("saveTest", getInp);
	console.log("saved " + getInp);


}

function getGetSS() {
	//	The code for reading the sessionStorage item is:
	// getItem(nameofItem)

	let savedLS = sessionStorage.getItem("saveTest");

	console.log("get  " + savedLS);

	document.getElementById("putThatDataDown").innerHTML = savedLS;
}