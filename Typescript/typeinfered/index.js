// type infred is when ts it guieesing data type based on initial value 
var message = "Hello";
//message = 123 ;  //  Type 'number' is not assignable to type 'string'
function add(a, b) {
    return a + b;
}
add(3, 5);
// // add("2", "3"); // Error: Argument of type 'string' not assignable to parameter of type 'number
console.log(add(3, 4));
var user = {
    name: "Ebedi",
    age: 22
};
