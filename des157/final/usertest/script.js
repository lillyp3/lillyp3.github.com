(function(){
    'use strict';
    console.log("reading");

    alert("Hello, during this test you will be asked to complete four tasks");
    alert("1) Get from the opening message to the t-shirt designs.");
    alert("2) Choose a design.");
    alert("3) Find out more information about the design, and close out of that information.");
    alert("4) Choose a different design. Good Luck!");

    let icon = document.querySelector("header p");
    /* Item 01 */

    document.getElementById("first").addEventListener("click", function(event){         
        event.preventDefault();
        document.getElementById("fishText").className = "showing"; 
        document.querySelector("body").className = "fishBackground";
        document.getElementById("fossilText").className = "hidden"; 
        document.getElementById("candyText").className = "hidden";    
        document.getElementById("popText").className = "hidden"; 
        icon.innerHTML = '<img src="images/Fish.png">';        
    });

/* Item 02 */

    document.getElementById("second").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("fossilText").className = "showing"; 
        document.querySelector("body").className = "fossilBackground"; 
        document.getElementById("fishText").className = "hidden"; 
        document.getElementById("candyText").className = "hidden";    
        document.getElementById("popText").className = "hidden"; 
        icon.innerHTML = '<img src="images/Fossil.png">';           
    });

/* Item 03 */


    document.getElementById("third").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("candyText").className = "showing"; 
        document.querySelector("body").className = "candyBackground"; 
        document.getElementById("fishText").className = "hidden"; 
        document.getElementById("fossilText").className = "hidden";    
        document.getElementById("popText").className = "hidden";  
        icon.innerHTML = '<img src="images/hearts.png">';                
    });

/* Item 04 */

    document.getElementById("fourth").addEventListener("click", function(event){         //click on shirt image, overlay changes from hidden to showing
        event.preventDefault();
        document.getElementById("popText").className = "showing"; 
        document.querySelector("body").className = "popBackground";  
        document.getElementById("fishText").className = "hidden"; 
        document.getElementById("candyText").className = "hidden";    
        document.getElementById("fossilText").className = "hidden";
        icon.innerHTML = '<img src="images/Lollipop.png">';                 
    });


/* BUTTONS /////////////////////////// */

    document.querySelector("#fishInfo button").addEventListener("click", function(event){         
        event.preventDefault();
        document.querySelector("#one").className = "hidden";
        document.querySelector("#fishText").className = "showing"; 
                    
    });

    document.querySelector("#fossilInfo button").addEventListener("click", function(event){         
        event.preventDefault();
        document.querySelector("#two").className = "hidden";
        document.querySelector("#fossilText").className = "showing";
                        
    });

    document.querySelector("#candyInfo button").addEventListener("click", function(event){         
        event.preventDefault();
        document.querySelector("#three").className = "hidden";
        document.querySelector("#candyText").className = "showing"; 
                        
    });

    document.querySelector("#popInfo button").addEventListener("click", function(event){         
        event.preventDefault();
        document.querySelector("#four").className = "hidden";
        document.querySelector("#popText").className = "showing";
    });


    document.querySelector("#fishButton").addEventListener("click", function(event){         
        event.preventDefault();
        document.querySelector("#one").className = "showing";
        document.querySelector("#fishText").className = "hidden";               
    });

    document.querySelector("#fossilButton").addEventListener("click", function(event){         
        event.preventDefault();
        document.querySelector("#two").className = "showing";
        document.querySelector("#fossilText").className = "hidden";
                        
    });

    document.querySelector("#candyButton").addEventListener("click", function(event){         
        event.preventDefault();
        document.querySelector("#three").className = "showing";
        document.querySelector("#candyText").className = "hidden";
                        
    });

    document.querySelector("#popButton").addEventListener("click", function(event){         
        event.preventDefault();
        document.querySelector("#four").className = "showing";
        document.querySelector("#popText").className = "hidden";
                        
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

/* mouse positioning */

        document.addEventListener("mousemove", reportPos);

    function reportPos(event){
        const xPos = event.clientX;
        const yPos = event.clientY;
        let prevXLoc = 0;
        let prevYLoc = 0;
        console.log(`The mouse is ${xPos} pixels from the left and ${yPos} pixels from the top`);
           
    }




}());