/* ************************************
    Chapter 0
************************************* */

// 📌 01 The "new" keyword

// We can create a new object with the "new" keyword
// 1. new - creates a new empty object {}
// 2. object - is the default constructor method (blueprint) for creating new objects
const newPerson = new Object();

newPerson.firstName = "Max";
newPerson.lastName = "Mustermann";

console.log(newPerson.firstName); // Max
console.log(newPerson.lastName); // Mustermann

console.log(typeof(newPerson)); // object - verified 


// 👏 Example

// Blueprint
function person(name,age,profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
}

// Create a new object based on the person blueprint
const john = new person("John", 30, "Developer");
console.log(john);

const mary = new person("Mary", 25, "Designer");
console.log(mary.age);

const jane = new person("Jane", 28, "Teacher");
console.log(jane.profession);


// 📌 02 The "this" keyword
// The "this" keyword is a reference to the current object

function Sentence(words){
    this.words = words;

    console.log(this);
}

const test = new Sentence("learning about this keyword");
