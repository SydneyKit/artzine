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
        if (inputText.toLowerCase() == "Ava")  {
            location.href = "ava.html";
        } 
        else if (inputText.toLowerCase() == "Ava Fridd") {
            location.href = "ava.html";} 
        else if (inputText.toLowerCase() == "Cynthia") {
            location.href = "cynthia.html";} 
        else if (inputText.toLowerCase() == "Cynthia Groves") {
        location.href = "cynthia.html";} 
        else if (inputText.toLowerCase() == "Wind") {
            location.href = "wind.html";} 
        else if (inputText.toLowerCase() == "Qifeng") {
            location.href = "wind.html";} 
        else if (inputText.toLowerCase() == "Qifeng Du") {
        location.href = "wind.html";} 
        else if (inputText.toLowerCase() == "Wind Du") {
            location.href = "wind.html";} 
        else if (inputText.toLowerCase() == "Sydney") {
            location.href = "sydney.html";} 
        else if (inputText.toLowerCase() == "Sydney Kit") {
        location.href = "Sydney.html";} 
    }
});