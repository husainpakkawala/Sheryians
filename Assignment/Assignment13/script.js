//Introduction to JavaScript

//1. Open any website → right-click → Inspect → Console → type: document.title
// document.title;

//2. Try: alert(“Hello from Sheryians!”)
// alert("Hello from Sheryians");

//3. Write one line in your own words: “If HTML is skeleton, CSS is clothes — what is JS?”
// prompt('If HTML is skeleton, CSS is clothes — what is JS?');

//4. Write one example of where you’ve seen JS being used (like popup,animation, etc.)
// In Every website for popup like alert or prompt.


//Linking JavaScript Files

// 1. Create an HTML file and link JS file
// Linked the files using script.js in html file

// 2. In app.js, write: console.log(“Connected!”)
// console.log("Connected")

// 3. Move the script tag to the section and see what happens.
// from my observation nothing happen.


//Running JS in Browser Console

// 1. Open console and type: 2 + 2
// 2. Type: alert(“Hi”)
// 3. Try: prompt(“Your name?”)
// 4. Type: let city = “Bhopal”; city


//Variables and Keywords (var, let, const)

// 1. Declare your name using all three: var a= “Harsh”; let b = “Sheryians”; const c= “School”
// var a = "Husain";
// let b = "Sheryians";
// const c = "School";
// console.log(a,b,c);

//2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
// a = "Updated";
// console.log(a);
// b = "Updated";
// console.log(b);
// c = "Updated";
// console.log(c); //not possible with const it will show error

//3. Create a variable inside curly braces using let and log it outside.
//4. Predict output before running
// {
//     let nam = "Husain Pakkawala";
// }
// console.log(nam); //not possible because we can't use log outside the curlt braces when we use const


//Logging and Interaction (console, alert, prompt)

//1. Log name, age, and city using console.log, console.info, console.warn
// console.log("Husain");
// console.info("22");
// console.warn("Dahod");
// console.error("Wrong city");

//2. Use prompt to take user’s name → alert a welcome message.
// let a = prompt("Enter your name");
// alert(`Welcome ${a}`);

//3. Log typeof of user’s input.
// let username = prompt("Name Please") ;
// console.log(typeof username); //whatever you will give to prompt it will convert the output in string.
// let age = prompt("age batao");
// Number(age);

//4. Try: let age = prompt(“Enter age:”); console.log(age + 5); observe what happens.
// let age = prompt("Enter age:");
// console.log(age + 5);//225
// console.log(Number(age) + 5);//27


//Working with Strings

//1. let msg = “I love Sheryians”;
// let msg = "I Love Sheryians";
// console.log(msg);

//2. Try msg.slice(2, 6) and predict the result.
// msg.slice(2,6);

//3. Try msg.split(” “) and count words.
// msg.split("");

//4. Try msg.replace(“love”, “study at”)
// msg.replace("Love","Study at");

//5. Check if msg.includes(“love”)
// msg.includes("Love");

//6. Template string example: let name = “Harsh”; console.log(Hey ${name},welcome to JS!)
// let username = "Husain";
// console.log(`Hey ${username},welcome to JS!`)


//Expressions vs Statements

//1. Type 5 + 10 = 15(expression).

//2. Type let x = 10; (statement).

//3. Which one gives a value immediately?
//expression one.

//4. Try: let y = (5 + 10) * 2; console.log(y)
// let k = (5+10)*2;
// console.log(y);


//Data Types

// let age = 25; 
// typeof age; //number

// let name = "Harsh"; 
// typeof name; //string

// let isStudent = true;
// typeof isStudent; //boolean

// let skills = ["JS","HTML"]; 
// typeof skills; //object

// let user = { city: "Bhopal" };
// typeof user; //object

// let x = null; 
// typeof x; //object

// let y;
// typeof y; //undefined

// let z = Symbol("id")
// typeof z; //symbol

//4. Try adding a number and string together.
// "husain" + 23;//husain23


//Special Values

// Log 1 / 0(Infinity),
// log 0 / 0(Nan), 
// Number(“abc”)(Nan),
// undefined + 1(Nan)

//Primitive vs Reference

//1. let x = 5; let y = x; y = 10; console.log(x, y)
// let x = 5;
// let y = x;
// y=10;
// console.log(x,y);

//2. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”;console.log(obj1.name)
// let obj1 = { name: "Husain"}; 
// let obj2 = obj1;
// obj2.name = "Sheryians";
// console.log(obj1.name)
