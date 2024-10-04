// Detailed Asynchronous JavaScript Concepts

/*
  Asynchronous operations are crucial in web development for performing tasks like API requests, file operations, and timers without blocking the main thread.
*/

// Callbacks: Basic method for handling asynchronous operations.
// Drawbacks: Leads to callback hell when nested deeply.
function fetchData(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(null, data))
      .catch(error => callback(error, null));
  }
  
  // Promises: Provide a cleaner, chainable alternative to callbacks.
  const getData = (url) => {
    return fetch(url)
      .then(response => response.json());
  }
  
  // Using Promises:
  getData('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  
  // Async/Await: Syntactic sugar on top of promises, simplifies writing asynchronous code using synchronous-like syntax.
  async function loadUserData(userId) {
    try {
      const response = await fetch(`https://api.example.com/users/${userId}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  }
  
  /*
    Event Loop: JavaScript runtime uses the event loop to handle asynchronous callbacks.
    Microtasks (promises) and macrotasks (setTimeout, setInterval) are queued separately for efficient execution.
  */
  
  /*
    Key Advantages of Asynchronous Programming:
    - Improves application responsiveness.
    - Optimizes processing time and resource allocation by not blocking main thread.
  */
  
  /*
    Practices:
    - Use async/await for cleaner syntax and error handling.
    - Avoid deep nesting of callbacks to prevent complexity.
    - Combine async operations with error handling to improve reliability and user experience.
  */
  