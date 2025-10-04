const person = {
    fname : "John",
    lname : "Doe",
    age: 25 
};

// adding new property in object 

person.nationality = "English"

let txt = "";

for (let x in person){
  txt += person[x]+ " ";
}

console.log(txt)






const person1 = {
    fname: "Kevin",
    lname: "Mugisha",
    age : 34,
    nationality : "France"
}

delete  person1.nationality

let message = "";

for(let x in person1){
   message += person1[x] + " ";
}

console.log(message)

//nested object

myObj = {
    name: "John",
    age: 30 ,
    cars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
}

console.log(myObj.cars.car2)
console.log(myObj.cars['car3'])
console.log(myObj['cars']['car1'])