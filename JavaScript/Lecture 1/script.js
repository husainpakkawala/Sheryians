// Variables in JavaScript

var name = "Husain"; //function Scope ,Reassign,redeclare.
let age = 22; //block Scope , Reassign , No Redeclare.
const country = "India"; //block Scope , No Reassign, No Redeclare.


// Console Methods in JavaScript

console.log("Hello World!"); // Prints messages
console.error("Something went wrong!"); //Displays an error message in red
console.warn("This is a warning!"); // Shows a warning message in yellow
console.info("Server started successfully!"); //Displays an informational message

let user = {
    name:"Husain",
    email:"hello@gmail.com",
    course:"Cohort 2.0"
};
console.table(user); // Display data in a table format-great for array and objects

console.group("User Info"); // Helps group multiple logs together.
console.log("Name:Husain");
console.log("Course:Cohort 2.0");
console.groupEnd();

console.time("LoopTime"); // Used to measure execution time of a block of code
for(let i = 0; i<100000; i++){}
console.timeEnd("LoopTime");

console.clear(); // Clears the console screen


// Strings in JavaScript (A strings is a sequence of characters wrapped in quotes)
let sport = "Cricket";
console.log(sport);

// Strings Methods

// slice() Extracts part of a string
let str = "JavaScript";
console.log(str.slice(0,4));

// Templates literals(using backticks ``) Makes string creation easier with variables
let food = "Pizza";
console.log(`Italian ${food} I Like Pizza.`);

// split() Splits a string into an array
let fruits = "apple,banana,grapes";
console.log(fruits.split(","));

// replace() Replaces a word or character
let sentence = "I Love HTML";
console.log(sentence.replace("HTML","JavaScript"));

// includes() Checks if a substring exists
let text = "Learning JavaScript is fun";
console.log(text.includes("fun"));


// Statements in JavaScript (A statement performs an action like declaring a variable or writing a loop)
let a = 10;
if(a>5){
    console.log("a is greater than 5");
}

//Expression in JavaScript(An expresssion produces a value) (Every expression is a part of statement but not every statement is an expression)
"Hello" + "World";





