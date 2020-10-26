var dog = {
    name: 'Momo',
    age: 5,
    eat: function(){
        console.log(this.name, '吃飼料')
    }
}

console.log(dog.name);
console.log(dog.age);
dog.eat()