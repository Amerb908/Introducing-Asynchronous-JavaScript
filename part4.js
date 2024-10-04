// Introduction to Web Workers in JavaScript

/*
  Web Workers allow JavaScript to perform tasks in background threads, enabling the main thread to run without being blocked by long tasks.
*/

// Creating a worker:
const worker = new Worker('worker.js');

// Sending messages to a worker:
worker.postMessage('Hello Worker');

// Receiving messages from a worker:
worker.onmessage = function(event) {
  console.log('Message from worker:', event.data);
};

// Handling errors in a worker:
worker.onerror = function(error) {
  console.error('Error in worker:', error.message);
};

// Terminating a worker:
worker.terminate();

/*
  Use cases:
  - Offloading intensive computations.
  - Handling real-time data processing.
*/
