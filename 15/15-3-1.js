class NumberRelations{
    constructor(a,b){
        this._a = a
        this._b = b
    }
    get multiple(){
        return this._a*this._b
    }
    get add(){
        return this._a+this._b
    }
}

let twoAndThree = new NumberRelations(2,3)
console.log(twoAndThree.multiple);
console.log(twoAndThree.add);