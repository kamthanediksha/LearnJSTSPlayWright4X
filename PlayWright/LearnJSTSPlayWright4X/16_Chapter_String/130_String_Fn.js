// String Properties & basic access

let a = "dasdad\nadasdasd" ;
let a2 = 'dasdad "a" sdas\nadad' ;

let str = "Hello, World!" ;
console.log(str.length) ; // 13 (start from 1 & count spaces and special characters)
console.log(str[0]) ; // H
console.log(str[7]) ; // W

console.log(str.at(-1)) ; // ! (last character)
console.log(str.at(-6)) ; // W (6th character from the end)

console.log(str.charAt(0)) ; // H
console.log(str.charCodeAt(7)) ; // 87 (ASCII code of W)