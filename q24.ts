

// Define Variables
let summerFruit = "mango";
let upperCase = "MANGO";
let num1 = 15;
let num2 = 30;
let seasons = ["summer","winter","autumn","spring"]

// Test for Equality with strings
console.log("Is summerFruit equal to mango?");
console.log(summerFruit == "mango");

// Test for Inequality with strings
console.log("\nIs summerFruit not equal to mango?");
console.log(summerFruit != "mango");

// Tests using lower case function
// true condition
console.log("\nIs MANGO equal to mango after converting to lowercase?");
console.log(upperCase.toLowerCase() =="mango");

// false condition
console.log("\nIs MANGO not equal to mango after converting to lowercase?");
console.log(upperCase.toLowerCase() !="mango");

// Numerical Tests
// equal to
console.log("\nIs num1 is equal to num2?");
console.log(num1 == num2);
// not equal
console.log("\nIs num not equal to num2?");
console.log(num1 != num2);
// greater than
console.log("\nIs num1 is greater than zero?");
console.log(num1 > 0);
// less than
console.log("\nIs num2 is less than num1?");
console.log(num2 < num1);
// greater than or equal to
console.log("\nIs num1 is greater than or equal to 12?");
console.log(num1 >= 12);
// less than or equal to
console.log("\nIs num2 is less than or equal to 10");
console.log(num2 <= 10);
// Testing using "and" or "or" operators
// using && (and)
// True
console.log("\nIs num1 is not equal to num2 and num2 is greater than num1?");
console.log(num1 !=num2 && num2 > num1);
// False
console.log("\nIs num1 is not equal to num2 and num2 is greater than 30?");
console.log(num1 !=num2 && num2 >30);

// using || (or)
// True
console.log("\nIs num2 is greater than 50 OR num2 is equal to 30?");
console.log(num2 >50 || num2 == 30);
// False
console.log("\nIs num2 is greater than 50 OR num2 is not equal to 30?");
console.log(num2 >50 || num2 != 30);

// Test whether an item is in an array
console.log("\nIs winter is include in my seasons array?");
console.log(seasons.includes("winter"));
// Test whether an item is not in an array
console.log("\nIs autumn is not include in my seasons array?");
console.log(!seasons.includes("autumn"));




















