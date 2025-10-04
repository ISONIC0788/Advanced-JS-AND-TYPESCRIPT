// Javascript Promises represent value that may be aviable now , later or never 

// used like fetching data , waiting for timer  or reading file without blocking main thread 
/**
 * Pending 
 * Fulfilled 
 * Rejected 
 * 
 * Hint .then()   succes handler 
 * .then()  with data 
 *  . finaly()
 */

 fetch("https://irembo.api")
 .then(response => response.json())
 .then(console.log())
 .catch(error => console.error('Oops ',error))
 .finally(()=>console.log('fetchin done '))