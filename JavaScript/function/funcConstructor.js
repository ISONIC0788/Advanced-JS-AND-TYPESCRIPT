// javascript function constructor 

// Function can also be defined by using javascript construtor   Function()

const myFunction  = new Function("a" , "b" , "return a * b ")

console.log(typeof myFunction)

console.log(myFunction(3 , 5))


// function hoisting 
// hoisting is default behavior of moving  declaration to the top of current scope 
// example 


console.log(funcHello())

function funcHello(){
    console.log("Hello Borther I'm ebedi");
}