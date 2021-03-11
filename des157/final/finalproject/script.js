(function(){
    'use strict';
    console.log("reading");

    let icon = document.querySelector("header p");      /* sets a variable for the upper right icon that changes depending on chosen design */

/* Item 01 */
    document.getElementById("first").addEventListener("click", function(event){         /* click on the t-shirt */ 
        event.preventDefault();
        document.getElementById("fishText").className = "showing";                      /* div that holds video, title, and "about" button  is now displayed on screen */
        document.querySelector("body").className = "fishBackground";                    /* background color changes */
        document.getElementById("fossilText").className = "hidden";                     /* keeps other design information hidden */        
        document.getElementById("candyText").className = "hidden";    
        document.getElementById("popText").className = "hidden";  
        icon.innerHTML = '<img src="images/Fish.png">';                                 /* upper right icon changes */
    });

/* Item 02 */
    document.getElementById("second").addEventListener("click", function(event){         
        event.preventDefault();
        document.getElementById("fossilText").className = "showing"; 
        document.querySelector("body").className = "fossilBackground"; 
        document.getElementById("fishText").className = "hidden"; 
        document.getElementById("candyText").className = "hidden";    
        document.getElementById("popText").className = "hidden"; 
        icon.innerHTML = '<img src="images/Fossil.png">';           
    });

/* Item 03 */
    document.getElementById("third").addEventListener("click", function(event){         
        document.getElementById("candyText").className = "showing"; 
        document.querySelector("body").className = "candyBackground"; 
        document.getElementById("fishText").className = "hidden"; 
        document.getElementById("fossilText").className = "hidden";    
        document.getElementById("popText").className = "hidden";  
        icon.innerHTML = '<img src="images/hearts.png">';                
    });

/* Item 04 */
    document.getElementById("fourth").addEventListener("click", function(event){         
        event.preventDefault();
        document.getElementById("popText").className = "showing"; 
        document.querySelector("body").className = "popBackground";  
        document.getElementById("fishText").className = "hidden"; 
        document.getElementById("candyText").className = "hidden";    
        document.getElementById("fossilText").className = "hidden";
        icon.innerHTML = '<img src="images/Lollipop.png">';                 
    });



/* Buttons to close out of overlays */
    document.querySelector("#fishInfo button").addEventListener("click", function(event){              /* click on upper right "x" button */  
        event.preventDefault();
        document.querySelector("#one").className = "hidden";                                            /* overlay is no longer visible */
        document.querySelector("#fishText").className = "showing";                                      /* video, title, and button is visible */
                    
    });

    document.querySelector("#fossilInfo button").addEventListener("click", function(event){             /* fossil */
        event.preventDefault();
        document.querySelector("#two").className = "hidden";
        document.querySelector("#fossilText").className = "showing";
                        
    });

    document.querySelector("#candyInfo button").addEventListener("click", function(event){              /* hearts */
        event.preventDefault();
        document.querySelector("#three").className = "hidden";
        document.querySelector("#candyText").className = "showing"; 
                        
    });

    document.querySelector("#popInfo button").addEventListener("click", function(event){                /* lollipop */
        event.preventDefault();
        document.querySelector("#four").className = "hidden";
        document.querySelector("#popText").className = "showing";
    });
/* ////////////////////////////////////////////////////////////////////////////////////// */

/* Buttons to open the overlays */
    document.querySelector("#fishButton").addEventListener("click", function(event){                    /* click on "about button" */
        event.preventDefault();
        document.querySelector("#one").className = "showing";                                           /* overlay with slideshow + text is visible */
        document.querySelector("#fishText").className = "hidden";                                       /* video and title is not visible on screen so it does not conflict with overlay */
    });

    document.querySelector("#fossilButton").addEventListener("click", function(event){                  /* fossil */
        event.preventDefault();
        document.querySelector("#two").className = "showing";
        document.querySelector("#fossilText").className = "hidden";
                        
    });

    document.querySelector("#candyButton").addEventListener("click", function(event){                   /* hearts */
        event.preventDefault();
        document.querySelector("#three").className = "showing";
        document.querySelector("#candyText").className = "hidden";
                        
    });

    document.querySelector("#popButton").addEventListener("click", function(event){                     /* lollipop */
        event.preventDefault();
        document.querySelector("#four").className = "showing";
        document.querySelector("#popText").className = "hidden";
                        
    });
/* ////////////////////////////////////////////////////////////////////////////////////// */

/* SlideSHowssssssss */
    let currentImage1 = 0;          /* sets a variable for the image being displayed on screen */
    const fishPics = [              /* creates an array of all items in the slideshow */
        "fish1.jpg",
        "fish2.jpg",
        "fish3.jpg"
    ];

    const fishSlide = document.getElementById("fishImages");        /* sets a variable for the slideshow and links with where the div is in the html */
    setInterval(function (){
        currentImage1++;                                            /* index of current image array increases */
        
        if (currentImage1 > fishPics.length-1){                     /* if at the end of the list */
            currentImage1 = 0;                                      /* start at the first image again */
        }
        
        fishSlide.src = `images/${fishPics[currentImage1]}`;}, 2000);       /* change the photo every 2 seconds */


/* fossil slideshow */
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


/* Hearts Slideshow */
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


/* Lollipop Slideshow */
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