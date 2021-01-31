(function(){
    "use strict";
    console.log("reading js");

    let myForm = document.querySelector("#myform");
    let madlib = document.querySelector("#madlib");
    let words = [];

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        let formData = document.querySelectorAll("input[type=text]");
        let emptyFields = 0;
        for (let eachWord of formData){
            if (eachWord.value){
                words.push(eachWord.value);
                eachWord.value = "";
            }
            else{
                emptyFields++;
            }
        }
        if (emptyFields > 0){
            madlib.innterHTML = "Please fill out the fields";
        }
        else{
            makeMadlib(words); 
        }
    });

    function makeMadlib(wordsArray){
        let myText = `Nice to meet you too! Please excuse my ${words[0]} I was nervous for the date.`;
        answer1.innerHTML = myText;

        let myText2 = `I like watching ${words[1]} ${words[2]} ${words[3]}.`;
        answer2.innerHTML = myText2;

        let myText3 = `I make my own ${words[4]}. Personally, I think it is ${words[5]}. Sorry I’ve been ${words[6]} a lot, how about you?`;
        answer3.innerHTML = myText3;

    }
    
    document.querySelector(".open").addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("madlib").className = "showing";
        document.getElementById("myform").className = "hidden";
    });

    document.querySelector(".close").addEventListener("click", function(event){
        event.preventDefault();
        document.getElementById("madlib").className = "hidden";
        document.getElementById("myform").className = "showing";
    });



}());