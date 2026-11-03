let a1 = {
name : "John" 
};

let a = { status : "pass" } ;
console.log(a.status) ; // pass
console.log(a["status"]) ; // pass

let a2 = { status : "pass", Status : "fail" } ;
console.log(a2["status"]) ; // pass
console.log(a2["Status"]) ; // fail

