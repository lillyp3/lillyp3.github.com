/* (function () {
    'use strict';
    console.log("reading"); */

    /* Overlay for Fish Design */
    document.querySelector(".open1").addEventListener("mouseover", function(event){     //hover mouse over the fish design slideshow
        event.preventDefault();
        document.getElementById("fishOverlay").className = "showing";                   //changes class of overlay so it is visible
    });

    document.querySelector(".open1").addEventListener("mouseleave", function(event){       //move mouse off the image, the overlay goes back to not being visible
        event.preventDefault();
        document.getElementById("fishOverlay").className = "hidden";
    });
    ////////////////////////////////////////////////////////////////////////////

    /* Fossil Overlay */
    document.querySelector(".open2").addEventListener("mouseover", function(event){
        event.preventDefault();
        document.getElementById("fossilOverlay").className = "showing";
    });

    document.querySelector(".open2").addEventListener("mouseleave", function(event){
        event.preventDefault();
        document.getElementById("fossilOverlay").className = "hidden";
    });
    ////////////////////////////////////////////////////////////////////////////

    /* Candy Hearts Overlay */
    document.querySelector(".open3").addEventListener("mouseover", function(event){
        event.preventDefault();
        document.getElementById("heartsOverlay").className = "showing";
    });

    document.querySelector(".open3").addEventListener("mouseleave", function(event){
        event.preventDefault();
        document.getElementById("heartsOverlay").className = "hidden";
    });
    ////////////////////////////////////////////////////////////////////////////

    /* Lollipop Overlay */
    document.querySelector(".open4").addEventListener("mouseover", function(event){
        event.preventDefault();
        document.getElementById("popOverlay").className = "showing";
    });

    document.querySelector(".open4").addEventListener("mouseleave", function(event){
        event.preventDefault();
        document.getElementById("popOverlay").className = "hidden";
    });
    ////////////////////////////////////////////////////////////////////////////

/* }); */

    /* Fish design */
    let currentImage = 0;       //creates a variable to keep track of image on screen                            
    const FishPics = [          //list of all photos in slideshow
        "fish1.jpg",
        "fish2.jpg",
        "fish3.jpg"
    ];
    
    const slide = document.getElementById("fishImages");        //variable that holds the div of where slideshow will be in
    setInterval(function (){        //timed interval to change photo every 2 seconds
        currentImage++;             //everytime the function is called, the currentImage adds one
        
        if (currentImage > FishPics.length-1){      //when the list reaches the end, the count starts over and starts with the first image again
            currentImage = 0;
        }
        
        slide.src = `images/${FishPics[currentImage]}`;}, 2000);            //changes the source to the image that corresponds to the index

    /* Fossil Design */
    let currentImage2 = 0;      //new variables, but same process for each slideshow
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