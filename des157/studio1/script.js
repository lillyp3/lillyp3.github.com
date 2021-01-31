(function(){
    "use strict";
    console.log("reading js");

    let myForm = document.querySelector("#myform");
    let madlib = document.querySelector("#madlib");

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        let noun1 = document.querySelector("#noun1").value;
        let noun2 = document.querySelector("#noun2").value;
        let adj = document.querySelector("#adj").value;
        let verb = document.querySelector("#verb").value;
        let verb2 = document.querySelector("#verb2").value;

/*         if (noun1 && noun2 && adj && verb){ //add with each now input
            let myText = `Here are the words: ${noun1}, ${noun2}, ${adj}, and ${verb}`;
        }
        else{
            let myText = "Please fill out all the boxes";
        } */

        let myText = `Here are the words: ${noun1}, ${noun2}, ${adj}, ${verb}, and ${verb2}`;
        madlib.innerHTML = myText;
        
    });
}());