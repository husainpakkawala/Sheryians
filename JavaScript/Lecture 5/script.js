//Function in JavaScript(Functions are blocks of reusable logic.)


//Function Declarations in JavaScript(You define it once, then call it whenever needed.)

function greet(){
  console.log("Welcome to Sheryians!");
}
greet();


//Parameter vs Arguments

function greet (name){ //name is a parameter
  console.log("Hello " + name);
}
greet("Husain")  //husain is argument


//Return values(return sends back a result to wherever the function was called and After return , function exits)

function sum (a,b){
  return a + b;
}
let total = sum(5,10);


//Function Expressions in JavaScript(Functions stored in variables)
//Cannot be hoisted (you can’t call them before they’re defined))

let greet = function(){
  console.log("Hello");
}


//Fat Arrow functions (Cleaner syntax No own this , no arguments object)

let greet = () => {
    console.log("Hi");
};


//Default + Rest

function multiply(a = 1,b = 1){ //Default
      return a * b;
}

function sum(...nums){
  return nums;
}


//First Class Function. (JavaScript treats functions as values:)

let greet = function(){  //Assign to variables
  console.log("hello");
}

function abcd(val){     //pass as a argument
       val();
}
abcd(function(){
     console.log("hey");
})

function outer(){      //return a function  from another function.
  return function(){
    console.log("Inside returned function!");
  };
}
let inner = outer();
inner();


//Higher-Order Functions (HOF)(Functions that accept other functions or return functions.)

function greet(val){ //accepting other function in the parameter and this function become HOF

}
greet(function(){

})

function abcd(){  //returning other function
  return function(){
    console.log("heyeee")
  }
}
abcd()();


//Closure ("Outer function maa data hase, inner function e data ne yaad rakhse ane print kari shake. Outer function pachi khatam thai jai to pan inner function data aapi shake.")

function biscuitJar() {
    let biscuits = 5;

    return function takeBiscuit() {
        biscuits--;
        console.log("Biscuits left:", biscuits);
    };
}

let jar = biscuitJar();

jar(); // 4
jar(); // 3
jar(); // 2


//IIFE – Immediately Invoked Function Expression (Used to create private scope instantly.)

(function(){
    console.log("runs immediately")
})();


//Hoisting: Declarations vs Expressions (Declarations are hoisted ,Expressions are not)

hello(); // works  (variable hoisting)
function hello() {
console.log("Hi");
}

greet(); // error   (Expression hoisting)
const greet = function () {
console.log("Hi");
};





























//first class function aa hoi che ke jai maa bi value pass thai sake che aa ma apne function pass kari sakye che

//higher order function bi ek function che je yaato apna parameter maa function accept kare yaa function return kare

//closure:- ek aavo function je return kare function ane je function return thayo che aa ma parent function to variable use thavo joiye.

//lexical scoping : suppose karo ke ek function anee tame aa function maa ek variable banavo che ane aane value assign kari che to tame aa che function no scope che aana andaraj variable no use kari sako cho

//return hamesha function ke andar se hoga

function abcd(val) {
  val();
}
abcd(function () {
  console.log("heyy");
});



function val(){

}