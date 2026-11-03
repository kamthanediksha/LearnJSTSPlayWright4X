
let url = "https://staging.vwo.com/api/login?retry=true";
// includes()
url.includes("staging");  
url.includes("production");

// startsWith / endsWith
url.startsWith("https");
url.startsWith("http://"); 
url.endsWith("true"); 

// indexOf / lastIndexOf
console.log(url.indexOf("a")); // indexOf() - returns the index of the first occurrence of the specified value, otherwise -1
console.log(url.lastIndexOf("a")); // lastIndexOf() - returns the index of the last occurrence of the specified value, otherwise -1
console.log(url.indexOf("nothere")); // nothere is not present in the string, so it returns -1

// ASCII -> A -> 65