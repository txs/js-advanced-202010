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

let actions = [saySomething('shit'),saySomething('Hi')]
let promises = await Promise.all(actions).catch(error =>{
    console.log(error);
})
console.log(promises);