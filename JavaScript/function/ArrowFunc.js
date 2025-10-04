// arrow function we don't need function keyword, the return keyword,  the curly brackets


// ES5 

var x = function (x , y){
  return  x * y 
}

// ES6 
const  x3 = ( x , y  ) => x * y 


// to use return keyword you use curl blacket 

const  x2 = ( x , y  ) => { return  x * y }


console.log(x2(3 , 5))


// arrow function 

//Arrow functions do not have their own this. They are not well suited for defining object methods.

// arrow function are not hoisted  they must be defined before they used 

// using const is safer than var   becouse fuction expression is always constitants value 



