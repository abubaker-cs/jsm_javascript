/* ************************************
    Chapter 05 Tricky Concepts
************************************* */

/**
 * Scope: Scope is the context in which a variable is declared. In other words, the scope determines the visibility of the variable.
 * 
 * Javascript has three types of scope:
 * 1. Global Scope: The scope of the outermost function is called the global
 * 2. Local Scope: The scope of the innermost function is called the local
 * 3. Block Scope: The scope of the block of code is called the block scope
 */


// 📌 01 Global Scope 

/*
    Global Scope: A variable declared OUTSIDE a function becomes a global variable.

    Advantages of Global Scope:
    - Global variables can be accessed and modified from any function in the program.
    - Global variables can be accessed from any script or function in the program.

    Disadvantages of Global Scope:
    - Global variables can be overwritten by other scripts or functions.
    - Global variables can be a security risk.
    - Global variables can be a performance issue, leading to out of memory error.
*/

const globalVar = 'I am a global variable';

const logName = () => {
    console.log(globalVar);
}

logName(); // Output: I am a global variable

// 📌 02 Local Scope

/*
    Local Scope: A variable declared INSIDE a function becomes a local variable.

    Advantages of Local Scope:
    - Local variables are only accessible within:
        - The Function in which they are declared.
        - The Block of code in which they are declared.
    - Memory Efficient because local variables are destroyed once the function is executed.

    Disadvantages of Local Scope:
    - Local variables cannot be accessed from outside:
        - The Function.
        - The Block of code.
*/

const logNameLocal = () => {
    const localVar = 'I am a local variable';
    console.log(localVar);
}
logNameLocal(); // Output: I am a local variable

const someFunction = () => {
    
    // Local Scope 1
    const localVar1 = 'I am a local variable 1';
    console.log(localVar1);
    
    const anotherFunction = () => {
    
        // Local Scope 2
        const localVar2 = 'I am a local variable 2';
    
        console.log(localVar1); // Output: I am a local variable 1
        console.log(localVar2); // Output: I am a local variable 2
    
    }

}
someFunction();

// 📌 03 Block Statements Scope: if, for and while loops.
/*
    Variable defined using:
        - var keyword has a function scope.
        - let and const keyword has a block scope.
*/

if(true) {  
    var name = 'Abubaker';
    let likes = 'Coding'; 
    const skills = 'JavaScript and Kotlin';
}

console.log(name); // Output: Abubaker
// console.log(likes); // ReferenceError: likes is not defined
// console.log(skills); // ReferenceError: skills is not defined


/* =========================================== */

// 📌 04 Hoisting
/*
    Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
    
    ⚠️ Note: Only declarations are moved to the top, not the initializations.

    Hoisting is JavaScript's default behavior of moving declarations to the top, based on this behavior, a variable ❌ cannot be used before it has been declared.
*/

// 📌 05 Variable Hoisting

/*

    The order in which the variable should be used is:
    1. Variable Declaration
    2. Variable Initialization
    3. Variable Usage

    Going against the above order will result in an error.

*/


// 📌 06 Function Hoisting

/*
    1. Function declarations are also hoisted to the top of the scope in which they are declared.
    2. Functions declared using the const keyword are not hoisted.

    Remember: Always declare the function before using it.

*/

/* =========================================== */

// 📌 07 Closures
/*
    A closure is a function that has access to the outer function's variables even after the outer function has returned.

    A closure is created when an inner function is returned from an outer function.

    Closures are used to:
    - Encapsulate data.
    - Create private variables.
    - Create factory functions.

*/

const outerFunction = (name) => {

    const greeting = 'Hello Dear,';

    const innerFunction = () => {
        return `${greeting} ${name}`;
    }

    return innerFunction;
}

const innerFunction = outerFunction('Abubaker');