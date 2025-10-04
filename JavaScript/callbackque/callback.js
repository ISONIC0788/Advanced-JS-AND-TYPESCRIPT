// It’s a waiting line (queue) for async callbacks that are ready to run.
/*
  Whenever a Web API finishes its task (like a timer, or a network request), it pushes the callback function into this queue.
   Callbacks wait here until the JavaScript Call Stack is empty (meaning no synchronous code is running).
*/

console.log("Start")

setTimeout(()=> {console.log("Time out callback ")}
 , 0)

console.log("End")

/*
  +------------------+           +-----------------+           +------------------+
|  Call Stack      |  <----->  |  Event Loop     |  <----->  |  Callback Queue  |
|  (executes code) |           |  (checks stack) |           | (waiting callbacks)|
+------------------+           +-----------------+           +------------------+
          ↑                                                       ↑
          |                                                       |
    Runs synchronous code                              Async callbacks wait here
          |                                                       |
  Async tasks go to Web APIs (outside JS engine) ---→ when done push callbacks here

*/