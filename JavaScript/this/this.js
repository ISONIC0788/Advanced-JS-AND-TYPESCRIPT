const person = {
    firstName:"Ebedi Meleck",
    lastName:"ITUZE AGACYO",
    id:5566,
    fullName:function(){
        return  this.firstName + this.lastName
    }
}

console.log(person)
console.log("Full Name of user ",person.fullName());

// this keyword learnig 

console.log("This is an object \\this keyword refers to an object. ");

// The this keyword refers to different objects depending on how it is used:

console.log("\n in object method , this  refers to an object ")

console.log("\n Alone this refers to global object ")

console.log("\n in function refers to global object ")

console.log("\n in function , in strict mode , this is undefined ")

console.log("\n in an event this refers to element that received the event")
console.log("\n Method like  call() , apply()  and bind() can refer this to any object ")
// this it global objetc 

let j = this;

console.log(j)

console.log(myFuncThis());

function myFuncThis(){
    return  this;
}