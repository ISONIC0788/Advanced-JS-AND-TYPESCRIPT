const myObj = {
    name: "John",
    age: 30 ,
    cars: [
        {name: "Fords" , models: ["Fiest" , "Focus" , "Mustang"]},
        {name: "BMW" , models: ["320" , "x3" , "x5"]},
        {name: "Fiat" , models: ["500" , "Panda"]}
    ]
}

let txt = ""

for (let i in myObj.cars){
  txt += "\n" + myObj.cars[i].name + "\n"  // for printing name 
  for (let j in myObj.cars[i].models){
    txt += myObj.cars[i].models[j] + "\n" // for printing array model
  }
}

console.log(txt)

const person = {
    firstName : "John",
    lastName : "Doe",
    id: 5566 ,
};

person.name  = function () {
    return  (this.firstName + " " + this.lastName).toUpperCase() 
}

console.log(person.name())