// when dealing with outside files
// we have to deal with what happens when the file does not load 
// this is an option for images
// the a img tag has a build in "load" and "error" event we can track


/*let img = document.getElementById("imgId");


img.addEventListener('load', function () {
    console.log("image is there");
});

img.addEventListener('error', function () {
    console.log("image is not there?");
    // its not there, so use a backup img
    img.src = "error.png";
});*/

// but this has some problems
// 1. events are built to run when they can 
// 2. now that we have an img there (the backup), the load event is true
// 3. img.complete is a thing that can work here but only for images



// promises are a bit like events , but with some key differences
// 1. a promise can only succeed or fail once. Thats it.
// 2. after a promise has succeeded or failed. we can add a 
//    succeed/fail callback so a function can deal with the result
//
// this is usefull for aync stuff, like if a file is loaded or not.
// as we dont really care how long it takes, as long as we can handle the result


// this is the structure for a promise

//The promise constructor takes one argument, a callback with two parameters, 
//resolve and reject
let promise = new Promise(function (resolve, reject) {
    // this is where we test whatever task we are doing
    let x = 1;
    let y = 1;

    if (x === y) {
        resolve("success!");
    } else {
        reject("a fail");
    }
});

// let use the promise
// then() takes two arguments, a callback for a success case, and another for the failure case.
// Both are optional, so you can add a callback for the success or failure case only.
//
promise.then(function (result) {
    console.log(result); // "success!!"
}, function (reject) {
    console.log(reject); //  "a fail"
});
// print it to see the status
console.log(promise)


// lets fix the img thing then

let imgPromise = new Promise(function (resolve, reject) {
    // get the img
    let img = document.getElementById("imgId");

    // test it 
    // img onload runs when the img is loaded
    img.onload = function () {
        resolve("img is there")
    };
    //img.onerror runs when a img has an error
    img.onerror = function () {
        reject(img)
    };

});

//let use the promise
imgPromise.then(function (result) {
    console.log(result); // "img is there!!"

}, function (img) {
    console.log(img.src); // no img with it

    img.src = "error.png";
});
console.log(imgPromise)