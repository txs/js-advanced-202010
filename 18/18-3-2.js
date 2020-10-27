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

// 使用 async/await
async function myTask(){
    try{
        var result1 = await task(1)
        console.log(result1);
        var result2 = await task(2)
        console.log(result2);
    }catch(error){
        console.log(error);
    }
}
myTask()