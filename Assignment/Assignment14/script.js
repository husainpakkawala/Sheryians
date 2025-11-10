//3. Conditional Operators (if, else, else-if, ternary, switch)

// a. Take input using prompt for age.
// If age > 18 → log “Adult”.
// Else → log “Minor”.

// let age = prmpt("Enter your age:")
// if(age > 18){
//     console.log("Adult");
// }else{
//     console.log("Minor")
// }

// b. Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

// let marks = 90;

// if(marks >= 90){
//     console.log("A grade")
// }else if (marks >= 75){
//     console.log("B grade")
// }else if (marks >= 50){
//     console.log("C grade")
// }else{
//     "Fail"
// }

// c. Create a variable city = “Bhopal”.
// If city is “Bhopal” → log “MP”
// Else if city is “Delhi” → log “Capital”
// Else → log “Unknown City”

let city = "Gujarat";

if (city === "Bhopal"){
    console.log("MP");
}else if (city === "Delhi"){
    console.log("Capital");
}else{
    console.log("Unknown City");
}

// d. Use ternary operator:
// Let score = 40.
// If score > 35 → “Pass” else “Fail” using a ternary.

let score = 40;

let result = (score > 35) ? "Pass" : "Fail";
console.log(result);

// e. Convert this if-else into a ternary:
// if (temperature > 30) { “Hot” } else { “Pleasant” }

let temp = 40;

let result1 = (temp > 30) ? "Hot" : "Pleasant";
console.log(result1);

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

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

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

let age = 25;
let country = "India";

if(age > 18 && country === "India"){
    console.log("Eligible for vote")
}else{
    console.log("Not Eligible");
}
