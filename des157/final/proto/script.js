(function(){
    'use strict';
    console.log("reading");

    /* Item 01 */

    document.getElementById("first").addEventListener("mouseover", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("fishText").className = "showing";                   
    });

    document.getElementById("first").addEventListener("mouseleave", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("fishText").className = "hidden";                   
    });

    document.getElementById("first").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("video1").className = "showing";                
    });

/* Item 02 */
    document.getElementById("second").addEventListener("mouseover", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("fossilText").className = "showing";                   
    });

    document.getElementById("second").addEventListener("mouseleave", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("fossilText").className = "hidden";                   
    });

    document.getElementById("second").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("video2").className = "showing";                   
    });

/* Item 03 */
document.getElementById("third").addEventListener("mouseover", function(event){         //click on shirt image, overlay changes from hidden to showing
    event.preventDefault();
    document.getElementById("candyText").className = "showing";                   
});

document.getElementById("third").addEventListener("mouseleave", function(event){         //click on shirt image, overlay changes from hidden to showing
    event.preventDefault();
    document.getElementById("candyText").className = "hidden";                   
});

document.getElementById("third").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
    event.preventDefault();
    document.getElementById("video3").className = "showing";                   
});

/* Item 04 */
document.getElementById("fourth").addEventListener("mouseover", function(event){         //click on shirt image, overlay changes from hidden to showing
    event.preventDefault();
    document.getElementById("popText").className = "showing";                   
});

document.getElementById("fourth").addEventListener("mouseleave", function(event){         //click on shirt image, overlay changes from hidden to showing
    event.preventDefault();
    document.getElementById("popText").className = "hidden";                   
});

document.getElementById("fourth").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
    event.preventDefault();
    document.getElementById("video4").className = "showing";                   
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