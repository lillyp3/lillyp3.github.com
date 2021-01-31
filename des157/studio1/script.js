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
        let myText = `Here are the words: ${words[0]}, ${words[1]}, ${words[2]}, ${words[3]}, and ${words[4]}, ${words[5]} ${words[6]}`;
        madlib.innerHTML = myText;
    }
}());