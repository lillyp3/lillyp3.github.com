(function(){
    "use strict";

    var myForm = document.querySelector("#myform");
    var madlib = document.querySelector("#madlib");

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        var noun1 = document.querySelector("#noun1").value;
        var noun2 = document.querySelector("#noun2").value;
        var adj = document.querySelector("#adj").value;
        var verb = document.querySelector("#verb").value;

        if (noun1 && noun2 && adj && verb){ //add with each now input
            var myText = `Here are the words: ${noun1}, ${noun2}, ${adj}, and ${verb}`;
        }
        else{
            var myText = "Please fill out all the boxes";
        }

        madlib.innerHTML = myText;
        
    });
}());