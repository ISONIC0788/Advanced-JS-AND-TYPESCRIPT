// function can access varible inside the fuction 

(function myFuncOne(){
    let a = 4 ;
    console.log( a * a)
})()

//initial counter 
 let counter = 0 ;

function add(){
    counter += 1 ;
}

add()
add()
add()

console.log(counter)  // ouput = 3 

let counter1 = 0;

function add2(){
    let counter1 = 0;
    counter1 += 1 ;
}

add()
add()
add()  

console.log(counter1) // counter1 = 1 


function add3(){
    let counter2 = 0 ;
    counter2 += 1 ;
    return  counter2;
}

add()
add()
add()

console.log(add3())   

// to handle every isues


function  add4(){
    let counter = 0 ;
    function plus(){
        counter += 1;
    }
    
    plus()
    return  counter 

}



console.log(add4())  // 1
console.log(add4())  // 1
console.log(add4())  // 1
console.log("\n")

const add7 = (function (){
    let counter = 0 ;
    return function (){
        counter += 1 
        return  counter
    }
})()

console.log(add7())
console.log(add7())
console.log(add7())


function customCounter(){
    let counter = 0 
    function add(){
        counter += 1 
        return counter
    }
   return add()
}
console.log("\n")
// console.log(customCounter)
console.log(customCounter())
console.log(customCounter())



