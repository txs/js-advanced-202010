// this under object

var obj = {
    name: 'Jack',
    printName: function(){
        // console.log(this);
        console.log(this.name);
    }
}

obj.printName()