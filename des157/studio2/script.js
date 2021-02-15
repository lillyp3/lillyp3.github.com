(function () {
    'use strict';
    console.log("reading");

    const FishPics = [
        "fish1.jpg",
        "fish2.jpg"
    ];

    let currentImage = 0;

    const slide =document.getElementById("fishImages");

    setInterval(function (){
        currentImage++;

        if (currentImage > FishPics.length-1){
            currentImage = 0;
        }

        slide.src = `images/${FishPics[currentImage]}`;}, 1000);
});
