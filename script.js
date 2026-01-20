"use strict";

const CORPORATE_COLOR = "#ff0033"

const DEFAULT_COLOR = "blue"

const theData = []

let theWord = "hello"

// doesn't work
// theWord[2] = "x"

console.log(theWord)

class Animal {
    constructor(name) {
        this.earOptions = []
    }

    setEars(ears) {
        // guard
        if (!this.earOptions.includes(ears)) {
            console.warn(`"${ears}" is not a valid type of ears for this animal.`);
            return;
        }

        this.ears = ears;
    }
}

class Dog { // "class" (actually constructor function)
    constructor(name) {
        this.earOptions = ["floppy", "pointy"];

        this.name = name;
        this.sound = "woof";
        // this.ears = ;
        this.hasTail = true;
        this.breed = "mutt";
    }
}
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

function Elephant(name) {
    this.earOptions = ["floppy"];

    this.name = name;
    this.sound = "elephant sound";
    this.hasTail = true;
}
Object.setPrototypeOf(Elephant.prototype, Animal.prototype);

const fido = new Dog("fido");
fido.setEars("pointy");

const dumbo = new Elephant("dumbo");
dumbo.setEars("floppy");

const violet = {
    sound: "meow",
    ears: "pointy",
    hasTail: "true",
    canGoOutside: false
}


// object literal syntax
const config = { // one = is "assignment operator"
    paragraphId: "my-paragraph",
    color: DEFAULT_COLOR,
}
config.status = "good"

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


delete config["7 day"];

console.log(config)

const secondArray = Array.from({
    length: 10
})

console.log(secondArray);

function setEarTypes(animal, ...types) {
    console.log(`Types fop ${animal}`)
    console.log(types)
}