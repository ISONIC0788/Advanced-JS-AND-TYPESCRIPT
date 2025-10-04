// call method it can be used to invoke (call) method with an owner object as an arguments 

const  person = {
    fullName: function (){
        return  this.firstName +" "+this.lastName ;
    }
}

const person1 = {
    firstName: "ITUZE ",
    lastName: "Agacyo"
}

const person2 = {
    firstName: "IRIHO",
    lastName: "Miriam"
}

console.log("this example calls the full name method of person  , using it on person number 1 ")

console.log(person.fullName.call(person1))

console.log(person.fullName.call(person2))

const student = {
    fullName: function(city , country){
        return this.firstName +" "+ this.lastName+ " "+ city + " "+ country
    }
}

const student1 = {
    firstName:"Ebed",
    lastName:"ITUZE"
}

const student2 = {
    firstName: "IRIHO ",
    lastName: "MiRIAM"
}


console.log(student.fullName.call(student1 , "KIGALI" , "RWANDA"))
console.log(student.fullName.call(student2 , "BURUNDI" , "BUJUMBURA"))
console.log(student.fullName.call(person1 , "BURUNDI" , "BUJUMBURA"))


const group = {
    firstName:"Ebedi ",
    lastName:"Hello",
    fullName:function (){
        return  this.firstName + ""+ this.lastName
    }

}

const group1 ={
    firstName:"Epa",
    lastName:"Nishimirwe"
}

console.log(group.fullName.call(group1))