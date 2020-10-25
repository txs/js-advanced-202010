var globalNum = 18

function test(){
    // var globalNum = 15 //區域變數優先於全域變數
    console.log(globalNum); // 找不到區域 找全域
}

test()