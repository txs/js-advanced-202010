

// addFun(1,2) // addFun is not a function
//原因用 function expression 會有順序性的問題

var addFun = function add(a,b){
    return a+b
}
