// callstak using to store and manage function call 
//call stack is like to do list in javascript 
// when function is called called pushed into the stuck
// when finneshed runng its popped off the stack
// It handles synchronous code — one thing at a time, top to bottom. 
/**
 * Top 
 * to 
 * bottom 
 * 
 * 
 */

function sayHi() {
    console.log("HI");
}

function greeting(){
    sayHi() // pushed the stuck 
}

greeting();// pushed he stack 