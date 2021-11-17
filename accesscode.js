$(document).ready(function() {
    $("input[placeholder]").each(function () {
        $(this).attr('size', $(this).attr('placeholder').length);
    });

    var input = document.getElementById('in');
    input.focus();

    // Working with input text
    input.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            // Enter key is pressed
            checkInput(e);
        }
    });

    function checkInput(e) {
        var inputText = e.target.value;
        if (inputText.toLowerCase() == "ava")  {
            location.href = "ava.html";
        } 
        else if (inputText.toLowerCase() == "ava fridd") {
            location.href = "ava.html";} 
        else if (inputText.toLowerCase() == "cynthia") {
            location.href = "cynthia.html";} 
        else if (inputText.toLowerCase() == "cynthia groves") {
        location.href = "cynthia.html";} 
        else if (inputText.toLowerCase() == "wind") {
            location.href = "wind.html";} 
        else if (inputText.toLowerCase() == "qifeng") {
            location.href = "wind.html";} 
        else if (inputText.toLowerCase() == "qifeng du") {
        location.href = "wind.html";} 
        else if (inputText.toLowerCase() == "wind du") {
            location.href = "wind.html";} 
        else if (inputText.toLowerCase() == "sydney") {
            location.href = "sydney.html";} 
        else if (inputText.toLowerCase() == "sydney kit") {
        location.href = "sydney.html";} 
    }
});