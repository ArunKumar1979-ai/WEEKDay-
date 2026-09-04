//Classroom Assignment: Odd or Even
function isOddOrEven(num) {
    let result;

    if (num % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    return result;
}

// Call the function and print the result
let number = 10;
console.log(isOddOrEven(number));

//Classroom Assignment: Number Type

function numberType(num) {
    let result;

    if (num > 0) {
        result = "Positive";
    } else if (num < 0) {
        result = "Negative";
    } else {
        result = "Zero";
    }

    return result;
}

// Declare and initialize the variable
let number2 = 0;

// Call the function and print the result
console.log(numberType(number2));

// another way

function numberTypeone() {
    let num=7;

    if (num > 0) {
        result = "Positive";
    } else if (num < 0) {
        result = "Negative";
    } else {
        result = "Zero";
    }

   console.log(numberType(num));
}
numberTypeone();

//Classroom Assignment: var vs let vs const Learning 

const browserName = "Chrome";

function getBrowserName() {

    if (browserName === "Chrome") {
        let browserName = "Firefox";
    }

    console.log(browserName);
}

getBrowserName();

//Classroom Assignment: Conditional Statements

function launchBrowser(browserName) {

    if (browserName === "chrome") {
        console.log("Launching Chrome browser");
    } else {
        console.log("Launching other browser");
    }
}

function runTests(testType) {

    switch (testType) {
        case "smoke":
            console.log("Running Sanity Test");
            break;

        case "sanity":
            console.log("Running Smoke Test");
            break;

        case "regression":
            console.log("Running Regression Test");
            break;

        default:
            console.log("Running Smoke Test");
            break;
    }
}

launchBrowser("chrome");
runTests("smoke");

//Classroom Assignment: Grade Calculation

function calculateGrade(score) {

    switch (true) {
        case score >= 90:
            return "A";

        case score >= 80:
            return "B";

        case score >= 70:
            return "C";

        case score >= 60:
            return "D";

        default:
            return "F";
    }
}

let score = 85;

let grade = calculateGrade(score);

console.log(grade);