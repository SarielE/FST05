// Aritchmetic Operators
let num1 = 10;
let num2 = 5;

console.log("Addition (+): ", num1 + num2);
console.log("Subtraction (-): ", num1- num2);
console.log("Multiplication (*): ", num1 * num2);
console.log("Division (/): ", num1 / num2);
console.log("Exponents (**): ", num1 ** num2);
console.log("Remainder (%): ", num1 % num2);

// Order of Operations
// PEMDAS / BODMAS
// PEMDAS - Parenthesis/Brackets, Exponents, Multiplication, Division, Addition, Subtraction
// BODMAS - Brackets, Order, Division, Multiplication, Addition, Subtraction

let answer = (3 * (4 * (5 - 2) **2))/ 2;
console.log("Answer/Order of Operations: ", answer);

// String expressions or concatenation
let greetings = "Hi ";
let firstName = "Jose";
console.log("Concatentation: ", greetings + " " +firstName);

// Comparison Operators
// type coercion (converts the types if necessary)
// Equal to (==) : checks if two values are equal
let valueOne = 5;
let valueTwo = "5";
console.log("Equal to (==): ", 5 == 5);
console.log("Equal to with type coercion (==): ", 5 == "5");

// Not equal (!=) : Check if two values are not equal
console.log("Not Equal to (==): ", 3 != 5);
console.log("Not Equal to with type coercion (==): ", 3 != "5");

// Strict equal to (===) : Checks if two values are equal in value and in type
console.log("Strict Equal to (===): ", 5 === 5);
console.log("Strict Equal to with type coercion (===): ", 5 === "5");

// Strict not equal to (!==): Checks if two values are not equal in value and in type
console.log("Strict Not Equal to (!==): ", 3 !== 5);
console.log("Strict Not Equal to with type coercion (===): ", 3 === "5");

console.log("Greater than (>): ", 5 > 3);
console.log("Lesser than (>): ", 3 < 5);

console.log("Greater than (>): ", 5 > 3);
console.log("Lesser than (>): ", 3 < 5);
console.log("Greater than or Equal to (>=): ", 5 >= 5);
console.log("Lesser than or Equal to (>=): ", 3 <= 3);

// Logical Operators
// && - AND - Ampersand
// || - OR - Pipe
// ! - NOT - Exclamation Mark
let sunny = true;
let warm = true;
// AND: True only if all conditions are met
console.log("Is it sunny and warm?", sunny && warm);

// OR: Ture if at least one condition is met
console.log("Is it sunny OR warm?", sunny || warm);

// NOT: Inverts the boolean value
console.log("NOT sunny?", !sunny);

// Assignment Expressions
// Assigning a value to a variable
let num3 = 10;
let num4 = 5;

// Addition Assignment
console.log("Addition Assignment (+=): ", (num3 += num4));

// Subtraction Assignment
console.log("Subtraction Assignment (-=): ", (num3 -= num4));

// Multiplication Assignment
console.log("Multiplication Assignment (*=): ", (num3 *= num4));

// Division Assignment 
console.log("Division Assignment (/=): ", (num3 /= num4));

// Exponent Assignment
console.log("Exponent Assignment (**): ", num3 ** num4);

// Remainder Assignment
console.log("Remainder Assignment (%*): ", (num3 %= num4));