(function(){
    'use strict';
    console.log("reading");

let icon = document.querySelector("header p")
    /* Item 01 */

    document.getElementById("first").addEventListener("click", function(event){         
        event.preventDefault();
        document.getElementById("fishText").className = "showing";      
    });

/* Item 02 */

    document.getElementById("second").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("fossilText").className = "showing";           
    });

/* Item 03 */


    document.getElementById("third").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("candyText").className = "showing";               
    });

/* Item 04 */

    document.getElementById("fourth").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("popText").className = "showing";                
    });






}());