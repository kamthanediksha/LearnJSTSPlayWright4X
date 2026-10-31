// var is actual traitor - cheator
// let is sincere person
// const is just const which will not change.

// VARIABLE - Fn Scoped - means it doesn't consider block instead it gives its code data to work outside of the block as well

var a = 10;
console.log(a);
function printHelloWorld () {
    console.log("Diksha is learning playWright");
var a =20;
console.log(a);
if(true){
    var a =30;
    console.log(a);
}
console.log(a);
}

printHelloWorld() ;