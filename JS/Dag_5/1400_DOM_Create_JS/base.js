// method creates the HTML element specified by tagName


// lets make an "a"
let elemA = document.createElement("a");
// this does not add the element anywhere
// it just starts building it in the let

// lets print it
console.log(elemA);
// as this is an object it will be update as we go

// an "a" needs a few things to work
// a href, its a standard Attribute so it has its own method to create it
elemA.href = "https://www.google.se/";
// most common Attributes does
// but we can set any Attribute like this
// add an target Attribute for fun 
elemA.setAttribute("target", "	_blank");

// and something to link inside the element
elemA.innerText = "to google";
// can add more html inside it with innerhtml if needed

// now lets add it to the html
document.body.appendChild(elemA);
// note! that it add the element into the end of the html

// lets make a better on

let divMain = document.getElementsByTagName("div");
// note! even if there is only one getElementsByTagName returns an arrey
// so divMain.appendChild(elemA) will not work
divMain[0].appendChild(elemA);
divMain[0].appendChild(elemA);


// and now we see how even if we try to add it several times, the created element will just more
// this is because its an bit of HTML that we made and we are just moving around

// if we really wanted to make many of them we have to make a new  one completely  
// as this is still just moving it around
let elemB = elemA;
divMain[0].appendChild(elemB);









//putting it into a function will work here
function makeLink(target, content) {
    // a local let

    let elemA = document.createElement("a");

    // use the param "target " to go into the href
    elemA.href = target;
    //and the param "content" for what goes inside the tag
    elemA.innerText = content;

    // add an target Attribute for fun 
    elemA.setAttribute("target", "_blank");

    // a local divMain aswell 
    let divMain = document.getElementsByTagName("div");
    divMain[0].appendChild(elemA);
}

// now we can add as many links as we want

makeLink("https://www.google.se/", "Google many times 1");
makeLink("https://www.google.se/", "Google many times 2");

// and make it into a function with the createdelement the return, then we can move it 


function makeLinkRet(target, content) {
    // a local let

    let elemA = document.createElement("a");

    // use the param "target " to go into the href
    elemA.href = target;
    //and the param "content" for what goes inside the tag
    elemA.innerText = content;

    // add an target Attribute for fun 
    elemA.setAttribute("target", "_blank");



    return elemA;
}

let retElem = makeLinkRet("https://www.google.se/", "Google many times now where we want to add it");

// lets put on into the "p" inside the div
let pInDiv = divMain[0].getElementsByTagName("p");

// still the first P
pInDiv[0].appendChild(retElem);

