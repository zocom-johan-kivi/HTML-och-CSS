/*

A function is generally a named section of 
code that can be "called" by name, and the code inside it will be run each time.



 */
 
 
 

 

// Function
function printAmount() {
	console.log(amount);
}

//
let amount = 99.99;

//call function
printAmount(); // "99.99"

amount = amount * 2;

//call it once more
printAmount(); // "199.98"


// can be sent arguments

function logMessage(messageToLog) {
	//note that whatever is sent gets the name you out in the arguments
	console.log(messageToLog);
}

let aMessage = "hello there";

logMessage(aMessage);

// function with three arguments
// the sum of the arguments
function getSum(x, y, z) {
	console.log(x + y + z);
}

// what you send dont have to be a variable
getSum(1, 34, 55);

// function can return data
function aReturn() {
	return "this is from a function";
}

let thatReturn = aReturn();

console.log(thatReturn);

//dont have to a be variable, can use the return directly

console.log(aReturn() + ", done directly");

/*
A variable name has to be unique within the same
scope -- there can't be two different a variables
sitting right next to each other.
But the same variable name a could appear in
different scopes.
 */

function one() {
	// this `aInScope` let only belongs to the `one()` function
	let aInScope = 1;
	console.log(aInScope);
}

function two() {
	// this `aInScope` let only belongs to the `two()` function
	let aInScope = 2;
	console.log(aInScope);
}

one(); // 1
two(); // 2





//a function that calls other functions
function callAllOtherFunctions(){

one(); 
two(); 

getSum(1, 34, 55);


}

//just dont make infinite loops, stuff will break, well no, the brower will stop
 //callInfinite()
function callInfinite(){
	
	console.log("to infinity");
	callBeyond();
	
}

function callBeyond (){
	
	console.log(" and beyond");
	
	callInfinite();
}
