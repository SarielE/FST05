// Functions
// Functions are blocks of code that can be executed whenever needed

// Function Definition
function greet() {
    console.log("Good Day Everyone");
    console.log("Hi there");
}

// Calling a functions / invoking a function
greet();
greet();
greet();

// Function definition with parameters and arguments
/*
    Parameters - placeholder on creating function
    Arguments - values passed to a function
*/
// parameters
function remark(num1, num2){
   return num1 + num2; //sends value back whenever function is called
}

// Calling a function / invoking a function with parameters and arguments
remark(1,2); // arguments
console.log("Sum of num1 and num2",remark(1,2));