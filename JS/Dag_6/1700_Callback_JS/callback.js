// Clean up



function placeInto(holder) {
    // what we send into the param is renamed, but is the same variable
    document.getElementById("placeHolder").innerHTML = holder;
}

function secondInto(holder) {
    // add into the secondHolder
    document.getElementById("secondHolder").innerHTML = holder;
}

function callBackFunction(normalParam, paramFunction) {
    // and as with normal variable, the function is renamed in here
    paramFunction(normalParam + " added from the callback");
}

// calling the function and sending the placeInto as a param 
callBackFunction("aNormal String", placeInto)
// calling the function and sending the secondInto as a param 
callBackFunction("This is a callback", secondInto)