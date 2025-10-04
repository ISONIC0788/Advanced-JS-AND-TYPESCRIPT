function waitetimer (ms) {
    return  new Promise((resolve , reject )=>{
        setTimeout(()=>{
            console.log('Done waiting bro ')
            resolve()
        }, ms )
    })
}


waitetimer(2000)
.then(()=>{
    console.log('after waiting ')
})
.catch((err)=>console.error(err))
.finally(console.log('finaly had '))



async function promiseBro(){
    await  Promise.all(
        [
            waitetimer(3000),
            waitetimer(4000)
        ]
    )
}