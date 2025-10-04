// to declare variable in typescript 

const car: {type: string , model: string ,year: number} = {
      type:"Toyota",
      model: "Corolla",
      year: 2009
}


console.log(car)


// for type infred where typescript gues data type of 

const  car1= {
    type: "Toyota",
};

car1.type = 'Ford';
// car.type = 34 // Type 'number' is not assignable to type 'string'.

const cars:{type:string  , mileage?:number }= {
    type:"Toyota"
}
cars.mileage = 2000 ;


console.log(cars)


const nameAgeMap: {[index:string]: number} = {}

nameAgeMap.jack= 25 ;

// nameAgeMap.mark= "kalisa" // error message Type 'string' is not assignable to type 'number'. 

