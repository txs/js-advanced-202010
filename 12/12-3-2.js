var promise = new Promise((resolve,reject)=>{
    var isSucess = true
    if(isSucess){
        resolve(1)
    }else{
        reject(-1)
    }
})

console.log('執行', promise);
promise.then(result =>{
    console.log("成功回應1: ", result);
    return promise
}).then(result=>{
    console.log("成功回應2: ", result);
    throw new Error("未預期錯誤")
})
.catch(error=>{
    console.log("錯誤回應: ",error);
})