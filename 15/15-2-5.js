class Animal{
    constructor(name){
        this.name = name
    }
}

class Dog extends Animal{
    constructor(name, color){
        super(name)
        this.color = color
    }
}

let myDog = new Dog('myDog', 'white')
console.log(myDog.name);
console.log(myDog.color);