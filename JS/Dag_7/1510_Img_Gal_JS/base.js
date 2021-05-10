// setup

// hide the src div 
const imgGal = document.getElementById("imgGal");
imgGal.style.display = "none";
// empty arrey to put src into
let allImgSrc = [];
// counter to keep track on the images
let imgCount = 0;

// the img element we are updateing 
let aImg = document.createElement("IMG");

// bool for want dir the img should go
let slideForward = false;
// the setInterval for the slider 
let slideInterval;


// get all the texts that are the "imgGal" div
// and save them into an arrey
for (let i = 0; i < imgGal.getElementsByTagName("div").length; i++) {
    allImgSrc.push(imgGal.getElementsByTagName("div")[i].innerHTML)
}

// btn list for forward
document.getElementById("forwardBtn").addEventListener("click", function () {

    // call the update img func, and set the direction and send it to the func

    slideForward = true;
    updateImg();
});
// btn list for back
document.getElementById("backBtn").addEventListener("click", function () {
    // call the update img func, and set the direction and send it to the func

    slideForward = false;
    updateImg();
});
// change list for the check box 
document.getElementById("slideCheck").addEventListener("change", function () {
    // this is the elem we have an EventListener inside here, and as it is
    // checkbox, we can call .checked 
    if (this.checked) {
        console.log("Checkbox is checked..");
        // set the interval into a variable  
        // and start calling updateImg with the current slide direction 
        slideInterval = setInterval(updateImg, 1000);
    } else {
        console.log("Checkbox is not checked..");
        // stop the the slide
        // clearInterval needs the interval as parameter to stop it
        clearInterval(slideInterval);
        // this is why we saved the setInterval into a let
    }

});



// main func to update the img
function updateImg() {
    console.log(slideForward)


    // send the current src in to the img making func
    MakeImg(allImgSrc[imgCount])

    // if the bool is true the slide should move forward
    if (slideForward) {
        imgCount++;
    } else {
        // if not move back
        imgCount--;
    }
    // check so we dont go above the number of images
    if (imgCount >= allImgSrc.length) {
        imgCount = 0
    } else if (imgCount < 0) {
        // and not going below 0 as well
        imgCount = allImgSrc.length - 1;

    }
}

// this func takes a string and sets it as the src alt and title on a img
function MakeImg(imgSrc) {

    aImg.setAttribute("src", imgSrc);
    aImg.setAttribute("alt", imgSrc);
    aImg.setAttribute("title", imgSrc);
    // and adds it into the imgHolder
    document.getElementById("imgHolder").appendChild(aImg);
}