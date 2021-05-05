// callbacks in action

// built in callback function is
// setTimeout(functionToSend, milliseconds to wait)

setTimeout(placeInto, 1000); // 1000  = 1 sec
// remember, we are handling the funtion as a variable so no parameters, not directly  
// but if we add more params that those are send along into the setTimeout
//setTimeout(functionToSend, milliseconds to wait, params)
setTimeout(secondInto, 2000, "we waited 2 sec");
// this is special for these

// more are callback functions
setInterval(thirdInto, 1000)
// this one runs every sec

// some functions
function placeInto() {
    // add into the placeHolder
    document.getElementById("placeHolder").innerHTML = "we waited 1 sec";
}

function secondInto(holder) {
    // add into the secondHolder
    document.getElementById("secondHolder").innerHTML = holder;
}

function thirdInto() {
    // add into the thirdHolder
    // tick tock, lets get some seconds
    let d = new Date();

    document.getElementById("thirdHolder").innerHTML = d.getSeconds();
}