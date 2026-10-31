//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

// function name1 () {
// console.log("Hi") ;
// }
// name1() ;

// (
// function() {
// console.log("Anonymus Fn");
// } )() ;

// (function() {
//     console.log("Staging Fn");
// })() ;

(() => {
    console.log("Set up Complete");
})();