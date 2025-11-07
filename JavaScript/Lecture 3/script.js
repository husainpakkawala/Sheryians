// JavaScript Operators.

//Arithmetic operators(Used to perform mathematical operations)

a = 5 + 2; //addition (output 7)
a = 5 - 2; //subtraction (output 3)
a = 5 * 2; //multiplication (output 10)
a = 10 / 2; //division (output 5)
a = 5 % 2; //modulus(remainder) (output 1)
a = 2 ** 3 //exponentiation(power) (output 8)


//Assignment operators(Used to assign values to variables)

x = 10; //assign 10 to x (output 10)
x += 5; // add and assign (output x = x+5)
x -= 5; // subtract and assign (output x = x-5)
x *= 5; // multiply and assign (output x = x*5)
x /= 5; // divide and assign (output x = x/5)
x %= 5; // modulus and assign (output x = x%5)


//Comparison operators(used to compare two values and return a boolean)

5 == '5' //equal to (not recommended to use)(output true)
5 === '5' //strict equal (output false)
5 != 6 //not equal (not recommended to use)(output true)
5 !== '5' //strict not equal (output true)
6 > 5 //greater than (output true)
5 < 6 //less than (output true)
5 >= 5 //greater or equal (output true)
4 <= 5 // less or equal (output true)


//Logical operators(Used to combine conditional statement)

(5 > 3 && 6 > 4) //AND (Output true)
(3 > 5 && 6 > 4) //AND (Output false)
(5 > 3 && 4 > 6) //AND (Output false)
(3 > 5 && 4 > 6) //AND (Output false)

(5 > 3 || 6 > 4) //OR (Output true)
(3 > 5 || 6 > 4) //OR (Output true)
(5 > 3 || 4 > 6) //OR (Output true)
(3 > 5 || 4 > 6) //OR (Output false)

!(5>3) // NOT (output false)
!(3>5) // NOT (output true)


//Ternary operators (A shorthand for 'if...else')

//condition ? doThis : doThat;
let age = 20;
let message = age >= 18 ? "Adult" : "Minor"; 


//Type Checking operators(used to check the data types or object types)

// typeof (return the data types and it will always give us the output in strings)
typeof "hello" //(output string)
typeof null //output object which is wrong it's a bug
typeof Array //output object which is also wrong
typeof NaN //output number which is also wrong 

//instanceof(checks object type)

// (Very Imp)instanceof always work with reference value not primitive value

[2,5]instanceof Array //output true


//String Operator(Only one `+` is used for concatenation)

let name = "Husain";
let greet = "Hello" + "name";
console.log(greet);  //output Hello Husain


//Spread/Rest operators (Very important in modern JS)

//spread
let arr = [1,2,3];
let copy = [...arr];
console.log(copy); //output [1,2,3]

//rest
function sum(...numbers){
    return numbers.reduce((a,b) => a + b);
}
console.log(sum(1,2,3)); //output 6


//Nullish Coalescing operators(provides a fallback **only** for `null` or `undefined`)

let username = null;
let displayName = username ?? "Guest";
console.log(displayName); //output Guest


//Optional Chaining(Safely access nested properties without throwing an error)

let user = {profile:{name:"Husain"}};
console.log(user?.profile?.name); //Husain
console.log(user?.address.city); //undefined (no error)


//Hoisting in JavaScript(Hoisting is JavaScript behaviour of moving variable and function declarations to the top of their scope before code execution)

//variable hoisting
console.log(a); //undefined
var a = 10;
//the declaration `var a` is hoisted,but not  initialization

//`let` and `const` are not hoisted the same way
console.log(x); //ReferenceError 
let x = 5;

//function hoisting
sayHello();//works
function sayHello(){
    console.log("Hello!");
}
//function declarations are fully hoisted,meaning you can call them before they are defined.


//Temporal Dead Zone(TDZ)(The temporal dead zone is the period between the start of a scope and the actual declaration of a `let` or `const` variable)
//Any attempt to access the variable before declaration result in a ReferenceError

console.log(mess); //ReferenceError
let mess = "Hello TDZ!";
//the variables `message` is hoisted but remains uninitialized until `let` statement executes during this time,it exists in the TDZ.