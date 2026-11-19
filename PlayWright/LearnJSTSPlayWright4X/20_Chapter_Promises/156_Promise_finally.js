let apiCall = new Promise(function(resolve, reject) {
    //resolve ({status: 200});
       reject ("error");
    });

apiCall.then (function (data) {
    console.log(data);
}).catch (function (error) {
    console.error(error);
}).finally (function () {
    // This block will always execute, regardless of whether the promise was resolved or rejected
    console.log("Cleanup code here");
});