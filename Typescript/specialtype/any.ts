// let u = true ;
// u = "String"  // // Error: Type 'string' is not assignable to type 'boolean'.
// u.runANonExistentMethod() //  // Error: Property 'runANonExistentMethod' does not exist on type 'boolean'.
// Math.round(u); //Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

/*
 ANY: is special type that allow to disable type checking and effectily allows all type to be used 
 : any 
*/

// correct code 

let v: any = true ;
v = "string";
console.log(Math.round(v));

let userName: any = true ;

userName = "string"

console.log(Math.round(userName));