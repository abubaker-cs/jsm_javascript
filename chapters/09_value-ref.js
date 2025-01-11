/* ************************************
    Chapter 09 Value vs Reference
************************************* */

// 📌 01 Value vs Reference

// Copying: Values
let x = 3;
let y = x;

x = 2;

console.log(x); // 2
console.log(y); // 3

// Copying: Strings
let a = 'Hello John';
let b = a;

a = 'Mike';

console.log(a); // Mike
console.log(b); // Hello John

// Copying: Arrays
const animals = ['dog', 'cat', 'bird'];
const otherAnimals = animals;

animals.push('fish');

console.log(animals); // ['dog', 'cat', 'bird', 'fish']
console.log(otherAnimals); // ['dog', 'cat', 'bird', 'fish']

// Copying: Objects
const person = {
    name: 'John',
    age: 30
};

const otherPerson = person;
person.name = 'Michael';

console.log(person); // { name: 'Mike', age: 30 }
console.log(otherPerson); // 

console.log(person === otherPerson); // true
console.log(otherPerson === person); // true

// 📌 02 Shallow Cloning

/**
 * Methods:
 * 1. Spread Operator
 * 2. .slice() - Returns a shallow copy of a portion of an array - slice(start, end)
 */


// ✅ Array - Spread Operator
const numbers = [1, 2, 3, 4, 5]
const ref_newNumbers = numbers;

// Spread Operator: It is a way to clone an array or object.
const spread_newNumbers = [...numbers];

console.log(numbers); // [1, 2, 3, 4, 5]

console.log(ref_newNumbers); // [1, 2, 3, 4, 5]
console.log(numbers === ref_newNumbers); // false

console.log(spread_newNumbers); // [1, 2, 3, 4, 5]
console.log(numbers === spread_newNumbers); // false

// ✅ Array - .slice()
const slice_numbers = numbers.slice();

console.log(slice_numbers); // [1, 2, 3, 4, 5]
console.log(numbers === slice_numbers); // false


// ✅ Object - Spread Operator
const staff = {
    name: 'John',
    age: 30
};

const ref_staff = staff;
console.log(staff === ref_staff); // true

const spread_staff = { ...staff };

spread_staff.name = 'Michael';

console.log(staff); // { name: 'John', age: 30 }
console.log(spread_staff); // { name: 'Michael', age: 30 }
console.log(staff === spread_staff); // false


// ✅ Object - .assign()

var cat1 = {
    name: 'Fluffy',
    color: 'white',
    greeting: function () {
        console.log('Meow!');
    }
};

var cat2 = Object.assign({}, cat1); // ⚠️🔖👏❌✅ Object.assign({}, array_to_copy)

console.log(cat1 === cat2); // false

cat2.name = 'Garfield';
cat2.color = 'black';

console.log(cat1); // { name: 'Fluffy', color: 'white', greeting: [Function: greeting] }
console.log(cat2); // { name: 'Garfield', color: 'black', greeting: [Function: greeting] }


// 📌 03 Deep Cloning 
