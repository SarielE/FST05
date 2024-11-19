// Javascript: Programming Language
// Javascript allows for functionality
// Programming Language - allows to communicate to computers

// This is a statement
console.log("Hello World");

// This is a single line comment
/*
    This 
    is an example
    of a 
    multi-line comment
*/

// Variable - Container
/* 

    Camelcase: capitalize the first letter of the second word

    Other types of creating variables
    let- mutable/changable - block-scope
    var- mutable/changable - global-scope
    const - unmutable/unchangable - block-scope
*/

let firstName = "Joseph";
console.log("First Name", firstName);

var middleName = "B";
console.log("Middle Name:", middleName);
middleName = "Z";
console.log("Changed Middle Name:", middleName);

const lastName = "Deja Vu";
console.log("lastName: ", lastName);
// const is unmutable, if change, will cause TypeError
// lastName = "Mirana";
// console.log("Changed Last Name: ", lastName);

// curly braces - code block
if (true) {
    let exampleOne= "Block Scope of let";
    var exampleTwo= "Global Scope of var";
    const exampleThree= "Unchanging Block";
    console.log("Block scope:", exampleOne);
    console.log("Global scope:", exampleTwo);
    console.log("Block Scope:", exampleThree);
}
//Global Scope
// console.log("Changed Block scope:", exampleOne);
console.log("Changed Global scope:", exampleTwo);
//console.log("Changed Block scope", exampleThree);
