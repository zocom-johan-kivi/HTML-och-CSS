/*

   Loops repeatedly run a blocks of code.




    WHILE loop
    FOR loop




*/



//while
// you are stuck here intill the condition is met
// Used when we DON'T know how many times something should run.
let users = ['Bob', 'Roxy', 'John', 'Rex'];

let i = 0;


while (i < users.length) {
    // code block to be executed
    console.log(users[i]);
    i++;

}



// now with html! 
// no where you have the JS matters
i = 0; //reset the count
document.write("<ul>");

while (i < users.length) {
    // code block to be executed

    document.write("<li>" + users[i] + "</li>");
    i++;
}
document.write("</ul>");




//for
//  continues to run as long as i does not meet the condition
// Used when we DO know how many times something should run.



for (let i = 0; i < 10; i++) {
    console.log("counting:  " + i);
}




// now with html, and also can be mixed into the tags

for (let i = 1; i < 5; i++) {
    document.write("<h" + i + ">Heading</h" + i + ">");
}



//can be any html

    for (let i = 1; i < 5; i++) {
		// here we have a need for both ' and "
        document.write('<img src="img/dog.jpg" alt="dog" title="Good boy" >');
    }


