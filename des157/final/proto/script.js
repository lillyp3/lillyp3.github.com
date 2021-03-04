(function(){
    'use strict';
    console.log("reading");

    document.getElementById("first").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("fishOverlay").className = "showing";                   
    });

    document.getElementById("second").addEventListener("click", function(event){     
        event.preventDefault();
        document.getElementById("fossilOverlay").className = "showing";                   
    });

    document.getElementById("third").addEventListener("click", function(event){     
        event.preventDefault();
        document.getElementById("candyOverlay").className = "showing";                   
    });

    document.getElementById("fourth").addEventListener("click", function(event){     
        event.preventDefault();
        document.getElementById("popOverlay").className = "showing";                   
    });

    
 /*     document.addEventListener("mousemove", reportPos);
    const label = document.querySelector("header");
    let prevLoc = 0;                                    //previous location

    function reportPos(event) {
        let yPos = event.clientY;     
        
        if (yPos <= 800){
            label.innerHTML="01/04";
        }
        
    } */
    /* Tracking for header number ^^^^^^^^ */

}());