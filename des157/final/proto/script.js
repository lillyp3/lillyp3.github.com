(function(){
    'use strict';
    console.log("reading");

    document.getElementById("first").addEventListener("click", function(event){     
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



}());