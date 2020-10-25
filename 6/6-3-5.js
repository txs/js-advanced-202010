function test(){
    console.log(this);
}

var testBind = test.bind({x:18})
testBind()