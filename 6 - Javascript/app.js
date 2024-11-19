// Reference Data Type: Array
// Array [] - square brackets
// Indexing - way for computers to count or track positions
// Indexing at 0
let fruits = ["mango", "orange", "kiwi", "grapes"];
console.log("Fruits: ", fruits);
// Checking the length of an array
console.log("Fruits length: ", fruits.length);
// Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);
// Updating elements
fruits[0] = "apple";
console.log("Updated Fruits: ", fruits);
// Adding elements
fruits.push("mango");
console.log("Updated Fruits: ", fruits);
// Deleting elements
fruits.pop();
console.log("Updated Fruits: ", fruits);
// Searching elements
// Returns a boolean value
console.log("Is apple included?", fruits.includes("apple"));
// indexOf() method - find the index of an element
let index = fruits.indexOf("kiwi");
console.log("Index is: ", index);

/*
    forEach() method - receives a function as an argument
    and executes it once for each array elements
*/
fruits.forEach(function (fruit) {
    console.log("Fruits:", fruit);
  });