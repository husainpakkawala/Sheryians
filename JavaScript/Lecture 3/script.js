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