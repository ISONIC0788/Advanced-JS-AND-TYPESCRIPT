// represnt value tha can avaible now , later , never 


function waitingMinute (ms){
     return  new Promise((resolve , Rejected)=>{
         setTimeout(()=>{
          console.log("Waited 2 min.. later ")
           resolve()// if done tell promise 
         } , ms)
     })
}

waitingMinute(2000)
.then(()=>console.log('Done waiting '))
.catch((err) => console.error('Oops' , err))
.finally(()=> console.log('Finaly done'))


// Promise to respesnt value now later , never  waiting 3  minute 

function waiting3Minute(ms , minute ){
    return  new Promise((resolve)=>{
       setTimeout(()=>{
        console.log('Done Waiting 3 minute ')
        console.log('Minute' , minute)
        resolve()

       } , ms)
    })
}


async function showwaiting(){
    await  waiting3Minute(4000, 3)
    console.log("Work is done ")
}