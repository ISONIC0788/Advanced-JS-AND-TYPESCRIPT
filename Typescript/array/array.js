var names = [];
names.push("Dylan");
// names.push(4)  // array.ts:3:12 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);
var cars = ["Ferari", "Bugati"];
//TS2339: Property 'push' does not exist on type 'readonly string[]'.8 cars.push("Toyota");
// cars.push("Toyota");
console.log(cars);
