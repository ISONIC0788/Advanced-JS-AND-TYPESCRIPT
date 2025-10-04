
//for checking argument length 

function checkArgLeng(a , b ){
    return  arguments.length
}


console.log( checkArgLeng(2 , 4 ))


//change function into string 

const changeStr = checkArgLeng.toString()

console.log(typeof checkArgLeng())
console.log(typeof changeStr)