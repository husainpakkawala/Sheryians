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