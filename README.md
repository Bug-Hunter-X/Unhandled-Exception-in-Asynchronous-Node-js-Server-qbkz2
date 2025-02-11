# Unhandled Exception in Asynchronous Node.js Server

This repository demonstrates a common error in Node.js: unhandled exceptions within asynchronous callbacks leading to silent server crashes. The provided code simulates an asynchronous operation that may throw an error.  Without proper error handling, this error causes the server to terminate without any clear indication of what went wrong.

The solution demonstrates how to use `try...catch` blocks within the asynchronous callback or utilize `process.on('uncaughtException')` for global unhandled exception handling, albeit with caveats.

## How to reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Observe the server behavior (it might crash or return 'OK' randomly).
4. Then run `node bugSolution.js` to see the corrected version.