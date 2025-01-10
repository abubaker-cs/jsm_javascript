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

/**
 * ✅ 01
 * array.forEach()
 */


/**
 * ✅ 02
 * array.map()
 */


/**
 * ✅ 03
 * array.filter()
 */


/**
 * ✅ 04
 * array.findIndex()
 */


/**
 * ✅ 05
 * array.some()
 */


/**
 * ✅ 06
 * array.every()
 */


/**
 * ✅ 07
 * array.reduce()
 */


/**
 * ✅ 08
 * array.reduceRight()
 */