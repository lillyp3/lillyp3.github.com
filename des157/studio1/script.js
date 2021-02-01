(function(){
    "use strict";
    console.log("reading js");

    let myForm = document.querySelector("#myform");
    let madlib = document.querySelector("#madlib");
    let one = document.querySelector("#answer1");
    let two = document.querySelector("#answer2");
    let three = document.querySelector("#answer3");
    let words = [];

    /* takes the input from form and passes to Madlib */
    myForm.addEventListener("submit", function(event){
        console.log("makeMadlibs");
        event.preventDefault();
        let formData = document.querySelectorAll("input[type=text]");
        for (let eachWord of formData){
                words.push(eachWord.value);
                eachWord.value = "";
            }
        makeMadlib(words); 
    });

    /* Adds words to madlib */
    function makeMadlib(wordsArray){
        console.log("makeMadlibs");
        let myText = `Nice to meet you too! Please excuse my ${wordsArray[0]} I was nervous for the date.`;
        one.innerHTML = myText;

        let myText2 = `I like watching ${wordsArray[1]} ${wordsArray[2]} ${wordsArray[3]}.`;
        two.innerHTML = myText2;

        let myText3 = `I make my own ${wordsArray[4]}. Personally, I think it is ${wordsArray[5]}. Sorry I’ve been ${wordsArray[6]} a lot, how about you?`;
        three.innerHTML = myText3;

    };
    
    /* When you click submit, it shows the madlib */
    document.querySelector(".open").addEventListener("click", function(event){
        /* event.preventDefault(); */
        document.getElementById("madlib").className = "showing";
        document.getElementById("myform").className = "hidden";
    });

    /* When you click refresh, it shows the form */
    document.querySelector(".close").addEventListener("click", function(event){
        /* event.preventDefault(); */
        document.getElementById("madlib").className = "hidden";
        document.getElementById("myform").className = "showing";
    }); 

}());