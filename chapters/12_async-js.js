/* ************************************
    Chapter 12 Asynchronous JavaScript
************************************* */

// 📌 01 Intervals and Timers
// const myInterval = setInterval(() => {console.log('Hello World');}, 1000);

// clearInterval(myInterval); // It is only useful when we want to stop the interval after a certain time.

// clearTimeout(myInterval); // It is only useful when we want to stop the interval after a certain time.


// 📌 02 Introduction to Asynchronous JavaScript
// const functionOne = () => {
//     console.log('Function One');

//     // Delay for 2 seconds
//     functionTwo();

//     console.log('Function One, Part 2');
// }

// const functionTwo = () => {

//     // Delay for 2 seconds
//     setTimeout(() => {
//         console.log('Function Two');
//     }, 2000);

// }


// functionOne();


// 📌 03 Asynchronous JavaScript and Callback Hell

// const fetchUser = (username, callback) => {

//     // Delay for 2 seconds
//     setTimeout(() => {
//         console.log('Now we have the user');
//         callback({ user: username });
//     }, 2000);

// }

// const fetchUserPhotos = (username, callback) => {
    
//     // Delay for 2 seconds
//     setTimeout(() => {
//         console.log('Now we have the photos');
//         callback(['photo1', 'photo2']);
//     }, 2000);
// }

// const fetchPhotoDetails = (photo, callback) => {

//     // Delay for 2 seconds
//     setTimeout(() => {
//         console.log('Now we have the photo details');
//         callback('Photo Details');
//     }, 2000);
// }   

// const user = fetchUser('John', (user) => {

//     // Print user's name
//     console.log(user);

//     // Fetch the photos after 2 seconds
//     fetchUserPhotos(user.user, (userPhotos) => {
//         console.log(userPhotos);

//         // Fetch the photo details after 2 seconds
//         fetchPhotoDetails(userPhotos[0], (details) => {
//             console.log(details);
//         });


//     });

// });

// 📌 04 Promises
/**
 * A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.
 */

// Creation of the promise
// const promise = new Promise((resolve, reject) => {
    
//     // Delay for 2 seconds
//     setTimeout(() => {
//         console.log('Got the user');
//         resolve({user: 'Adrian'});
//     }, 2000);

// });

// getting the data from Promise
// .then() - it is used to get the data from the promise
// .catch() - it is used to handle the error
// promise
//     .then((user) => {
//         console.log(user);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// --------------------------------------------------------------------------
// 😀 Refactruing the code
// --------------------------------------------------------------------------


const fetchUser = (username) => {
    return new Promise((resolve, reject) => {
        // Delay for 2 seconds
        setTimeout(() => {
            console.log('Now we have the user');

            resolve({ user: username });
        }, 2000);
    });
};


const fetchUserPhotos = (username) => {
    return new Promise((resolve, reject) => {
        // Delay for 2 seconds
        setTimeout(() => {
            console.log('Now we have the photos');

            resolve(['photo1', 'photo2']);
        }, 2000);
    });
};

const fetchPhotoDetails = (photo) => {
    return new Promise((resolve, reject) => {
        // Delay for 2 seconds
        setTimeout(() => {
            console.log('Now we have the photo details');

            resolve('Photo Details');
        }, 2000);
    });
};


const user = fetchUser('John', (username) => {

    console.log(username);

    fetchUserPhotos(username, (userPhotos) => {
        console.log(userPhotos);

        // Fetch the photo details after 2 seconds
        fetchPhotoDetails(userPhotos[0], (details) => {
            console.log(details);
        });
    });

});

// Call the function
// fetchUser('Adrian')
//     .then((user) => fetchUserPhotos(user))
//     .then((photos) => fetchPhotoDetails(photos[0]))
//     .then((details) => console.log(details))
//     .catch((error) => console.log(error));

const displayData = async () => {
    const user = await fetchUser('Adrian');
    const photo = await fetchUserPhotos(user);
    const detail = await fetchPhotoDetails(photo[0]);

    console.log(detail)
}


// 📌 05 Async/Await

// const fetchNumber = async () => {
//     return 25;
// }

// fetchNumber().then(result => {
//     console.log(result); // 25
// })