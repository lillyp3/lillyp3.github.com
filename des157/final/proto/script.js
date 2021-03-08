(function(){
    'use strict';
    console.log("reading");


    /* Item 01 */

/*     document.getElementById("first").addEventListener("mouseover", function(event){         
        event.preventDefault();
        document.getElementById("fishText").className = "showing";                   
    });

    document.getElementById("first").addEventListener("mouseleave", function(event){         
        event.preventDefault();
        document.getElementById("fishText").className = "hidden";                   
    }); */

    document.getElementById("first").addEventListener("click", function(event){         
        event.preventDefault();
        document.getElementById("fishText").className = "showing"; 
        document.querySelector("body").className = "fishBackground";
        document.getElementById("fossilText").className = "hidden"; 
        document.getElementById("candyText").className = "hidden";    
        document.getElementById("popText").className = "hidden";                
    });

/* Item 02 */

    document.getElementById("second").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("fossilText").className = "showing"; 
        document.querySelector("body").className = "fossilBackground"; 
        document.getElementById("fishText").className = "hidden"; 
        document.getElementById("candyText").className = "hidden";    
        document.getElementById("popText").className = "hidden";            
    });

/* Item 03 */


document.getElementById("third").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
    event.preventDefault();
    document.getElementById("candyText").className = "showing"; 
    document.querySelector("body").className = "candyBackground"; 
    document.getElementById("fishText").className = "hidden"; 
    document.getElementById("fossilText").className = "hidden";    
    document.getElementById("popText").className = "hidden";                  
});

/* Item 04 */

document.getElementById("fourth").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
    event.preventDefault();
    document.getElementById("popText").className = "showing"; 
    document.querySelector("body").className = "popBackground";  
    document.getElementById("fishText").className = "hidden"; 
    document.getElementById("candyText").className = "hidden";    
    document.getElementById("fossilText").className = "hidden";                 
});


/* BUTTONS /////////////////////////// */

document.querySelector("#popText button").addEventListener("click", function(event){         
    event.preventDefault();
    document.querySelector("#popInfo").className = "showing";                 
});

document.querySelector(".overlays button").addEventListener("click", function(event){         
    event.preventDefault();
    document.querySelector(".overlays").className = "hidden";                 
});






/* SlideSHowssssssss */

let currentImage1 = 0;
const fishPics = [
    "fish1.jpg",
    "fish2.jpg",
    "fish3.jpg"
];

const fishSlide = document.getElementById("fishImages");
setInterval(function (){
    currentImage1++;
    
    if (currentImage1 > fishPics.length-1){
        currentImage1 = 0;
    }
    
    fishSlide.src = `images/${fishPics[currentImage1]}`;}, 2000);



let currentImage2 = 0;
const fossilPics = [
    "fossil1.jpg",
    "fossil2.jpg",
    "fossil3.jpg"
];

const fossilSlide = document.getElementById("fossilImages");
setInterval(function (){
    currentImage2++;
    
    if (currentImage2 > fossilPics.length-1){
        currentImage2 = 0;
    }
    
    fossilSlide.src = `images/${fossilPics[currentImage2]}`;}, 2000);



let currentImage3 = 0;
const heartPics = [
    "Hearts1.jpg",
    "Hearts2.jpg",
    "Hearts3.jpg"
];

const heartSlide = document.getElementById("heartImages");
setInterval(function (){
    currentImage3++;
    
    if (currentImage3 > PopPics.length-1){
        currentImage3 = 0;
    }
    
    heartSlide.src = `images/${heartPics[currentImage3]}`;}, 2000);



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
    
    popSlide.src = `images/${PopPics[currentImage4]}`;}, 2000);


}());