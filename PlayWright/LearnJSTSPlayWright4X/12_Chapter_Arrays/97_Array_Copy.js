let original = [1,2,3];
let copy1 = [...original]; // spreaad creates new Array
// console.log(original) ;
// console.log(copy1);

let copy2 = original.slice() ; // Slice creates the new Array
copy2.push(93);
copy1.push(92) ;
console.log(original) ;
console.log(copy1);
console.log(copy2) ;

let deep_copy_array = original ;// original is assigned to array then original values also changes

deep_copy_array.push(97);
console.log(original) ;
console.log(deep_copy_array) ;