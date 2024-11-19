// Control Flow Structures

// Conditional Statements
// Allows us to execute unfiltered blocks of code

// Conditionals: if, else if, else statements
// Parenthesis () - condition statement
// Curly Braces {} - code block
let temperature = 25;
if ((temperature = 0)){
    console.log("It's freezing");
} else if (temperature >= 0 && temperature < 10){
    console.log("It's cold");
} else if (temperature >= 20 && temperature < 30) {
    console.log("It's warm outside");
} else {
    console.log("It's hot outside");
}

// Looping statements
// Repeatedly execute a block of code until a specific condition is reached

// For loop
/*
    "components" of a for loop
    1st - variable
    2nd - condition
    3rd - increment
*/
for (let i = 1; i <= 3; i++){
    console.log("For loop count:", i);
}