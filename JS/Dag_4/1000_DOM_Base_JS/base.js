  // first we have window
 console.log(window);
 // it has a lot of info 

 //like the Width of the window
 console.log(window.innerWidth);

 // or info about whats in the window 
 // html 
 console.log(window.document);
 // but as we use the document bit a lot
 // we can skip the window bit
 console.log(document);

 // document has a lot of info as well
 console.log(document.URL);
 console.log(document.charset);

 // the hmtl will always have a <body>, so we can check that one 
 console.log(document.body);

 // all of these can be saved, for later use if needed
 // ex:
 let haveBody = document.body;


 // and to that body we can add to it 
 document.body.innerHTML += "<p>add a P into body</p>";


 // but adding into the body is 
 //not great if the body has a lot of stuff
 // try the body code about on a website you normally use 
 //and see where it ands up



 // what we do instead off just adding into
 // the body, is that we select the DOM nodes
 document.getElementById('uniqueId');
 // gets a reference to a element with id 'uniqueId'
 console.log(document.getElementById('uniqueId'));

 // no now that we can get the h1 we can add into it
 document.getElementById('uniqueId').innerText = "From the JS into the header";


 // can also get the element/html tag by it tag name.
 // h1 here
 document.getElementsByTagName("h1");

 console.log(document.getElementsByTagName("h1"));

 // but as we can have many tags of the same type, 
 //getElementsByTagName is an Arrey of all the tags that it can find.
 // try getting all the <p> on a website and see



 // so lets use them as Arreys and add stuff into them
 document.getElementsByTagName("h1")[0].innerHTML = "add in to the first h1";

 document.getElementsByTagName("h1")[1].innerHTML = "add in to the second h1";

 //might be simpler to see of we save it to a let first

 let alltheH1 = document.getElementsByTagName("h1");

 alltheH1[2].innerHTML = "into the 3rd h1";

 // getElementsByTagName is good for 
 //when you want to add into a type of tag


 // and if we have it as an Arrey we can loop through it

 for (let i = 0; i < alltheH1.length; i++) {
     console.log(alltheH1[i]);
     //alltheH1[i].innerHTML = "now we have them all";

 }


 // but what happens when you want to add 
 //something into more then one type element?

 // we can use the class attribute
 // while the ID is meant to be unique per html page
 // classes are not
 document.getElementsByClassName("aClass");

 //// try and find a class on a website and select it

 // not was with the tags, we dont know how many elements
 // that as a class, so what we get is an Arrey

 // so lets do the same
 let alltheaClass = document.getElementsByClassName("aClass");

 alltheaClass[0].innerHTML = "into the first aClass";

 // loop time
 for (let i = 0; i < alltheaClass.length; i++) {
     console.log(alltheaClass[i]);
     alltheaClass[i].innerHTML = "all of these have the aClass";

 }




 // but for any of these we can do 
 //more than changing the text inside

 document.getElementById('anotherId').style.fontSize = "5em"

 // but its generally better to keep css in the css
 // and add new classes into the element 
 document.getElementById('anotherId').classList.add("brown");





 //querySelector
 document.querySelector("aCSSrule");
 // querySelector selects the html based on css rules
 // so a querySelector("p") pick the first "p" tag
 // and querySelector(".aClass") the first html tag with the class "aClass";
 document.querySelector(".aClass");

 // usefull when you want some html that is easy to target with css, 
 // but not with the getelement methods
 // ex CSS 
 // li:last-child {
 //   color: red;
 //}
 // that css rule targets the last child in a list
 document.querySelector("li:last-child").innerHTML = "picked by a css rule";


 // there are also cases where you cant change the html, so adding id and classes is not allways an option