let myName = {
    firstName: 'Jack',
    lastName: 'Wang'
}

for(var key in myName){
    console.log(key + ': ' + myName[key]);
}