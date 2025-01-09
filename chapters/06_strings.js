/* ************************************
    Chapter 06 Strings in Details
************************************* */

// 📌 01 Introduction
const single = 'This is a string written inside of single quotes.';
console.log(single);

const double = "This is a string written inside of double quotes.";
console.log(double);

const backticks = `This is a string written inside of backtick quotes.`
console.log(backticks);

const variableName = `2 + 2 = ${2 + 2}`; // 
console.log(variableName);

const numbers = `
    1
    2
    3
`;
console.log(numbers);

const greeting = `Hello, I'am John, "Doe".`;
console.log(greeting);

// 📌 02 String Escape Characters
const escapeGreeting = 'Hi, I\'m John \"Doe\".';
console.log(escapeGreeting);

/*
    String Escape Characters in JavaScript are:
    
    \' - Single Quote
    \" - Double Quote

    \\ - Backslash

    \n - New Line
    \r - Carriage Return

    \b - Backspace
    \t - Tab

    \f - Form Feed

    \t - Horizontal Tab
    \v - Vertical Tab
        
    \0 - Null Character
    \uXXXX - Unicode Character
    \xXX - Hexadecimal Character
*/

console.log('Single Quote: \'');   
console.log('Double Quote: \"');
console.log('Backslash: \\');
console.log('New Line: \n');
console.log('Carriage Return: \r');
console.log('Backspace: \b');
console.log('Tab: \t');
console.log('Form Feed: \f');
console.log('Horizontal Tab: \t');
console.log('Vertical Tab: \v');
console.log('Null Character: \0');

// 📌 03 String Lenght and Basic Properties

const name = 'John';
console.log(`The length of ${name} is ${name.length}`);

// This is how we will get the first character of a string
console.log(`The first character of ${name} is ${name[0]}`);

// This is how we will get the last character of a string
console.log(`The last character of ${name} is ${name[name.length - 1]}`);

// 📌 04 Change String Case

// Uppercase
console.log(`${name} in uppercase is ${name.toUpperCase()}`);

// Lowercase
console.log(`${name} in lowercase is ${name.toLowerCase()}`);

// 📌 05 Searching for Substring



// 📌 06 Reverse a String



// 📌 07 Repeat and Trim a String



// 📌 08 Array Methods