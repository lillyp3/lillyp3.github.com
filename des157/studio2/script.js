(function () {
    'use strict';
    console.log("reading");

    
});

    /* Fish design */
    let currentImage = 0;
    const FishPics = [
        "fish1.jpg",
        "fish2.jpg",
        "fish3.jpg"
    ];
    
    const slide = document.getElementById("fishImages");
    setInterval(function (){
        currentImage++;
        
        if (currentImage > FishPics.length-1){
            currentImage = 0;
        }
        
        slide.src = `images/${FishPics[currentImage]}`;}, 2000);

    /* Fossil Design */
    let currentImage2 = 0;
    const FossilPics = [
        "fossil1.jpg",
        "fossil2.jpg",
        "fossil3.jpg"
    ];
    

    const fossilSlide = document.getElementById("fossilImages");
    setInterval(function (){
        currentImage2++;
        
        if (currentImage2 > FossilPics.length-1){
            currentImage2 = 0;
        }
        
        fossilSlide.src = `images/${FossilPics[currentImage]}`;}, 2000);

    /* Heaart Design */
    let currentImage3 = 0;
    const HeartPics = [
        "Hearts1.jpg",
        "Hearts2.jpg",
        "Hearts3.jpg"
    ];
    

    const heartSlide = document.getElementById("heartImages");
    setInterval(function (){
        currentImage3++;
        
        if (currentImage3 > HeartPics.length-1){
            currentImage3 = 0;
        }
        
        heartSlide.src = `images/${HeartPics[currentImage]}`;}, 2000);

    /* Lollipop Design */
    let currentImage4 = 0;
    const PopPics = [
        "pop1.jpg",
        "pop2.jpg",
        "pop3.jpg"
    ];
    

    const popSlide = document.getElementById("popImages");
    setInterval(function (){
        currentImage4++;
        
        if (currentImage4 > PopPics.length-1){
            currentImage4 = 0;
        }
        
        popSlide.src = `images/${PopPics[currentImage]}`;}, 2000);