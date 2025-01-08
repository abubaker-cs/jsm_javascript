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

const outer = () => {
    const outerVar = 'Hello';
    
    const inner = () => {
        const innverVar = 'Hi';
        
        // Accessing outerVar from the inner function
        console.log(innverVar, outerVar);
    
    }
    
    return inner;
}

const innerFn = outer();

innerFn(); // Output: Hi Hello

// --------------------------------------------

const init = () => {
    const hobby = 'Learning JavaScript'; // hobby is a local variable created by init function

    const displayHobby = () => {

        // displayHobby() is a closure because it has access to the outer function's variables

        console.log(hobby); // Accessing hobby from the inner function
    }

    displayHobby();
    
};

init(); // Output: Learning JavaScript

/*
    Scoping vs Closure

    1. Scoping
    Scoping refers to the accessibility and lifetime of variables in different parts of the code, depending on where they are declared.

    Types of Scope:
    1. Global Scope: Variables declared outside any function or block are accessible everywhere in the code.
    2. Function Scope: Variables declared with var inside a function are confined to that function. They are not accessible outside it.
    3. Block Scope: Variables declared with let or const are confined to the block (e.g., { }) in which they are declared.

    Key Points:
    1. Scoping is determined at the time of writing the code (static/lexical scoping).
    2. Variables declared in one scope are not accessible in other scopes unless explicitly passed.
    3. Modern JavaScript emphasizes block scoping with let and const to improve clarity and reduce errors.
*/

function example() {
    let a = 10; // Scoped to this block
    if (true) {
      let b = 20; // Scoped to this 'if' block
      console.log(a); // 10 (accessible due to lexical scoping)
    }
    console.log(b); // Error: b is not defined (b is block-scoped)
  }
  example();

  
/**
    2. Closures
    Closures are a function’s ability to remember the variables from the scope in which it was created, even after that scope has exited.

    Key Points:
    1. Closures occur when a function "captures" variables from its outer scope.
    2. A closure gives access to an outer function’s scope from an inner function, even after the outer function has returned.
    3. Closures are commonly used for data encapsulation, currying, and callbacks.   
*/

function createCounter() {
    let count = 0; // Variable in outer scope
    return function () {
      count++; // Inner function "remembers" count
      console.log(count);
    };
  }
  
  const counter = createCounter();
  counter(); // 1
  counter(); // 2
  counter(); // 3

// Here, count persists between function calls because the inner function forms a closure over it.


/**
 * Key Differences:
 * 
 * Definition: 
 *      1. Scoping: Determines where variables are accessible.
 *      2. Closure: Preserves variables from the outer scope.
 * 
 * Timing: 
 *      1. Scoping: Happens at declaration (static).	
 *      2. Closure: Happens at runtime when a function is created.
 * 
 * Purpose: 
 *      1. Scoping: Controls visibility of variables.
 *      2. Closure: Allows inner functions to retain access to outer scope.
 * 
 * Usage: 
 *      1. Scoping: Block, function, or global variable access.
 *      2. Closure: Function factories, callbacks, or maintaining state.
 * 
 */