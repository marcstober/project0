"use strict";

const CORPORATE_COLOR = "#ff0033"

const DEFAULT_COLOR = "blue"

const theData = []

let logDiv = document.getElementById("the-log");


// object literal syntax
// let student = {
//     // properties
//     name: "jo",
//     major: "game design",

//     // method
//     goToClass: function () {
//         console.log(`on my way to ${this.major}!`);
//     }
// }

class Person {
    constructor(name) {
        // notice the pattern: parameter and bound property with same name
        // (not required, but can be a useful convention)
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, major) {
        super(name);
        this.major = major || "game design"; // JS idiom to set a default value
    }

    // this exact same code is shared by all instances
    goToClass() {
        console.log(`${this.name} says: on my way to ${this.major}!`);
    }
}

class TeacherError extends Error {

}

class Teacher extends Person {
    constructor(name, department, hasDegree) {
        super(name);
        this.department = department;

        if (!hasDegree) {
            throw new TeacherError("teacher must have a degree!");
        }

        // this.dfaoi();
    }

    goToClass() {
        if (!this.name) {
            return;
        }

        console.log(`Prof. ${this.name} says: I teach ${this.department}`)

        let theFn = () => { console.log("  I'm an arrow function!", this.name); }

        callAFn(theFn);

        function tradFn() {
            console.log("  I'm a traditional function", this.name);
        }

        // callAFn(tradFn);
        callAFn(tradFn.bind(this));
    }
}

// use the keyword "new" to create and **instance** of the class
let student = new Student("jo"); // notice the pattern

let otherStudent = new Student("sam", "biology");

function callAFn(fn) {
    console.log("Calling a function...");
    fn();
    console.log("Function was called!");
}


try {
    let prof = new Teacher("bob", "DGM", true);




    let everyone = [student, otherStudent, prof]

    for (let person of everyone) {
        person.goToClass(); // polymorphism
    }

    function StaffMember(name) {
        this.name = name;
    }
    //StaffMember.prototype = 
    //StaffMember.setProtoTyp   eOf()

    let advisor = new StaffMember("kerri");
    console.log(advisor.name);

    console.log(Teacher.prototype);

    // let x = Teacher("jim") // can't do this, but it's an error about needing "new"

    // method gets detached
    function callGoToClass(goToClassMethod) {
        goToClassMethod();
    }


    console.log("Running second bind example:");
    // doesn't work - TODO
    // callGoToClass(prof.goToClass);
    callGoToClass(prof.goToClass.bind(prof));




    // console.log(window);
    console.log(document);

    let newDiv = document.createElement("div");
    newDiv.innerText = "hello"
    console.log(newDiv);

    let myP = document.getElementById("my-paragraph");
    console.log(myP.innerHTML);

    let translateds = document.getElementsByClassName("translated-text")
    for (let el of translateds) {
        if (el.innerText.indexOf("Welcome") >= 0) { // TODO: fix this!
            el.innerText = "Bienvenue"
        }
        console.log(el);
    }

    let t = document.querySelector("p.translated-text");
    console.log("t=", t);

    let b = document.querySelector("body").appendChild(newDiv);
    newDiv.style.backgroundColor = "grey";
    console.log(newDiv.tagName);

    newDiv.addEventListener("click", (evt) => {
        console.log("You clicked", evt.target);
    })



    let tgtcb = document.getElementById("teacher-to-class-button");

    setTimeout(function () {
        tgtcb.textContent = "Make the teacher go to class!!!"
    }, 10000);

    tgtcb.addEventListener("click", function (evt) {
        console.error(`Clicked the button to send ${prof.name} to class!`);
        prof.goToClass();

        let result = addToLog("you clicked the button!")
    });
}
catch (ex) {
    if (ex instanceof TeacherError) {
        alert("Teacher Error! Please contact the HR department to ensure teacher is properly hired for this semester. " + ex.toString());

    }
    else {
        throw ex;
    }
}
finally {
    addToLog("finally")
}


function addToLog(message) {
    let logEntry = document.createElement("p")
    logEntry.textContent = message;
    logDiv.appendChild(logEntry)
}

function divide(a, b) {
    // guard clause
    if (b === 0) {
        return -1; // return an error
    } else if (a > 99999) {
        return -2;
    }

    alert(a / b);
    return 0;
}



let divideButton = document.getElementById("divide-button");
divideButton.addEventListener("click", function () {
    let isError = divide(565464646546546546545646, 98899999999);
    // if (isError) {
    //     alert("Unable to divide!")
    //     if (isError === -2) {
    //         alert("Number too large!")
    //     }
    // }
})
