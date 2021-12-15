function receivesAFunction(callback) {
    callback() ;
}

function returnsANamedFunction() {
   return (function bits() {
        console.log('Immediately invoked function execution');
    })
}
function returnsAnAnonymousFunction() {
    return (function() {
         console.log('Immediately invoked function execution');
     })
 }