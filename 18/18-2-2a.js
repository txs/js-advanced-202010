// Run in Chrome Console
function saySomething(words){
    return new Promise((resolve,reject) =>{
        if(words ==="shit"){
            reject('不准說髒話')
        }else{
            setTimeout(function(){
                resolve(words)
            },words*1000)
            
        }
    })
}

let actions = [saySomething(2),saySomething(5)]
let promises = await Promise.all(actions)
console.log(promises);