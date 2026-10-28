let results = ["pass", "fail", "pass", "error", "fail"];

results.indexOf("fail"); //1
results.indexOf("skip");  // -1
console.log(results.indexOf("pass")) ;

// lastIndexOf — searches from the end
results.lastIndexOf("fail");

// includes — returns boolean
results.includes("error"); // true
console.log(results.includes("error")) ;