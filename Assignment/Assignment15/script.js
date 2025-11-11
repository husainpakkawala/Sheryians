//Level 1 – Pure Beginner Practice

// 1. print numbers from 1 to 10 
// loop from 1 to 10 and print each numbers

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }


// 2. print only even numbers from 1 to 20 use loop and conditions to print even ones . 

// for(let i = 1; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


// 3. print numbers from 10 to 1 reverse loop with a decrement .

// for(let i = 10; i>=1; i--){
//     console.log(i);
// }


// 4. print the word "yes" 5 times repeat using a loop

// for(let i = 1; i<=5; i++){
//     console.log("yes")
// }


// 5. print whether numbers from 1 to 10 are even or odd for each number check:"even", else -> "odd"

// for(let i = 1 ; i<=10; i++){
//     if(i % 2 === 0){
//         console.log(`${i} - Even`);
//     }else{
//         console.log(`${i} - ODD`);
//     }
// }


// *6*. Ask user for a number and say if its positive or negative use prompt() and a condition

// let num = prompt("Type a Numbers");
// num = parseInt(num);  //way 1 to convert prompt string into prompt number
// console.log(typeof num);

// let num = +prompt("Number bataao");
// if(num >= 0){
//     console.log("Positive Numbers");
// }else{
//     console.log("Negative Number");
// }


// *7*. Ask user’s age and check if eligible to vote If age >= 18 → “Eligible”, else → “Not eligible”

// let age = prompt("Age batoa");
// if(age === null){
//     console.error("You Cancelled it");
// }else{
//     if (age.trim() === ""){
//         console.error("Bhai dhang se likhle..");
//     }else{
//         age = Number(age.trim());
//         if(isNaN(age)){
//             console.error("Bhai please number dede..");
//         }else{
//             console.log("Confirm ye number hai..")
//         }
//     }
// }  

//optimized one
let ages = prmpt("Age batoa");

if(ages === null) return console.error("You Cancelled it");
ages = ages.trim();
if(!ages) return console.error("bhai dhang se likhle...");
const num = Number(ages);
if(isNaN(ages)) return console.error("bhai plese number dede...");
console.log("confirm ye number hai"); 

// 8. Print multiplication table of 5 Use loop to print 5 × 1 to 5 × 10.

// 9. Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally.

// 10. Ask user for password and print access status Hardcoded correct password. Compare with user input.


