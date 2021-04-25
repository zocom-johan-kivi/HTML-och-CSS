let passSave = "admin";

//empty string to update
let passWord = "";


//with a loop now

let passCount = 1;
let passMax = 3;

// let to check the status of the pass
let passSuccess = true;

//bonus bit
//let passMax= prompt("How many?");

while (passWord != passSave) {

    // update the passWord var	
    passWord = prompt("Enter password please");



    // check if the number of pass chances is above the max
    if (passCount >= passMax) {

        //make the status false
        passSuccess = false;
        break; // break is a simple way to leave a loop no matter what
    }
    passCount++;

}

// this only happens after the while loop

// check what message to write
if (passSuccess) {
    passMessage("We are in")
} else {
    passMessage("out of chances")
}



function passMessage(passStatus) {

    // the document is the html from where this code started in
    document.write("<p>" + passStatus + "</p>");

}