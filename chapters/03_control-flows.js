/* ************************************
    Chapter 03: Logic and Control Flow
************************************* */

// 📌 01 Logic and Control Flow
const age = 18;

if (age > 18) {
    console.log('You may enter, welcome');
} else if (age === 18) {
    console.log('You just turned 18, you may enter, welcome');
} else {
    console.log('You are not allowed to enter');
}

// 📌 02 Ternary Operator
/*
    The Ternary Operator is a shorthand for if-else statement
    It is a good way to write simple if-else statements in a single line
*/

const isAllowed = age > 18 
    ? 'You may enter, welcome 💖' 
    : 'You are not ❌ allowed to enter';

console.log(isAllowed);

// 📌 03 Truty/Falsy Values
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

// 📌 04 And Operator (&&)
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


// 📌 05 OR Operator (||)

/**
 * The OR operator returns the first truthy value or the last falsy value if all values are false
 */

console.log('truthy' || 0 || 'test' || 999); // truthy was the first value
console.log('' || 0 || null || undefined); // undefined was the last value
console.log('' || 0 || null || false); // false was the last value
console.log('' || 0 || null || false || 'test'); // test was the last value

// 📌 06 NOT Operator (!) 

/*
    The NOT operator returns the opposite boolean value of the operand

    It is helpful when you want to check if a value is falsy, for example:
    - if (!value) { ... } // if value is falsy, then do something

*/
console.log(!true); // false
console.log(!false); // true

/**
 * !! is a common pattern used to convert a value to a boolean
 * A Double !! is used to convert a VALUE to a boolean
 */

console.log(!!'truthy'); // true because 'truthy' is a truthy value
console.log(!!null); // false because null is a falsy value
console.log(!!'123'); // true because '123' is a truthy value
console.log(!!0); // false because 0 is a falsy value
console.log(!!'-303'); // true because '-303' is a truthy value


// 📌 07 Switch Statement
/*
    The switch statement is used to perform different actions based on different conditions.
    It is a good alternative to multiple if statements.

    The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
*/
const superHero= 'Iron Man';

switch (superHero) {
    case 'Iron Man':
        console.log('I am Iron Man');
        break;
    case 'Thor':
        console.log('I am Thor');
        break;
    case 'Iron Man':
        console.log('I am Iron Man');
        break;
    case 'Hulk':
        console.log('I am Hulk');
        break;
    case 'Captian America':
        console.log('I am Captian America');
        break;
    default:
        console.log('I am not a super hero');
        break;
}


// 📌 08 For Loop
/*
    The for loop is used to execute a block of code multiple times.
    It is a good way to iterate over arrays or strings.
*/

let i = 0
for (; i < 5; i++) {
    // No need to initilaize i, as it is already initialized
    console.log(i);
}

// 📌 09 While Loop
/*
    The while loop is used to execute a block of code as long as the condition is true.
    It is a good way to iterate when the number of iterations is unknown.
*/
while (i <= 10) {
    console.log(i);
    i++;
}