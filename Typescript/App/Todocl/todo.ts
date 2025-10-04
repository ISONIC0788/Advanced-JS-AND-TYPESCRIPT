// import { ReadLine } from './node_modules/@types/node/readline.d';
import * as readline from "readline"

type Todo = {
    id:number; // uid for each task
    text:string;//task desc 
    completed : boolean;// whether task is done or not 
};

let todos: Todo[] = []; // array to hold our taska 


const rl = readline.createInterface({
    input: process.stdin ,
    output: process.stdout,

});

function askNewTodo(){
    rl.question("Enter a new task" ,(text:string)=>{
        const newTask: Todo = {
            id: Date.now(),
            text,
            completed:false
        };
        todos.push(newTask)
        console.log("Task added ")
        rl.close();
    });
}

