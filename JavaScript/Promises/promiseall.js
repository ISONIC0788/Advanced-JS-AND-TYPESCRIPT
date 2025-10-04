function  waitingMinute(ms , msg){
  return new Promise((resolve , reject )=>{
      setTimeout(()=>{
        console.log(msg)
        resolve() // to tell promise had been successfull
      },ms)
  })
}


async function start(){
    await  waitingMinute(2000 , "2 second ")
    console.log('done first')
    await waitingMinute(4000 , '4 sec ')
    console.log('done second ')
}

// start()

async function run(){
    await  Promise.all([
        waitingMinute(2000 , " 2 sec "),
        waitingMinute(4000 , " 4 sec")
    ])

    console.log('Both done ')
}

// run()


// Excerices 
/*
You need to make three waits happen at the same time:

Wait 2 seconds → then log "Boil water".

Wait 3 seconds → then log "Chop vegetables".

Wait 1 second → then log "Set the table".

After all three are done, log "Dinner is ready!".

*/

// frist create promise function  

function  waiter(ms , tsk){
    return new Promise((resolve , Rejected)=>{
       setTimeout(()=>{
          console.log(tsk)
          resolve()
       } , ms)
    })
}


async function startDinner() {
    await Promise.all([
        waiter(2000,"Boil water"),
        waiter(3000,"Chop vegetables"),
        waiter(1000,"Set the table"),
    ])
    console.log("Dinner is ready!")
    
}

startDinner()