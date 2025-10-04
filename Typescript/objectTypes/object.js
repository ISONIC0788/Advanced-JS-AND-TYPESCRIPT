// to declare variable in typescript 
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
// for type infred where typescript gues data type of 
var car1 = {
    type: "Toyota",
};
car1.type = 'Ford';
// car.type = 34 // Type 'number' is not assignable to type 'string'.
var cars = {
    type: "Toyota"
};
cars.mileage = 2000;
console.log(cars);
var nameAgeMap = {};
nameAgeMap.jack = 25;
// nameAgeMap.mark= "kalisa" // error message Type 'string' is not assignable to type 'number'. 
