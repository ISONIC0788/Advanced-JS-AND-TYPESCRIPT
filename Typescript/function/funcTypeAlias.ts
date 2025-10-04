type  Negate = (value:number) => number ;

const negateFunction:Negate = (value) => value * -1;

console.log(negateFunction(10))
