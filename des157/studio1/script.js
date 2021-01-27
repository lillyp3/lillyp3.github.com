(function(){
    "use strict";

    var myForm = document.querySelector("#myform");

    myForm.addEventListener("submit", function(event){
        event.preventDefault();
        var noun1 = document.querySelector("#noun1").value;
        var noun2 = document.querySelector("#noun2").value;
    });
}());