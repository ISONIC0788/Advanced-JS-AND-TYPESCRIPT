/*******
 * unknown specialtype is similar but safer altenative to any 
 * TypeScript will prevent unknown types from being used
 * 
 * 
 * 
 * 
 */

let w: unknown = 1 ;
w= "string";
w= {
    runANonExistentMethod: () =>{
        console.log("I think before there iam")
    }
}as {runANonExistentMethod: () => void }

if(typeof  w === 'object' && w !== null){
  (w as {runANonExistentMethod: Function}).runANonExistentMethod()
}


// let g:unknown = 3 ;

// g = "string";

// g = {
//     runANonExistentMethod: ()=>{
//         console.log("you can make mor professional ")
//     }

// }as {runANonExitentMethod: void()}