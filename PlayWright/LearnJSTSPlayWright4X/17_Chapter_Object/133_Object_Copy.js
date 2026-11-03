let a = {status : "pass"} ;
let b= a; // b is a reference to a copy of a
b.status = "fail"; // b is now a reference to a new object
console.log(a.status) ; // fail