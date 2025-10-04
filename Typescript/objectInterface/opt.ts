interface  Person {
    name: string,
    age?: number 
}

const user1: Person = {name:"Ebedi"};
const  user2: Person = {name:"kalise" ,age: 23 }

console.log("Hello" , user1.name)
console.log(user2)