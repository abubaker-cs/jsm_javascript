/* ************************************
    Chapter 04: Functions
************************************* */

// 📌 01 Intro
function basicSquare(number){
    return number * number;
}
basicSquare(5); // 25

console.log(basicSquare(25)); // 625

// 📌 02 Arrow Functions
/*
    Arrow functions are a more concise way to write functions in JavaScript.
    They are written using a fat arrow (=>) between the parameters and the function body.
    Arrow functions are always anonymous.

    The difference between arrow functions and regular functions is that arrow functions do not have their own this keyword.

    Why to use an arrow function?
    - Shorter syntax
    - No binding of this keyword
    - No binding of arguments object

    Why to use regular function instead of an arrow function?
    - When you need a method to bind to an object
    - When you need to add a prototype method
    - When you need arguments object

*/

const square = (number) => {
    return number * number;
}
console.log(square(35)); // 1225

// Shorthand version of arrow function
const sqr = number => number * number;
console.log(sqr(5.7)); // 32.49

// 📌 03 Parameters vs Arguments
/* 
    Parameters are the VARIABLE NAMES listed in the function definition.
    Arguments are the REAL VALUES that are passed to the function.
*/
const logAge = (name, age) => {
    return `${name} is ${age} years old`;
}   
logAge('John', 25); // John is 25 years old

/**
 * In the above example:
 *  Parameters: name and age
 *  Arguments: 'John' and 25
 */