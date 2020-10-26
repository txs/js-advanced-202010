let myInfo = {
    firstName: 'Jack',
    lastName: 'Wang',
    fullName: function(){
        return this.firstName + ' ' + this.lastName
    }
}

//call me Jacky
myInfo.firstName = 'Jacky'

console.log(myInfo.fullName());

// let firstName = myInfo.firstName
// let lastName = myInfo['lastName']

// console.log(myInfo);
// myInfo.age = 30
// console.log(myInfo);
// myInfo['age'] = 18
// console.log(myInfo);

// delete myInfo.age
// console.log(myInfo);