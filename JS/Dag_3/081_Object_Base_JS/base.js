/*
What is an object?
A product that can do things and contains information about its current state.
Each Object has a purpose and a task.
Real world examples could be a lamp or a human.

Objects can have Properties and Methods
Properties
A property is a variable connected to a specific object.
A property contains information about the object.




*/


// simple object
// can have a mix of datatypes, so naming is everything 
let flag = {
    colorOne: "blue",
    colorTwo: "yellow",
    height: 200,
    width: 300,
}

// the whole object 
console.log(flag);

// call something in the object with a "dot notation" 
console.log(flag.colorOne);

// call something in the object with a "bracket notation"
console.log(flag["colorTwo"]); // "" <--those are needed


// "bracket notation" is useful when you want to get something from the object, 
// but have the name in a variable

let aColor = "colorTwo";

console.log(flag[aColor]);

aColor = "colorOne";

console.log(flag[aColor]);




// if we need to loop through the object, we can "save" them  in into new variables  

let keys = Object.keys(flag); // keys for the names
console.log(keys);

let values = Object.values(flag); // values for the the content/values inside the object
console.log(values);

let entries = Object.entries(flag); // entries for the boths name and content
console.log(entries);


// normal for loop too see whats in the arrey
for (i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}




// can be created step by step

let car = new Object();

car.color = "red";
car.maxSpeed = 140;


console.log(car);

// can change whats in them
car.color = "blue";

console.log(car);
// and you can delete from them

delete car.maxSpeed;

console.log(car);

/*
In JavaScript, almost "everything" is an object.
Booleans, Numbers & Strings can be objects(if they are defined with the new keyword)
Arrays - are always objects
Functions - are always objects
Objects - are always objects

*/

let stringAsObject = new String("A String object");
console.log(stringAsObject);

//Functions are Objects




let greet = function () {
    console.log('I am a function saved into a let');
}
greet();
greet.message = 'I am added to an Objects, that is also a function';

console.log(greet.message);



