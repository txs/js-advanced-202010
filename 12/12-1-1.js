//Sync
function start(){
    console.log('Start');
}
function doSomething(){
    console.log('Do something');
}
function end(){
    console.log('End');
}
function main(callback){
    start()
    callback()
    end()
}
main(doSomething)

