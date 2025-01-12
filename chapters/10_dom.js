/* ************************************
    Chapter 10 DOM
************************************* */

// 📌 01 Introduction to DOM

window.onload = function () {

    // Get current date
    const currentDate = document.createTextNode(new Date().toString());

    // Select the h4 element and assign the date to it.
    const displayDate = document.querySelector('h4');
    displayDate.appendChild(currentDate); 
    
    // Bind the element to the DOM (h4 tag)
    document.body.appendChild(displayDate); 
}


// 📌 02 Selecting Elements

// Select the element by id
let element = document.getElementById('element-below-input');

// Select the element by HTML Tag name
let images = document.getElementsByTagName('img');

// Select the element by Elements
let dummylinks = document.querySelectorAll('span.link');




// 📌 03 Element Properties and Methods

/**
 * 
 * classlist
 * - A list of classes assigned to an element - not a string, it is an array
 * 
 * id
 * - String of the id assigned to an element
 * 
 * classname
 * - String of the class assigned to an element (more classes can be separated by spaces)
 * 
 * innerHtml
 * - inner content of the element - it has nested elements then in string form
 * 
 */


var ele = document.getElementById('div1');

// Provide information about the assigned classes to the selected ID
console.log(ele.classList); // Returns a list of classes in an array

console.log(ele.className); // Returns a string of classes separated by spaces

console.log(ele.id); // Returns the id of the element

console.log(ele.innerHTML); // Returns the inner HTML of the element

// ⚠️ Properties
/**
 * addEventListener
 * - Adds an event listener to an element, types can be:
 * - click
 * - mouseover
 * - mouseout
 * - keydown
 * - keyup
 * - keypress
 * - load
 * - scroll
 * - resize, etc
 * 
 * hasAttribute
 * - Checks if an element has an attribute
 * 
 * removeAttribute
 * - Removes an attribute from an element
 * 
 * getBoundingClientRect
 * - Returns the size of an element and its position relative to the viewport
 * 
 * removeEventListener
 * - Removes an event listener from an element
 * 
 * scroll
 * - Scrolls the document to the specified coordinates
 */


// 📌 04 Working with Classes

function menuClicked(currentElement){

    // Select all the menu items with the class .menu-item
    const menuItems = document.querySelectorAll('.menu-item');

    // Loop through the menu items and remove the active class
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active');
    }

    // Add the active class to the clicked element
    console.log(currentElement);

    // Add the active class to the clicked element
    event.target.classList.add('active');

}


// 📌 05 Creating, Traversing, and Removing Nodes

// Creating an HTML Tag using JavaScript
document.createElement('h1');

// Binding the element to the DOM
// document.body.appendChild(document.createElement(h1));

const subjects = document.querySelector(".subjects");
console.log(subjects.firstElementChild); // Returns the first child of the element
console.log(subjects.lastElementChild); // Returns the last child of the element

const favSub = document.querySelector(".fav-subject");
console.log(favSub.previousElementSibling); // Returns the previous sibling of the element
console.log(favSub.nextElementSibling); // Returns the next sibling of the element
console.log(favSub.parentElement); // Returns the parent of the element

/**
 * ✅ Methods to Traverse with nodes:
 * 1. childNodes
 * 2. firstChild
 * 3. lastChild
 * 4. nextSibling
 * 5. previousSibling
 * 6. parentNode
 */

// ❌ Removing NODES from the DOM
// ⚠️ Removed nodes will still remain in memory, and can be called back if needed
const removeItem =  document.querySelector(".remove_me");
removeItem.remove();