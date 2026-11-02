// Searching & Checking for a String in JavaScript

let url = "https://www.google.com" ;
// includes() - returns true if the string contains the specified value, otherwise false
console.log(url.includes("google")) ;
console.log(url.includes("bing")) ;

// startsWith() - returns true if the string starts with the specified value, otherwise false
console.log(url.startsWith("https")) ;
console.log(url.startsWith("http://")) ;

// endsWith() - returns true if the string ends with the specified value, otherwise false
console.log(url.endsWith(".com")) ;
console.log(url.endsWith(".org")) ;

// indexOf() - returns the index of the first occurrence of the specified value, otherwise -1
console.log(url.indexOf("google")) ;
console.log(url.indexOf("bing")) ;