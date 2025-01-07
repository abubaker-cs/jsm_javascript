/* ************************************
    Chapter 01: Vairables and Data Type
************************************* */

// 01 Vairables

// Old way of declaring variables
var variableName = 'Hello, world!';

// New way of declaring variables
let letVariable = 'Hello, world!';
const constantVariable = 'Hello, world!';


// 02 Data Types

/*
    We can categorize data types into two types:
    1. Primitive Data Types
        a. Numbers: Integers, Floats
        b. String: Text
        c. Booleans: True or False
        d. Null: Represents null, or "nothing"
        e. Undefined: Represents undefined, or "not assigned"
        f. Symbol: Used as identifiers for object properties

    2. Reference Data Types
        a. Objects: Instance through which we can access members
        b. Arrays: List of items
        c. RegExp: Regular Expressions
*/


// 03 Comments

/*
    Javascript supports single line and multi-line comments.
    a. Single Line Comments
    b. Multi Line Comments
*/

// 04 Strings

/**
 In Javascript, there are three ways to declare strings:
    
    a. Single Quotes: ''
    b. Double Quotes: ""
    There is not much difference between single and double quotes.
    
    c. Backticks: ``
    Backticks are used to declare template literals. Template literals are used to embed expressions into strings.
 
    Example:
        const backticks = `Hello, ${2 + 2}`;
 
        This will perform calculations and output: Hello, 4

 */

// 05 Numbers

/*
    Javascrip supports untyped numbers. It means that we can use numbers without declaring their type, such as int, float, etc.

    const wholeNumber = 10;
    const floatNumber = 10.5;
    
    const negativeNumber = -10;
    const exponentialNumber = 1e3; // 1000

    Javascript supports following operators:
    1. Addition: +
    2. Subtraction: -
    3. Multiplication: *
    4. Division: /
    5. Modulus: %
    6. Increment: ++
    7. Decrement: --
    8. Exponential: **
    
*/

// NaN: Not a Number
/*
    NaN is a special value in Javascript. It is used to represent a value that is not a number.
    For example:
    
        alert('Hello, world!' * 3); // NaN
        
        const notANumber = 0 / 0;
        console.log(notANumber); // NaN
*/


// 06 Booleans
/* 
    Booleans are used to represent true or false values.
    For example:
    
    const isTrue = true;
    const isFalse = false;
    
    const isTrue = 1;
    const isFalse = 0;
    
    const isTrue = 'Hello';
    const isFalse = '';
    
    const isTrue = 10;
    const isFalse = 0;
*/

const isCool = true;
if (isCool) {
    console.log('You are cool!');
} else {
    console.log('You are not cool!');
}


// Boolean values also come as a result of comparison operators
const isGreater = 10 > 5;

const age = 20;
if (age >= 18) {
    console.log('You are an adult!');
}

// 07 Null and Undefined



// 08 Objects

// 09 Statically vs Dynamically Typed Languages