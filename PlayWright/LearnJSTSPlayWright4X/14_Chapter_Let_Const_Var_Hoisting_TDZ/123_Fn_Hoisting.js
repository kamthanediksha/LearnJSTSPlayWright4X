function getUserStatusCode () {
    console.log(statusCode); // it will never throw an error because the variable is declared in the function scope.
    var statusCode = 200;
    console.log(statusCode);
}
getUserStatusCode() ;