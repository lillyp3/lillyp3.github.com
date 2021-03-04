(function(){
    'use strict';
    console.log("reading");

    document.querySelector(".item").addEventListener("click", function(event){     //hover mouse over the fish design slideshow
        event.preventDefault();
        document.getElementById("fishOverlay").className = "showing";                   //changes class of overlay so it is visible
    });

    document.querySelector(".open1").addEventListener("mouseleave", function(event){       //move mouse off the image, the overlay goes back to not being visible
        event.preventDefault();
        document.getElementById("fishOverlay").className = "hidden";
    });


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

}());