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


// 01 Global Scope

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

// 02 Local Scope

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

// 03 Block Statements Scope: if, for and while loops.
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

// 06 Hoisting

// 07 Variable Hoisting

// 08 Function Hoisting

/* =========================================== */

// 09 Closures
