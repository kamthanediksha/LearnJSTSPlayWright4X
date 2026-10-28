//Map and Filters

//every vs some

//every - All must pass

console.log([80,95,85].every(s => s >= 70 )); // s is just a variable
console.log([80,60,85].every(i => i >= 70 )); // i is just a variable

//some - Atleast one must be true
console.log([80,60,85].some(i=> i >=70 )); // i is just a variable
console.log([80,60,85].some(i=> i <70 )); // i is just a variable

console.log([80,95,85].some(s => s < 70 )); // s is just a variable