// Run in Chrome Console
function saySomething(words){
    return new Promise((resolve,reject) =>{
        if(words ==="shit"){
            reject('不准說髒話')
        }else{
            resolve(words)
        }
    })
}

let actions = [saySomething('Hello'),saySomething('Hi')]
let promises = await Promise.all(actions)
console.log(promises);