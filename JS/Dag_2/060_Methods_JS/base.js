 //there is a lot of built in functions or methods
 
 
 //general ones that you call when needed
 let person = prompt("Please enter your name", "John Doe");
 
 //  alert is one
 alert(person);
 // so is console.log
 console.log(person);
 
 

 
 
 // there is also methods that you can use on stuff
 //like strings
 
 //String Methods
 
 let aString = "ABDCD";
 let stnLgt = aString.length;
 
 //guess what stnLgt has in it
 
 
 // you can find where strings are other in strings
 let str = "Get me out of here!";
let pos = str.indexOf("me"); 

//case matters
//"me" is not the same as "ME"

// if cases are a bother
console.log(str.toUpperCase());
//that we can fix that

// you can do a lot of things with stings
let meIsFree = str.slice(4,6); 

console.log(meIsFree);




// there is also a lot you can do with numbers

//Number Methods



// make the number into a string
let num = 123;
console.log(num);
let numAsString=num.toString();  

console.log(numAsString);

//we can turn it back

let numOnceMore=Number(numAsString); //this is a Global Method , meaning you can use it on most things

console.log(numOnceMore);



