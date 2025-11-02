// Data Types in JavaScript

// Primitive data types

// Numbers data types
let n1 = 2;  // 1. Integers
console.log(n1);

let n2 = 1.3;  //2. Floating point number
console.log(n2);

let n3 = Infinity; //3. infinity
console.log(n3);

let n4 = 'something here too'/2;
console.log(n4);

// String data types
let s1 = "Hello There"; //double quotes
console.log(s1);

let s2 = 'single quotes work fine'; //single quotes
console.log(s2);

let s3 = `can embed ${s1}` //backtick quotes
console.log(s3);

// Boolean data types
let b1 = true;   //true
console.log(b1);

let b2 = false;  //false
console.log(b2);  

// Null data types
let age = null;   //empty
console.log(age);

// Undefined data types
let a;
console.log(a);

// Symbol data types 
// (Symbols, introduced in ES6, are unique and immutable primitive values used as identifiers for object properties. They help create unique keys in objects, preventing conflicts with other properties.)
//A Symbol is Never Equal to Another One : Symbol is a unique and immutable data type often used for creating private properties and methods. Symbols are never equal to any other Symbol.
let h1 = Symbol("Husain");
let h2 = Symbol("Husain");
console.log(s1 == s2);

// BigInt data types
let b = BigInt("00000000000000111111114432");
console.log(b);


// Non-Primitive/Refrence Data Types

// Object data type
let sheryians = {
    type:"Company",
    location:"Bhopal"
}
console.log(sheryians.type)

// Arrays data types
let a1 = [1,2,3,4,5];
console.log(a1);

let a2 = [1,"two",{name:"object"},[3,4,5]];
console.log(a2);

// Function data types (A function in JavaScript is a block of reusable code designed to perform a specific task when called.)
function greet(name){
    return "Hello,"+ name + "!"
};
console.log(greet("Husain"));

// Date object(The Date object in JavaScript is used to work with dates and times, allowing for date creation, manipulation, and formatting.)
let currentDate = new Date();
console.log(currentDate);


// Dynamically Typed : JavaScript Variables are not bound to a specific data type. Mainly data type is stored with value (not with variable name) and is decided & checked at run time.
let x = 42;
console.log(x)

x = "Hello"
console.log(x);

x = [1,2,3]
console.log(x);

// NaN is not equal to itself: NaN Stands for “Not-a-Number”, It is used to represent a computational error. NaN is technically of type number.
console.log(typeof NaN);
console.log(NaN === NaN);






