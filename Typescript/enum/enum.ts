//enum is special class that allow to store consitant variable 

enum CardinalDirections {
    North ,
    East ,
    South ,
    West
};

let currentDirection = CardinalDirections.North;


// console.log(CardinalDirections)
console.log(currentDirection)

enum StatusCodes {
    NotFound = 404 ,
    Success =  200 ,
    Accepted = 202, 
    BadRequest = 400
}


console.log(StatusCodes.NotFound)
console.log(StatusCodes.BadRequest)



