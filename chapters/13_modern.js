// import { dogs, number, woof } from './lib/dogs.js';

/* ************************************
    Chapter 13 Modern JavaScript
************************************* */

// 📌 01 ES6 + JavaScript

// var age = 27;
// console.log(age); //   27

// var age = 30;
// console.log(age); //   30

let age = 27;
console.log(age); //   27

// let age = 30;
// console.log(age); //   Identifier 'age' has already been declared

const password = "superSecret";
// password = "superDuperSecret"; // Error - Constant can't be reassigned

let pass = "superSecret";
pass = "superDuperSecret"; // Allowed reassignment

// -------------------------------------------------------
// 😀 Arrow Functions
// -------------------------------------------------------

// old method
function multiply_a (x) {
    return x * 2;
}

// new method
const multiply_b = (x) => {
    x => x * 2;
};

// Shorthand version
const multiply_c = x => x * 2;


// -------------------------------------------------------
// 😀 Defaultt Parameters
// -------------------------------------------------------

const add = (x =1, y = 2, z = 10) => {
    return x + y + z;
};

// Though, we are skipping providing the value of z, the default value of 10 will be used.
add(2, 3); // 2 + 3 + (10) = 15

// -------------------------------------------------------
// 😀 Template Strings
// -------------------------------------------------------

const customer = 'John';

const order = {
    name: 'Pizza',
    price: 10,
    quantity: 2,
};

// the old way ... ugly
console.log('Hello ' + customer + ' do you want to buy ' + order.name + ' for ' + order.price + ' bucks?');

// the new way
console.log(`Hello ${customer} do you want to buy ${order.name} for ${order.price} bucks?`);

// 📌 02 Imports and Exports

// console.log(dogs);
// console.log(number);

// woof(dogs[0]);

// import onlyOneThing from './lib/test.js'
// console.log(onlyOneThing);

// 📌 03 Spread and Rest

function sum(x,y,z) {
    return x+y+z;
}

const numbers = [1,2,3];

console.log(sum(...numbers)); // 6

console.log(sum.apply(null, numbers)); // 6

// -------------------------------------------------------


// ...theArgs - the rest parameter syntax allows us to represent an indefinite number of arguments as an array, 
// allowing us to pass a variable number of arguments to a function.
function sum(...theArgs) {

    // reduce() method executes a user-supplied "reducer" callback function on each element of the array,
    return theArgs.reduce((sum, item) => {

        return sum + item;
    });

}

console.log(sum(1, 2, 3)); // 6

console.log(sum(1, 2,3,4)); // 10

// 📌 04 Array Destructing

const introduction = ['Hello', 'I', 'am', 'John'];

const [greeting, pronoun] = introduction; 

console.log(greeting); // John
console.log(pronoun); // age


// 📌 05 Object Destructuring

const animal = {
    name: 'Bear',
    breed: 'Pitbull',
    color: 'Brown',
};

const { name, breed, color } = animal;

console.log(name); // Bear
console.log(breed); // Pitbull
console.log(color); // Brown

