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
/**
 * ✅ indexOf()  
 *  - the index of the first occurrence of a substring in a string.
 *  - -1 if not found.
 */

const string =`I love ducks, he said, ducks are great ducks`;

// Found at index 7
string.indexOf('ducks'); // 7

// Because of case sensitivity
string.indexOf('Ducks'); // -1

// str.indexOf(substr, pos)
// The optional second argument allows us to specify the position from which the search should start
string.indexOf('ducks', 8); // 20

/**
 * ✅ lastIndexOf()
 * - the index of the last occurrence of a substring in a string.
 */

console.log(string.lastIndexOf('ducks')); // 39


/**
 * ✅ includes()
 * - checks if a string contains a substring, regardless of its occurrence in the string.
 */
console.log(string.includes('great')); // true

/**
 * ✅ startsWith()
 * - checks if a string starts with a substring.
 * 
*/
console.log(string.startsWith('I love')); // true


/**
 * ✅ endsWith()
 * - checks if a string ends with a substring.
*/
console.log(string.endsWith('ducks!')); // false


/**
 * str.slice(start, end)
 * - extracts a part of a string and returns a new string.
*/
const str = 'Hello, World!';
const slicedStr = str.slice(7, 12);
console.log(slicedStr); // "World"


/**
 * split()
 * - splits a string into an array of substrings based on a specified separator.
*/
const exampleString = 'banana';
console.log(exampleString.split(''));

const fruits = 'apple,banana,orange,watermelon,grape';
console.log(fruits.split(','));

// This is how we can split a sentence into words
const sentence = 'This is a sentence.';
console.log(sentence.split(' '));


// 📌 06 Reverse a String
/**
 * ✅ reverse()
 * Javascript does not have a built-in function to reverse a string.
 * However, we can use the:
 * 1. split() a string, 
 * 2. reverse() newly created array, 
 * 3. Turn the array back into a string using join() method to reverse a string. 
 */
const strToReverse = 'Hello, World!';
const reversedStr = strToReverse.split('').reverse().join('');
console.log(reversedStr); // "!dlroW ,olleH"


// 📌 07 Repeat and Trim a String
/*
 * ✅ repeat()
 * - repeats a string a specified number of times.
*/
const dogSays = 'woof';
console.log(dogSays.repeat(3)); // "woofwoofwoof"


/*
 * * ✅ trim()
 * - removes whitespace from both ends of a string.
*/
const greetingWithSpaces = '   Hello, James!   ';
console.log(greetingWithSpaces.trim()); // "Hello, James!"

/*
 * 📌 Summary of String Methods
*/

// 01 string[index]
// Get a character at a specific index

// 02 string.length
// Get the length of a string

// 03 string.split(' ')
// Split a string into an array of substrings

// 04 string.split('')
// Split a string into an array of characters

// 05 string.toLowerCase()
// Convert a string to lowercase

// 06 string.toUpperCase()
// Convert a string to uppercase

// 07 string.charAt(index)
// Get a character at a specific index

// 08 string.replace(searchValue, replaceValue)
// Replace a substring with another substring

// 09 string.includes(searchValue)
// Perform a case-sensitive search for a substring, retturning true or false

// 10 string.substr(start, length)
// Return a substring of a specified length, starting at a specified index

// 11 string.includes('substring')
// Checks wether a string contains a substring, checking case-sensitive of the character

// 12 string.indexOf(searchValue)
// Returns the index of the FIRST occurrence of a substring in a string, returns -1 if not found

// 13 string.lastIndexOf(searchValue)
// Returns the index of the LAST occurrence of a substring in a string, returns -1 if not found

// 14 string.slice(start, end)
// Returns a portion of a string, starting at a specified index and ending at a specified index