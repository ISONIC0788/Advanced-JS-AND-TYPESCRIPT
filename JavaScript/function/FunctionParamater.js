function  myFunction(x , y) {
    if(y === undefined){
       y= 3 
    }

    return x * y 
}

// alled with missing arguments (less than declared), the missing values are set to undefined

console.log("Function with one missing argument")
console.log(myFunction(3))


// javascript function with default parameter 

function myName(x , y = 20){
   return  x * y 
}
console.log("Function with default value of parameter ")
console.log(myName(3))