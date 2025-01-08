/* ************************************
    Chapter 02: Operationss and Equality
************************************* */

// 📌 01 Operations
/**
 * Following are the types of operations in Javascript:
 * 1. Arthmetic Operations
 * 2. Comparison Operations and Equality
 * 3. Logical Operators
 * 4. Assignment Operators
 * 5. Conditional Operators
 */


// 📌 02 Arthmetic Operations
/*
    Following are the arthmetic operations in Javascript:
    1. Addition (+)
    2. Subtraction (-)
    3. Multiplication (*)
    4. Division (/)
    5. Grouping operator ()
    6. Modulus (%)
    7. Increment (++)
    8. Decrement (--) 
    9. Exponentiation (**) (ES6)

    Some examples:
    5+5;
    5.5-5;
    5*2;

    11/2;
    11%2;

    5++;
    4--;

    4** 2; // 4^2 = 16

*/

// 📌 03 Comparison Operations and Equality
/**
 * Comparitive operations are used to compare two values and return a boolean value (true or false).
 * 
 * Following are the comparison operations in Javascript:
 * 1. Greater than (>)
 * 2. Less than (<)
 * 3. Greater than or equal to (>=)
 * 4. Less than or equal to (<=)
 * 5. Equality (==)
 * 6. Strict Equality (===)
 * 7. Inequality (!=)
 * 8. Strict Inequality (!==)
 */

const a = 5;
const b = 10;

console.log(a > b); // false
console.log(a >= b); // false

console.log(a < b); // true
console.log(a <= b); // true

console.log(a == b); // false
console.log(a != b); // true

// Strict Equality
console.log(a === b); // false

// Strict Inequality
console.log(a !== b); // true


// 📌 04 Strict vs Loose Equality
/* 
    1. ✅ Strict Equality (===): It checks the value and the type of the variable.
        Example: 5 === '5' // false

    2. ❌ Loose Equality (==): It only checks the value of the variable.
        Example: 5 == '5' // true

    ⚠️ Never try to compare ❌ non-primitive ❌ data types using == or ===, as it will always return false.
    
    Example: 
        OBJECT {} === {} // Will always be false
        ARRAY  [] === [] // Will always be false

    Summary:
    - Always use strict equality (===) for comparison.

*/

// ⚠️❌⚠️❌⚠️❌⚠️
// 📌 05 Dangers of Loose Equality
// ⚠️❌⚠️❌⚠️❌⚠️
/* 
    Following are the dangers of using loose equality:
    1. Type Coercion
    2. Unexpected Results

    Examples:
    '' == '0' // false
    0 == '' // true
    0 == '0' // true

    false == 'false' // false
    false == '0' // true

    false == undefined // false
    false == null // false
    null == undefined // true
*/

// 📌 07 Logical Operators
/*
    Following are the logical operators in Javascript:
    
    📌 1. AND Operator (&&)
    It will check if BOTH the conditions are true, then it will return true.
    
    Examples:
    true && true // true
    true && false // false
    false && true // false

    📌 2. OR Operator (||)
    It will check if ANY ONE of the conditions is true, then it will return true.

    Examples:
    true || true // true
    true || false // true
    false || true // true
    false || false // false ⚠️


    📌 3. NOT Operator (!)
    It will reverse the value of the boolean condition.

    Examples:
    !true // false
    !false // true

    !!true // true
    !!false // false

*/


// 📌 11 Assignment Operators (=, +=, -=, *=, /=, %=)
/**
 * Following are the assignment operators in Javascript:
 * 1. = (Assignment)
 * 
 * Compound Assignment Operator with Arthmetic Operations:
 * 2. += (Addition Assignment)
 * 3. -= (Subtraction Assignment)
 * 4. *= (Multiplication Assignment)
 * 5. /= (Division Assignment)
 * 6. %= (Modulus Assignment)
 * 
 * Assignment Operator can also be used with strings, for example:
 * let name = 'John';
 * name += ' Doe'; 
 * console.log(name); // John Doe
 */

/**
 * Following are the conditional operators in Javascript:
 * 1. == (Loose Equality)
 * 2. === (Strict Equality)
 * 3. != (Loose Inequality)
 * 4. !== (Strict Inequality)
 * 5. > (Greater than)
 * 6. < (Less than)
 */