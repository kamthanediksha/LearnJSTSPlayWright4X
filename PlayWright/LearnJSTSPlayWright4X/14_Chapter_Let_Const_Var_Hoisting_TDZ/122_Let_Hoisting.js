// console.log(greeting) ; // Error - Let never hoists the variable to the top of the block. 
// It is in a temporal dead zone (TDZ) from the start of the block until the declaration is processed.
let greeting = "hello";
console.log(greeting) ;