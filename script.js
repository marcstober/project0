"use strict";

const CORPORATE_COLOR = "#ff0033"

const DEFAULT_COLOR = "blue"

const theData = []

let theWord = "hello"

// doesn't work
// theWord[2] = "x"

console.log(theWord)

// object literal syntax
const config = { // one = is "assignment operator"
    paragraphId: "my-paragraph",
    "color": DEFAULT_COLOR,
    "7 day": true
}

// CORPORATION_COLOR = "green"

function greetUser() {
    alert(getTextColor());
    theData.push("greetUser called")

    console.log(theData[0], theData["length"]);

}


function getTextColor() {
    let a = 1;
    let b = 2;
    console.log(a + b);

    return document.getElementById(config.paragraphId).style.color


}

function setTextColor(color) {
    document.getElementById(config.paragraphId).style.color = color
}

config.color = CORPORATE_COLOR;
setTextColor(config.color);

// regression testing

// affordance - UI term

alert(config["7 day"])

delete config["7 day"];

console.log(config)

const secondArray = Array.from({
    length: 10
})

console.log(secondArray);

alert(window)