/* ************************************
    Chapter 08 Objects
************************************* */

// 📌 01 Introduction to Objects
const person = {
    name: 'John',
    age: 30,
    isMarried: true,
    hobbies: ['Sports', 'Cooking'],
    address: {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    }
};


// 📌 02 Accessing, adding and updating properties
/*
    - Dot Notation
    - Square Bracket Notation
*/

console.log(person.name); // John

person.address = {
    street: '32 South St',
    city: 'Calorfornia',
    state: 'CA'
}

console.log(person.isMarried); // true

console.log(person.address); // Calorfornia

// Using Square Bracket Notation
console.log(person['name']); // John

// It can be used to access keys that are not usual Javascript names
const animal = {
    'animal type': 'dog',
    'animal-age': 3,
    name: 'Max',
    age: 3,
    bark: function() {
        console.log('Woof!');
    }
};

console.log(animal['animal type']); // dog
console.log(animal['animal-age']); // 3

// 📌 03 Object Methods

/**
 * - Object Methods are functions that are stored as properties
 */

const member = {    
    name: 'John Smith',
    age: 30,
    isMarried: true,
    hobbies: ['Sports', 'Cooking'],
    address: {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    },

    // Methods are the functions inside an Object
    sayHello: function() {
        console.log('Hello, my name is ' + this.name);
    }

};

// In the above example, the function "sayHello()" is a method of the member object.
member.sayHello(); // Hello, my name is John

