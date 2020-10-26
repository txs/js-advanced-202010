// 不能在 Node.js 跑，因為 Node 根本沒有 window

var xhr;
// console.log(window);
// console.log(ActiveXObject);
if(!!window){
    console.log('IE7+, Chrome, Firefox, Safari, Opera');
}else if(!!ActiveXObject){
    console.log('IE5, IE6');
}
else{
    console.log('Probably backend like Node.js');
}