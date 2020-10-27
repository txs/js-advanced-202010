// Runs in Chrome console
function task(value){
    return new Promise((resolve,reject)=>{
        if(!value)
            reject("錯誤，無輸入參數！")
        else
            setTimeout(()=>{
                resolve("task "+ value+ " is done")
            },2000)
    })
}

// 使用 then
task(1)
.then(result =>{
    console.log(result);
    return task(2)
})
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})