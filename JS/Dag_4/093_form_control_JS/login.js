// this is what is called from the onsubmit 



function checkEmail() {

  // lets get whatever is in the form for password	
  let fEmail = document.forms["formName"]["femail"].value;
  // note that we need both the forms name and the name of the input that we want to get

  // lets just check if the email has a @


  // check checkbox
  let boxChecked = document.querySelector("input[type=checkbox]:checked");
  // querySelector selects the html based on css rules
  // so a querySelector("p") pick the first "p" tag
  // and querySelector(".aClass") the first html tag with the class "aClass";
  // input[type=checkbox]:checked looks for when a check box is checked
  // returns null if none are fund

  if (boxChecked == null) {
    document.body.innerHTML += "<p>please check a box</p>";
    return false;
  }







  //to check it for real https://emailregex.com/
  // the raw regex
  let regexRaw = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // format is as a reqex 
  let regexEmail = new RegExp(regexRaw);
  // so we can use the text method, it return true
  // of the string matches the regx pattern
  let isEmail = regexEmail.test(fEmail);
  // lets  use it in a if
  if (isEmail) {
    //if (fEmail.includes("@")) {


    return true;
  } else {
    // here you can make a message showing 
    // what the user missed when entering thier email
    // normal for checking if an user has all the parts in a password
    // match is used to check what they might have missed
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

    document.body.innerHTML += "<p>please enter a Email</p>";
    return false;
  }




}