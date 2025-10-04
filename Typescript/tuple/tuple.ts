let ourtuple: [number  , boolean , string ]

// init outer tuple 

ourtuple = [23 , false , "Coding God was here "]

console.log(ourtuple)
console.log(typeof  ourtuple)

// push an elment in out tuple 

ourtuple.push("Hellow now i'm available ")

console.log(ourtuple)


const readonlyTuple : readonly [number , boolean , string ] = [23 , true , "I'm here bro "]

// readonlyTuple.push("Hey there i'm aviable  ") 
// Property 'push' does not exist on type 'readonly [numberboolean, string]'.



