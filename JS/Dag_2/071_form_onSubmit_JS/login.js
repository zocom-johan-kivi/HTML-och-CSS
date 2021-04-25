
// this is what is called from the onsubmit 
function checkPass() {
	
// lets get what ever is in the form for password	
  let pass = document.forms["formName"]["password"].value;
  // note that we need both the forms name and the name of the input tha we want to get
  
  // lets just check if the passWord is empty
  if (pass == "") {
	  
	// just an alert to inform the user   
    alert(" you need a password");
	
	// then return false, so that the submit action wont run
    return false;
  }else {
	  // if there is something in the password, return true so the submit action happends
	   return true;
  }
}