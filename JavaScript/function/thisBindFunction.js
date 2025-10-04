//bind allow to borrow  method from another object 
const person  = {
    firstName:"John doe",
    lastName: "Doe",
    fullName:function(){
     return this.firstName + " "+ this.lastName
    }
}

const member  = {
    firstName:"Hege",
    lastName:"Nilsen",
}

const member2 ={
    firstName:"Kalisa",
    lastName:"Heruku",
}
let  fullName = person.fullName.bind(member)

let fullNames = person.fullName.bind(member2)


console.log(fullName())
console.log(fullNames())