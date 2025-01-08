/* ************************************
    Chapter 03: Logic and Control Flow
************************************* */

// 01 Logic and Control Flow
const age = 18;

if (age > 18) {
    console.log('You may enter, welcome');
} else if (age === 18) {
    console.log('You just turned 18, you may enter, welcome');
} else {
    console.log('You are not allowed to enter');
}


// 02 Truty/Falsy Values
/* 
    The understanding of Truty and Falsy values is important when working with control flow statements.
    - Truty values are considered true when evaluated in a boolean context, while Falsy values are considered false.    

    JavaScript only has 6 Falsy Values:
    1. undefined // variable that has not been assigned a value
    2. null // null is an empty value
    3. 0 // number zero
    4. '' // empty string
    5. NaN // Not a Number
    6. false // boolean false

    Everything else is considered Truty, for example:
    1. '0' // string with a zero
    2. ' ' // string with a space
    3. [] // empty array
    4. {} // empty object
    5. function() {} // empty function
    6. true // boolean true

*/

// 03 And Operator (&&)
const userAge = 19;
const isCool = true;

if (isCool && userAge > 18) {
    console.log('You may enter, welcome');
} else {
    console.log('You are not allowed to enter');
}

// We can check the result of the && operator
// ⚠️ The following code will return the last value if all values are true
console.log(isCool && userAge > 18); // true - since both values are true

// AND returns the first falsy value or the last thruthy value if all values are true
console.log('truthy' && 3); // 3 was the last value  
console.log('truthy' && 1 && 'test'); // test was the last value 
console.log('truthy' && 1 && 'test' && 999); // 999 was the last value


// 04 OR Operator (||)

// 05 NOT Operator (!) 

// 06 Switch Statement

// 07 Ternary Operator

// 08 For and While Loops

// 09 For Loop