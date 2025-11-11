//Level 1 – Pure Beginner Practice

// 1. print numbers from 1 to 10 
// loop from 1 to 10 and print each numbers

for(let i = 1; i<=10; i++){
    console.log(i);
}


// 2. print only even numbers from 1 to 20 use loop and conditions to print even ones . 

for(let i = 1; i<=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}


// 3. print numbers from 10 to 1 reverse loop with a decrement .

for(let i = 10; i>=1; i--){
    console.log(i);
}


// 4. print the word "yes" 5 times repeat using a loop

for(let i = 1; i<=5; i++){
    console.log("yes")
}


// 5. print whether numbers from 1 to 10 are even or odd for each number check:"even", else -> "odd"

for(let i = 1 ; i<=10; i++){
    if(i % 2 === 0){
        console.log(`${i} - Even`);
    }else{
        console.log(`${i} - ODD`);
    }
}


// *6*. Ask user for a number and say if its positive or negative use prompt() and a condition

// let num = prompt("Type a Numbers");
// num = parseInt(num);  //way 1 to convert prompt string into prompt number
// console.log(typeof num);

let num = +prompt("Number bataao");
if(num >= 0){
    console.log("Positive Numbers");
}else{
    console.log("Negative Number");
}


// *7*. Ask user’s age and check if eligible to vote If age >= 18 → “Eligible”, else → “Not eligible”

let age = prompt("Enter you age..");

if(age === null){
    console.error("You Canceled It..");
}else if(age.trim() === ""){
    console.error("Bhai dhang se likhle..");
}else if(isNaN(age.trim())){
    console.error("Bhai number dede..");
}else{
    age = Number(age.trim());

    if(age < 0){
        console.error("Amaanya Age");
    }else if(age > 100){
        console.error("Bhai itni lambi umar koi nahi jeeta 😅");
    }else if(age >= 18){
        console.log("You Can Vote..");
    }else{
        console.log("You Can't Vote..");
    }
}


// 8. Print multiplication table of 5 Use loop to print 5 × 1 to 5 × 10.

for(let i = 1; i<=10; i++){
    console.log(`5 x ${i} = ${5 * i}`);
}


// 9. Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally.

let count = 0;
for (let i = 1; i<=15; i++){
    if(i>8){
        count++;
        console.log(i);
    }
}
console.log(`Total count is ${count}`);


// 10. Ask user for password and print access status Hardcoded correct password. Compare with user input.

let password = "husain";
let userpassword = prompt("Type Password");

if(userpassword === null){
    console.error("You Cancelled It");
}else if(userpassword.trim() === ""){
    console.error("Please type password..");
}else{
    if(userpassword.trim() === password){
        console.log("Access Granted..");
    }else{
        console.log("Access Denied..");
    }
}


// Level 2 – Slightly Tougher but Logical


// *11*. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”

let attempts = 0;
let mypassword = "husain";

let userpass = prompt("Type your password");
attempts++;

while(attempts < 3 && mypassword !== userpass){
    userpass = prompt("Type your correct password");
    attempts++;
}
if(attempts === 3 && mypassword !== userpass){
    console.error("Account Locked..")
}else{
    console.log("Account Opened..");
}


// 12. Ask user for words until they type “stop”. Count how many times they typed
// “yes” Loop until "stop" is typed. Count "yes".

let word = prompt("Word bolo");
let counter1 = 0;

while(word !== "stop"){
    if(word === "yes") counter1 ++;
    word = prompt("Word bolo..")
}
console.log(`Total times yes count is : ${counter1}`);


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

for(let i = 1; i<=50; i++){
    if(i % 7 === 0){
        console.log(i);
    }
}


// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

let sum = 0;

for(let i = 1; i<=30; i++){
    if(i % 2 === 1){
        sum = sum + i;
    }
}
console.log(sum);


// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

let num1 = prompt("Number bolo");
num1 = Number(num1);

while(num1 % 2 !== 0){
    num1 = prompt("Number bolo");
    num1 = Number(num1);
}


// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

let start = +prompt("Enter start number");
let end = +prompt("Enter end number");

if(start > end){
    console.error("Start can not be bigger than end..")
}
for(let i = start; i<=end; i++){
    console.log(i);
}


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.

let counter2 = 0;

for(let i = 1; i<=20; i++){
    if(counter2 === 3){
        break;
    }
    if(i % 2 === 1){
        console.log(i);
        counter2++;
    }
}


// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

let counter3 = 0;

for(let i = 1; i<=5; i++){
    let num = +prompt("Number do");
    if(num >= 0){
        counter3++;
    }
}
console.log(counter3);


// 19. ATM Simulator – Allow 3 withdrawals
// Start with 1000 balance. Ask withdrawal amount 3 times. ₹
// If enough balance → deduct
// Else → print “Insufficient balance

let balance = 1000;
let flag = false;
let counter = 0;

while(balance > 0 && counter != 3){
    let withdrawal = +prompt("Kitna paisa withdraw karana hai..")
    counter++;

    if(withdrawal <= balance){
        balance -= withdrawal;
    }else{
        flag = true;
        break;
    }
}
if(flag === true){
    console.log("Insufficient Balance");
}else{
    console.log(`Remaining Balance : ${balance}`);
}

