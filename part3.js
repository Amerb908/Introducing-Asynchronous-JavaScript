// Implementing a Promise-based API in JavaScript

/*
  Implementing a promise-based API typically involves wrapping asynchronous operations with promises. This provides a cleaner and more manageable handling of asynchronous results than traditional callback functions.
*/

// Example of a simple promise-based API using setTimeout to simulate asynchronous behavior:
function alarm(name, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        reject(new Error("Delay cannot be negative"));
      } else {
        setTimeout(() => {
          resolve(`Wake up, ${name}!`);
        }, delay);
      }
    });
  }
  
  // Usage of the alarm function with async/await for better readability and error handling:
  async function setAlarm() {
    try {
      const message = await alarm("John Doe", 1000);
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  }
  
  setAlarm();
  
  /*
    Key Points:
    - Promises allow handling both successes and errors in a clean workflow.
    - Async/await can be used for even simpler syntax and control flow.
  */
  