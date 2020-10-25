Array.prototype.test = "abc"
var people = ['Jack', 'Tom', 'Peter']
for(var index in people){
    // console.log(index);
    // console.log(index + ": " + people[index]);
    // console.log(people.hasOwnProperty(index));
    if(people.hasOwnProperty(index)){
        console.log(index + ": " + people[index]);
    }
}