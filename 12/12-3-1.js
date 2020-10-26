// function plusone(x){
//     return x+1
// }

// console.log(plusone(1));

// var arrowFunc1 = function(x){
//     return x+1
// }
// console.log(arrowFunc1(1));

// var arrowFunc2 = (x)=>{
//     return x+1
// }
// console.log(arrowFunc2(1));

var arrowFunc3 = (x)=> x+1
console.log(arrowFunc3(1));

var arrowFunc4 = x=> x+1
console.log(arrowFunc4(1));

var arrowFunc5 = ()=> 'Hello world'
console.log(arrowFunc5());

var add = (a,b)=>{console.log(a+b);}
add(3,4)