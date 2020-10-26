firtAsync()
.then(function(data1){
    return secondAsync()
})
.then(function(data2){
    return thirdAsync()
})
.then(function(data3){
    return data3
})