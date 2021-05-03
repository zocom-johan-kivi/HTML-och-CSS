 // This is a way to get the address of what site this code is running from
let currentAddress = window.location.href;
console.log(currentAddress);
// it will be just string

// now, we know that we want the address or the URL (Uniform Resource Locator) as it is called
// and there is a way to get the URL with some extra features
let currentURL = new URL(window.location.href);

// printing it will show us the extra stuff
console.log(currentURL);

// one of the extras is "search"
console.log(currentURL.search);
// this will cut off everything before the ? mark

// now we have the info from the form, lets get the info into a useable format

// URLSearchParams is a way to get form data like this
// its called HTTP GET method
// URLSearchParams let us get this data in a easy way.
let searchParams = new URLSearchParams(currentURL.search);

//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams


// there is a few features that URLSearchParams has that is usefull
// the main one is "get", that lets us fetch form data based on the form name
let fname = searchParams.get("fname");
// when we print this we will see what was enterd in the form with the name "fname"
console.log(fname);




// checkboxes
// will only check whats in this
searchParams.get("val1");

// as checkboxes well show upp as val1=on&val9=on 
// they will only be in the url of they where checked.
// but they have the "on" value when they are checked.
// lets use that
// 
// the searchParams is a object, so let use it as one.

// this saves all the key in the searchParams as an "Iterator"

let searchKeys = searchParams.keys();

// Iterators should be iterated

// arrey to save the checkedboxes
let checkedBoxes = [];
for (let key of searchKeys) {
    // console.log(key)

    // and as we already can get the other input in the form
    // let just get the ones we care about


    // remember to name the form inputs well 
    if (key.includes("val")) {
        //  console.log(key + "the ones we care about")
        // save the key we care about
        checkedBoxes.push(key)
    }
}


// lets print them into the html
for (i = 0; i < checkedBoxes.length; i++) {
    console.log(checkedBoxes[i]);

    document.body.innerHTML += "<p>" + checkedBoxes[i] + "</p>";
}





// date time
// Date() is fun
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let fdate = searchParams.get("fDate");

// unix time (https://sv.wikipedia.org/wiki/Unixtid)
let unixTime = Date.now()
console.log(unixTime);
//format the form date into unix time
let fdateUnix = new Date(fdate).getTime();
console.log(fdateUnix);

//and format the result into a date
let fdateFormat = new Date(fdateUnix);
// and now we can get some good info out of it

// the year
fdateFormat.getUTCFullYear()



// the month
fdateFormat.getUTCMonth()
// the month name in swe
fdateFormat.toLocaleString('sv-SE', {
    month: 'long'
})

// the day
fdateFormat.getUTCDay();
// the day name in swe
fdateFormat.toLocaleString('sv-SE', {
    weekday: 'long'

});

// more on the toLocaleString Method here
// https://www.w3schools.com/jsref/jsref_tolocalestring.asp


// and print one
document.body.innerHTML += "<p>" + fdateFormat.toLocaleString('sv-SE', {
    weekday: 'long'

}) + "</p>";