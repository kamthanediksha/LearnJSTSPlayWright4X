let url = "https://www.google.com" ;
let status = "pass";
let message = `test completed in ${320}ms` ;
console.log(message) ; // test completed in 320ms


//Single quotes

let url1 = 'https://www.google.com' ;
console.log(url1) ; // https://www.google.com

//Double quotes

let url2 = "https://www.google.com" ;
console.log(url2) ; // https://www.google.com

//Template literals (backticks) - allows expressions, multi-line strings and string interpolation

let name1 = "Alice";
let msg = `Hello, ${name1}! 2+2 = ${2+2}. Welcome to the website.` ;
console.log(msg) ; // Hello, Alice! 2+2 = 4. Welcome to the website.

//Multi-line strings

let report = `Test : login
Status : pass
Time : 320ms` ;
console.log(report) ;
// Test : login
// Status : pass
// Time : 320ms

console.log(String(200));
console.log(String(true));
console.log(String(null));
String([1,2]);
