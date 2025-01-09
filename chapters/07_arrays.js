/* ************************************
    Chapter 07 Arrays
************************************* */

// 📌 01 Arrays
const friends = ['Michael', 'Steven', 'Peter', 'John'];
console.log(friends[0]);

// To replace an element in an array
friends[2] = 'Jay';
console.log(friends);

// To add a new element in an array
friends[4] = 'Bob';
console.log(friends);

// To find the length of an array
console.log(friends.length);

// An array can storre different data types
const arr = [
    'Apple',
    {
        name: 'John', 
        age: 25,
        marks: 75
    },
    true,
    function() {
        console.log('Hello World!')
    }
]

// To loop through an array
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

for(let i = 0; i < months.length; i++) {
    console.log(months[i]);
}


// 📌 02 Array Methods

/*
 * 🔖 01
 * array.push()
 *  It adds an element at the end of the array
*/


/*
 * 🔖 02
 * array.pop()
 * It removes an element from the end of the array
*/


/*
 * 🔖 03
 * array.shift()
 * It removes an element from the beginning of the array
*/


/*
 * 🔖 04
 * array.unshift()
 * It adds an element at the beginning of the array
*/


/*
 * 🔖 05
 * array.splice()
 * It adds or removes elements from an array
*/


/*
 * 🔖 06
 * array.slice()
 * It returns a new array with the elements from the specified start to end index
*/




// 📌 03 Array Method for Looping