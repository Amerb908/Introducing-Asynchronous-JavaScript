// Using Promises in JavaScript

/*
  Promises are used to handle asynchronous operations in JavaScript. They are objects that represent the eventual completion or failure of an asynchronous operation.
*/

// Basic Promise Usage:
const promise = new Promise((resolve, reject) => {
    // Asynchronous operation code
    if (/* operation successful */) {
      resolve('Success');
    } else {
      reject('Failure');
    }
  });
  
  // Handling a promise:
  promise.then((result) => {
    console.log(result); // Handle success
  }).catch((error) => {
    console.log(error); // Handle error
  });
  
  // Chaining Promises:
  fetch('https://api.example.com/data')
    .then(response => response.json()) // Transform response to json
    .then(data => {
      console.log(data); // Handle data
    }).catch(error => {
      console.error('Failed:', error); // Handle any error in chain
    });
  
  // Promise.all for multiple promises:
  Promise.all([promise1, promise2])
    .then((results) => {
      console.log(results); // Array of results from all promises
    }).catch((error) => {
      console.error('Error:', error);
    });
  
  /*
    Promises help manage asynchronous operations by allowing to chain operations and handle errors effectively.
  */
  