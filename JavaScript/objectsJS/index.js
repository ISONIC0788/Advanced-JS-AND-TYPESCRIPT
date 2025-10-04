// if you understant object you now javascript 
// every thing in javascript are object 
// Boloean can be object (if is difined with new key  word )
// Number can be object (if is difined with new key  word )
// String  can be object (if is difined with new key  word )
//Date are always objects
//Math are always objects
//Regura expression  are always objects
//array are always objects
//Functions  are always objects
//Object are always objects
/**
 * 
 *  except primitive value 
 * string
number
boolean
null
undefined
symbol
bigint
 */

// to declare object 

const person = {firstName : "John" , lastName:"Doe" , age: 50 , eyeColor: "blue"}

// creating an empty object and add four property 

const person2  = {};
person2.firstName = "Ebed";
person2.lastName = "Meleck";
person2.age = 24;
person2.eyeColor = "Red"

console.log(person2.firstName + " is " + person2.age + " years Old")


// creating object using new object 
const person3 = new Object();
person3.firstName = "Ebed";
person3.lastName = "Meleck";
person3.age = 34 ;
person3.eyeColor  = "white"

console.log(person3.firstName + " has " + person3.eyeColor + "Eye color ")

// object is mutable 

const person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 50 ,
    eyeColor: "Blue"
}

const x = person4;  //this is x === person4 
x.age = 10 ;


console.log(person4.firstName + " is this " + person4.age + " years Old ")
