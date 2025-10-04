const  car = {type:"Fiat" , modal:"500" , color:"white"}

console.log("Car type is ",car.type)
console.log(car)

// decrale object in letral line 

const person = {fristName:"Ebed" , lastName:"Doe" , age:50 , eyeColor: "blue"}

console.log("person age is ", person.age)
console.log("person age is " , person["age"])

// 
const person2 ={
    firstName: "John",
    lastName: "Doe",
    id : 5566 ,
    fullName: function (){
        return this.firstName + this.lastName
    }
} 
console.log(person2.fullName())
console.log("Person full name ",person2.fullName)// output Person full name  [Function: fullName]
console.log(person2)