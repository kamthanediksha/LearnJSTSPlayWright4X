let a = 100;
console.log(a++ + ++a +a++ + ++a);
// 100 + 102 + 102 + 104 = 408
console.log(a); 
//104

// let a = 37;
// console.log(—a + a—);
// // 36 + 36 = 72
// console.log(a); //35

// let a = 5; 
// let b = a-- - --a; // 5 - 3 = 2
// console.log(b, a); // 2, 3

let i = 1; 
let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);
