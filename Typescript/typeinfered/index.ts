// type infred is when ts it guieesing data type based on initial value 

let message ="Hello";
//message = 123 ;  //  Type 'number' is not assignable to type 'string'


function add(a:number , b:number ):number {
     return  a + b 
}

add(3 , 5 )
// // add("2", "3"); // Error: Argument of type 'string' not assignable to parameter of type 'number

console.log(add(3, 4))

// interface and type alias 

interface  Person {
    name: string ,
    age: number 
}

const user: Person = {
    name: "Ebedi",
    age: 22
}

// type alias 

type Point= {
  x:number ,
  y:number 
}