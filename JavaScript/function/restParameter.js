// rest parameter allow more than one parameter and args used in function 
// repesent with (... args)

function sum(...args){
    let sum = 0;
    for (let arg of args)  sum += arg;
    return  sum 
}


console.log("Function that allow more than one  arg ment  ")

console.log(sum(4, 9, 16, 25, 29, 100, 66, 77))


// to check max arg in restParameter

console.log("Find max argument in given items ")

function findMax(){
    let max = -Infinity 
    for  (let i = 0 ; i < arguments.length ; i ++ ){
        if(arguments[i]> max ){
          max = arguments[i]
        }
    }
    return  max 
}

console.log(findMax(3 , 7 ,6 ))


// to sum all


function sumall(){
    let sum = 0 
    for (let i = 0 ; i <= arguments.length ; i++){
        sum +=arguments[i]

    }
    return  sum 
}

const output = sumall(3 , 4 ,4 )
console.log(output)