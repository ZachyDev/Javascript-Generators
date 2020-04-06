// define a function ad convert it to a generator
function* hello(){
    yield;
}
let gen = hello();
console.log(gen.next());//false
console.log(gen.next());//true
console.log(gen.next());//true



