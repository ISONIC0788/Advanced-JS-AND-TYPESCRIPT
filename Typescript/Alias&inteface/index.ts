type CarYear = number;
type CarType = string ;
type CarModel = string ;
type Car = {
    year: CarYear,
    type: CarType ,
    modal: CarModel
};


const carYear:CarYear = 2001 ;
const carType:CarType = "Toyata";
const carModal:CarModel = "Corola";

const  car: Car = {
    year:carYear,
    type:carType,
    modal:carModal
}

console.log(car)

// type alias allow to defining  types with custom alias 

// used for primitives like string or more complex types such us object and arrays 


// let create my own 

type userName = string ;
type useAge = number ;
type userLocation = string ;

type  Person = {
      uName:userName,
      uAge:useAge,
      uLocation:userLocation
}

const  UserName: userName = "Ebedi";
const  UserAge: useAge = 23 ;
const  UserLocation: userLocation = "Kigali";

const person: Person ={
     uName:UserName,
     uAge:UserAge,
     uLocation:UserLocation
}


console.log(person)



