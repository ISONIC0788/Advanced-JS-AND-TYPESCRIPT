function timeWaiting(ms){
    new Promise((ms)=> setTimeout((resolve)=> console.log("finished ") ) , ms)
}
// collect function 

function timeWaiting(ms){
  return new Promise((resolve)=>{
     setTimeout(()=>{
        console.log("Yet finished");
        resolve()  // to tell promise we have done 
     } , ms)
  })
}

timeWaiting(2000)
.then(console.log('After waiting in function'))
.catch((err)=> console.error(err))
.finally(()=>console.log('have done'))


async function Provide(){
    await  timeWaiting(2000)
    console.log("After waiting")
}

Provide()
