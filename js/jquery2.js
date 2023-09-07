"use strict";

$(function() {

    console.log("Hello Test");

    let secretPwKeyCode = "38384040373937396665";
    let inputStrKeyCode = "";

    let secretPwCharacters = "color";
    let inputStrCharacters = "";

    $("body").on("keydown", (e) => {
        console.log("event object property 'originalEvent':");
        console.log(e.originalEvent);
        console.log("keycode: " + e.originalEvent.keyCode);
        console.log("key: " + e.originalEvent.key);

        inputStrKeyCode += e.originalEvent.keyCode;

        inputStrCharacters += e.originalEvent.key;

        if(inputStrKeyCode === secretPwKeyCode){
            alert("You have added 30 lives!");
            inputStrKeyCode = "";
            inputStrCharacters = "";
        }

        if(inputStrCharacters === secretPwCharacters){
            $("body").css("background-color", "blue");
            inputStrKeyCode = "";
            inputStrCharacters = "";
        }

        $("#currentTypingStr").text(inputStrCharacters)
        $("#currentTypingCode").text(inputStrKeyCode);


        })

    $("#refresh").on("click", () => {
        location.reload();
    })


})