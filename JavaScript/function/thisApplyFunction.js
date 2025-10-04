const person = {
    fullName: function(){
        return this.firstName +" "+ this.lastName 
    }
}

const  person1 = {
      firstName:"ITUZE",
      lastName:"AGACYO"
}

const person2 = {
      firstName: "IRIHO",
      lastName: "Miriam"
} 


console.log(person.fullName.apply(person1))

// diffence between call() and apply ()
//call() method takes arguments separetely 
// apply() method take arguments  as any array 


const students = {
    fullName: function(city , country){
      return  this.firstName + " " + this.lastName +" "+ city +" " + country
    }
}


const  student1 = {
    firstName:"Ebedi",
    lastName:"Meleck"
}

console.log(students.fullName.apply(student1 , ["kigali" , "Rwanda"]))

console.log(Math.max(2 , 4 ,  5 ))

console.log(Math.max.apply(null , [1 ,45 , 32]))

console.log(Math.max.apply("" , [2 , 32 , 12 ]))