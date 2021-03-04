(function(){
    'use strict';
    console.log("reading");

    document.querySelectorAll("#shirts img").addEventListener("click", function(event){     //hover mouse over the fish design slideshow
        event.preventDefault();
        document.querySelectorAll("#shirts img").className = "showingColor";                   //changes class of overlay so it is visible
    });



}());