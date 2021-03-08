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

document.querySelector(".overlays button").addEventListener("click", function(event){         
    event.preventDefault();
    document.querySelector(".overlays").className = "hidden";                 
});

document.getElementById("#popButton").addEventListener("click", function(event){         
    event.preventDefault();
    document.querySelector("#popInfo").className = "showing";                 
});




/* SlideSHowssssssss */
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