// Conditional Statements in JavaScript.

// 1. if statement (The if statement evaluates a condition inside parentheses. If the condition is true, the block of code inside the curly braces {} runs. If it’s false, it skips that block.)

//Syantax
if (condition) {
  // code runs if condition is true
}
//Example
let x = 20;

if(x % 2 == 0){
    console.log("Even");
}


// 2. if-else Statement (The if-else statement will perform some action for a specific condition.)

//Example
let age = 25;

if(age >= 18){    //Output Adult
    console.log("Adult");
}else{
    console.log("Not an Adult");
}


// 3. else if Statement (The else if statement in JavaScript allows handling multiple possible conditions and outputs, evaluating more than two options based on whether the conditions are true or false.)

//Example
const z = 0;

if(z > 0){       //Output Zero.
    console.log("Positive");
}else if (z < 0){
    console.log("Negative");
}else{
    console.log("Zero.")
}


// 4. Using Switch Statement (JavaScript Switch Case)(The switch statement is a control structure in JavaScript that allows you to execute different blocks of code based on the value of a single expression. It’s a cleaner, more readable alternative to multiple if...else if statements when you need to compare one variable against many possible values.)

//Example
let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}


//5. Using Ternary Operator ( ?: )(The ternary operator is a compact shorthand for an if...else statement. It is called “ternary” because it takes three operands:
// A condition to test.
// An expression to evaluate if the condition is true.
// An expression to evaluate if the condition is false.)

//Syantax

//condition ? expressionIfTrue : expressionIfFalse

//Example
let ages = 21;   //output you are eligible to vote.

const result = (age >= 18) ? "you are eligible to vote." : "you are not eligible to vote.";

console.log(result);


// 6. Nested if...else (A nested if...else statement is an if...else structure placed inside another if or else block. )

//Example
let marks = 85;

if (marks >= 90) {   //Output Grade: A
  console.log("Grade: A+");
} else {
  if (marks >= 75) {
    console.log("Grade: A");
  } else {
    if (marks >= 50) {
      console.log("Grade: B");
    } else {
      console.log("Grade: Fail");
    }
  }
}

//Recommended way
let markss = 85;

if(markss >= 90){
    console.log("Grade: A+");
}else if(markss >= 75){
    console.log("Grade: A");
}else if(markss >= 50){
    console.log("Grade: B");
}else{
    console.log("Grade: Fail");
}


// (Early Return Pattern Concept)

// (Question)Write a function getGrade(score) that:
// --> Takes a student's marks (0 to 100)
// --> Returns the grade based on this logic:
// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 Fail
// Anything else  Invalid maarks

function getGrade(score){
    if(score >= 90 && score <= 100) return "A+";
    if(score >= 80 && score <= 89) return "A";
    if(score >= 70 && score <= 79) return "B"; if(score >= 60 && score <= 69) return "C";
    if(score >= 33 && score <= 59) return "D";
    if(score >= 0 && score <= 32) return "FAIL";
    return "Invalid Marks";
}
console.log(getGrade(31));


//Rock - paper - scissors logic game
function rps(user,computer){
    if(user === computer) return "draw";

    if(user === "rock" && computer === "scissor") return "user";
    
    if(user === "scissor" && computer === "paper") return "user";
    
    if(user === "paper" && computer === "rock") return "user";

    return "computer";
}
console.log(rps("rock","paper"));



//Loops in JavaScript

// 1. For loop (The for loop repeats a block of code a specific number of times. It contains initialization, condition, and increment/decrement in one line.)

//Syntax
for (initialization; condition; increment/decrement)  {    
     // Code to execute
}

//Example
for(let i = 1; i<=3; i++){
    console.log(i);
}


// 2. while Loop (The while loop executes as long as the condition is true. It can be thought of as a repeating if statement. )

//Syntax
while (condition) {
    // Code to execute
}

//Example
let k = 0;
while(k < 3){
    console.log(i);
    k++;
}

// 3. do-while Loop (The do-while loop is similar to while loop except it executes the code block at least once before checking the condition.)

//syntax
do {
    // Code to execute
} while (condition);

//Example
let a = 0;
do{
    console.log(a);
    a++
}while(a < 3);



//Loops practice question Youtube Video

//Q1.print numbers from 1 to 10 using a for loop
for(let i = 1; i<=10; i++){
    console.log(i);
}

//Q2.print numbers from 10 to 1 using a while loop
for(let i = 10; i>0; i--){
    console.log(i);
}

let i = 10;
while(i>0){
    console.log(i);
    i--;
}

//Q3. Print even numbers from 1 to 20 using a for loop.
for(let i = 1; i<=20; i++ ){
    if(i % 2 === 0){
        console.log(i);
    }
}

//Q4. Print odd numbers from 1 to 15 using a while loop.
let j = 1;
while(j<=15){
    if(j % 2 === 1){
        console.log(i);
    }
    i++;
}

//Q5. Print the multiplication table of 5 (i.e, 5*1=5...5*10=50)
for(let i = 1; i<=10; i++){
    console.log(`5 * ${i} = ${5 * i}`);
}

//Q6. Find the sum of numbers from 1 to 100 using a loop.
let sum = 0;
for(let i = 1; i<=100; i++){
    sum = sum + i;
}
console.log(sum);

//Q7. Print all numbers between 1 to 50 that are divisible by 3
for(let i = 1; i<=50; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}

//Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd.
let val = prompt("Give a Number");

for(let i = 1; i<=val; i++){
    if(i % 2 === 0){
        console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
}

//Q9. Count how many numbers between 1 to 100 are divisible by both 3 and 5 
for(let i = 1; i<100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}



// break statement in JavaScript (The break statement is used to exit a loop when a certain condition is satisfied. It is commonly used when searching for a specific value in an array or when an early exit from a loop is required.)

//Using break in a for loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at", i);
        break;
    }
    console.log(i);
}

//Using break in a while Loop
let n = 1;
while (n <= 10) {
    if (n === 6) {
        console.log("Loop stopped at", n);
        break;
    }
    console.log(n);
    n++;
}



// Continue statement in JavaScript (The continue statement skips the current iteration of the loop and moves to the next iteration without terminating the loop.)

//Using continue in a for Loop
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skips even numbers
    }
    console.log(i);
}

//Using continue in a while Loop
let b = 0;
while (b < 10) {
    b++;
    if (b % 3 === 0) {
        continue; // Skips multiples of 3
    }
    console.log(b);
}


//break and continue concept question

//Q1. Stop at first multiple of 7
//Write a loop from 1 to 100 that:
//--> print each number
//--> stops completely when it finds the first number divisible by 7

for(let i = 1; i<=100; i++){
    console.log(i);
    if(i % 7 === 0){
        break;
    }
}

//Q2. Skip multiples of 3 
// Write a loop from 1 to 20 that:
//--> Skips numbers divisible by 3
//--> Prints all other and use continue

for(let i = 1; i<=20; i++){
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
}

//Q3. Print first 5 odd numbers only
// Write a loop from 1 to 100 that:
//--> Prints only 5 odd numbers
//--> Then stops the loop 
// Use both if,continue,and a counter + break

let count = 0;
for(let i = 1; i<=100; i++){
    if(i % 2 === 1){
        count++;
        console.log(i);
    }
    if(count === 5) break;
}



// Labels in JavaScript (Labels in JavaScript provide a way to name a loop, which can then be referenced using break or continue. This is useful when dealing with nested loops, where break or continue needs to be applied to a specific loop.)
//Use labels to control nested loops effectively.

//Syntax
// LabelName: 
//     statement;


// Using break with Labels
outerLoop:
for (let i = 0; i < 3; i++) {    //output 0 0
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            break outerLoop; // Exits both loops
        }
        console.log(i, j);
    }
}

// Using continue with Labels
outerLoop:
for (let i = 0; i < 3; i++) {     //output 0 0 ,1 0, 2 0
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            continue outerLoop; // Skips to the next iteration of the outer loop
        }
        console.log(i, j);
    }
}

