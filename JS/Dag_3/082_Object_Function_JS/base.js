/*Objects can have Properties and Methods
Properties
A property is a variable connected to a specific object.
A property contains information about the object.

Methods
A method is a function connected to a specific object.
Methods are actions that can be performed on objects.
Methods are used to give an object functionality.

*/


// Objects with functions

let flag = {
    colorOne: "blue",
    colorTwo: "yellow",
    height: 200,
    width: 300,
    poleHeight: 0,
    flap: function () {
        //standard function
        console.log("its flapping");
    },
    turn: function (direction) {
        //with params
        console.log("its facing " + direction);
    },

    takeDown: function () {
        // and with returns
        return "flag is down";

    }, set setHeight(poleHeight) { // setter

        this.poleHeight = poleHeight;

    }, get getHeight() { return this.poleHeight } // getter

}

// the whole object 
console.log(flag);
// flap?
flag.flap();


// send to the flag

flag.turn("north");

// take down the flag

console.log(flag.takeDown());



// to String
console.log(flag.toString());

// adding functions
flag.toString = function () {
    return flag.colorOne;
}
// overwriting functions
console.log(flag.toString());




// setter and getters, functions that set a value and get a value
// setter

flag.setHeight = 100;

// get it directly
console.log(flag.poleHeight);

// getter

let theCurrentPoleHeight = flag.getHeight;

console.log(theCurrentPoleHeight)