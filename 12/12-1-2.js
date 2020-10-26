// Async

function start(){
    console.log('Start');
}
function doSomething(callback){
    setTimeout(function(){
        console.log('Do something');
        callback()
    },1000)
}
function end(){
    console.log('End');
}
function main(callback){
    start()
    callback(end)
    
}
main(doSomething)

