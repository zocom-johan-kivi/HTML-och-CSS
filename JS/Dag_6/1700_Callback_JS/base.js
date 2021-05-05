// lets set some order 

// this runs when we call it
function placeInto(holder) {
    // what we send into the param is renamed, but is the same variable
    document.getElementById("placeHolder").innerHTML = holder;
}

// calling it and sending the param
let someString = "Simple function";
placeInto(someString);

// and we can call a function from within other function
function secondFunction(secondParam) {

    placeInto(secondParam + " added from the second func");
}

someString = "what are we doing?"

secondFunction(someString);



// but as a function can be handled as a variable
// we can send it as a param 

function thirdFunction(normalParam, paramFunction) {
    // and as with normal variable, the function is renamed in here
    paramFunction(normalParam + " added from the third Function");
}

// calling the function and sending the placeInto as a param 
thirdFunction("aNormal String", placeInto)

// so if we send another function it into it
// what happends?
function secondInto(holder) {
    // add into the secondHolder
    document.getElementById("secondHolder").innerHTML = holder;
}

thirdFunction("This is a callback", secondInto)