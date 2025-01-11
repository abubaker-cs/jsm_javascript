/* ************************************
    Chapter 07 Arrays
************************************* */

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// ------------------------------------------------------------------------------

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
for(let i = 0; i < months.length; i++) {
    console.log(months[i]);
}

// ------------------------------------------------------------------------------------
// 📌 02 Array Methods
// ------------------------------------------------------------------------------------

/*
 * 🔖 01
 * array.push()
 *  It adds an element at the end of the array
*/
months.push('New Month 123');
console.log(months); // [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'New Month' ]

console.log(months.push('New Month 456')); // 14
// ⚠️ It returns the length of the array after adding the new element


/*
 * 🔖 04
 * array.unshift()
 * It adds an element at the beginning of the array
*/

months.unshift('I have been added at the start of the array');
console.log(months); // [ 'I have been added at the start of the array', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'New Month' ]


// ------------------------------------------------------------------------------------ 



/*
 * 🔖 02
 * array.pop()
 * It removes an element from the end of the array
*/

console.log(months); // [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'New Month', 'New Month 123', 'New Month 456' ]

// Let us remove the last element from the array
months.pop();

console.log(months); // [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'New Month' ]

/*
 * 🔖 03
 * array.shift()
 * It removes an element from the beginning of the array
*/

const removedValue = months.shift(); // Removes the first element from the array
console.log(`We have removed "${removedValue}" from the array`); 
console.log(months); // [ 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'New Month' ]


// ------------------------------------------------------------------------------------ 



/*
 * 🔖 05
 * array.splice(Add @, how many to remove)
 * It adds or removes elements from an array
 * - the first argument is the index at which the element should be added 
 * - the second argument is the number of elements to be removed
*/
months.splice(2, 0, 'v1', 'v2', 'v3'); // Adds the elements at the specified index
console.log(months); // [ 'Feb', 'Mar', 'Apr', 'New Month 123', 'New Month 456', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'New Month' ]  

/*
 * 🔖 06
 * array.slice(start from, selection range)
 * It returns a new array with the elements from the specified start to end index
*/

const monthsCopy = months.slice(2, 6); // Returns a new array with the elements from the specified start to end index
console.log(monthsCopy); // 


/**
 * ------------------------------------------------------------------------------------
 * Summary
 * ------------------------------------------------------------------------------------
 */

const monthsOfYear = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

/**
 * 🔖 01
 * array[index]
 * It returns the element at the specified index
 */
console.log(monthsOfYear[2]); // Mar

/**
 * 🔖 02
 * push()
 * Adds the value at the end of the array
 */
monthsOfYear.push('New Month');
console.log(monthsOfYear); // [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'New Month' ]


/**
 * 🔖 03
 * pop()
 * Removes the last element from the array
 */
monthsOfYear.pop();
console.log(monthsOfYear); // [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

/**
 * 🔖 04
 * shift()
 * Removes the first element from the array
 */
monthsOfYear.shift();
console.log(monthsOfYear); // [ 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]


/**
 * 🔖 05
 * unshift()
 * Adds the value at the beginning of the array
 */
monthsOfYear.unshift('New Month 💖');
console.log(monthsOfYear); // [ 'New Month 💖', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]


/**
 * 🔖 06
 * splice(fromIndex, no_of_elements)
 * It adds or removes elements from an array
 * - the first argument is the index at which the element should be added 
 * - the second argument is the number of elements to be removed
 */
monthsOfYear.splice(3, 3, 'New 😀👏🧩 members');
console.log(monthsOfYear); // [ 'New Month 💖', 'Feb', 'Mar', 'New 😀👏🧩 members', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]

/**
 * 🔖 07
 * slice(fromIndex, toIndex)
 * It returns a new array with the elements from the specified start to end index
 */
const monthsOfYearCopy = monthsOfYear.slice(2, 4);
console.log(monthsOfYearCopy); // [ 'Mar', 'New 😀👏🧩 members', 'Apr', 'May' ]


/**
 * 🔖 08
 * concat()
 * Join several arrays into one
 */
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const dates = [1, 2, 3, 4, 5, 6, 7];
const all = days.concat(dates);
const all2 = dates.concat(days);
console.log(all); // [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 1, 2, 3, 4, 5, 6, 7 ]
console.log(all2); // [ 1, 2, 3, 4, 5, 6, 7, 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]

/**
 * 🔖 09
 * join('') - convert array data into a single string
 * Returns a string with all array values joined.
 */
const data = [1, 2, 3, 4, 5, 6, 7];
const joinData = data.join(' 💖 ');
console.log(joinData); 

/**
 * 🔖 10
 * array.length()
 * returns the length of the array
 */
console.log(data.length); // 7

/**
 * 🔖 11
 * reverse()
 * Reverse the order of the elements in an array
 */
const reverseData = data.reverse();
console.log(reverseData); // [ 7, 6, 5, 4, 3, 2, 1 ]

/**
 * 🔖 12
 * tostring()
 * Returns a string with all array values joined.
 */
const toStringData = data.toString();
console.log(toStringData); // 7,6,5,4,3,2,1


//  --------------------------------------------------------------------------
//  Array methods for Looping 
//  --------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * ✅ 01
 * array.forEach() - Perform calculations on each array element, without creating a new array
 * 
 * It executes a provided function once for each array element.
 * .foreach() retruns - NOTHING ❌ undefined
 */
// months.forEach((month, index) => {
//     console.log(`${index + 1}. ${month}`);
// });

numbers.forEach((number)=>{
    console.log(number *2);
}) 

/**
 * ✅ 02
 * array.map() - Stores the result in a new array
 * 
 * It creates a new array by applying a specified function to each element of the original array. 
 * It returns a new array with the transformed values, leaving the original array unchanged.
 * It is commonly used for data manipulation and transformation.
 * 
 * Features:
 * 🔖 With the map() method is chainable 🔗 with reduce(), sort(), filter() etc.
 * 
 * .map() returns - NEW ARRAY ✅
 */

const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

console.log(doubledNumbers); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]


/**
 * ✅ 03
 * array.filter() - Create a new array with searched results
 * 
 * The filter() method of Array instances creates a "shallow copy" of a portion of a given array, 
 * filtered down to just the elements from the given array that pass the test implemented by the provided function.
 * 
 * .filter() returns - NEW ARRAY ✅
 */

// Example 1
ages = [30, 16, 18, 27, 19, 20, 14, 12, 32, 33, 21, 40];
function checkAge(age) {
    return age >= 18;
}
const adults = ages.filter(checkAge); // It will filter out the ages greater than or equal to 18
console.log(adults); // [ 30, 18, 27, 20, 32, 33, 21, 40 ]


// Example 2
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6); // It will filter out the words with length greater than 6
console.log(result); // [ 'exuberant', 'destruction', 'present' ]


/**
 * ✅ 04 
 * array.findIndex() - Find the first occurrence of required element in an array
 * 
 * It returns the index of the first element in the array that satisfies the provided testing function. 
 * Otherwise, it returns -1, indicating that no element passed the test.
 */

const range = [2, 9, 4, 5, 6, 33, 25, 17, 11];
function checkRange(range){
    return range > 18;
}

// It will return the 🔢 "index of" the 🔖 first element in the array that satisfies the provided testing function.
console.log(range.findIndex(checkRange)); // 5

// ---------------------- Some() vs Every () -------------------------------------- 👏👏👏👏

/**
 * ✅ 05 
 * array.some() - Does any required value exit in the array?
 * 
 * It checks if at least one element in the array passes the test implemented by the provided function.
 * 
 * Returns: Boolean
 */

console.log(range.some(checkRange)); // true


/**
 * ✅ 06
 * array.every() - Do ALL/EVERY required value exit in the array?
 * It checks if all elements in the array pass the test implemented by the provided function.
 * 
 * Returns: Boolean
 */

console.log(range.every(checkRange)); // false



// ---------------------- Some() vs Every () -------------------------------------- 👏👏👏👏

/**
 * ✅ 07
 * array.reduce() - Start performing actions from the 🔖 FIRST 🔖 ELEMENT of the array
 * 
 * It executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * 
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, 
 * and is provided as an argument in the next call to the callback function.
 * 
 * ⚠️ Starts from the first number in the array and moves to the last number
 */

const dataSet = [32, 16, 40, 3, 15, 19, 48, 37];
const initialValue = 0;

const sum = dataSet.reduce((sum, item) => {
    // console.log(`accumulator: ${sum}, item: ${item}`);
    return sum + item;
}, initialValue);

console.log(sum); // 210

/**
 * ✅ 08
 * array.reduceRight() - Start performing actions from the 🔖 LAST 🔖 ELEMENT of the array
 * 
 * Subtract the numbers, right-to-left, and display the sum.
 * ⚠️ Starts from the last number in the array and moves to the first number
 */

function sum_reducer(sum, item){
    return sum + item;
}

let total = dataSet.reduceRight(sum_reducer)
console.log(total); // 210

