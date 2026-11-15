async function getTestResults() {
     return new Promise.resolve(abc) ;
}

// getTestResults().then(function(results){
//     console.log(results);
// });     

async function results() {
    let r = await getTestResults();
    console.log(r);
}

async function testAPI () {
    try {
        let result = await Promise.reject("503 service unavailable");
        console.log ("Result:", result);
    } catch (error) {
        console.log('Error',error);
    } finally {
        console.log("clean up!");
    }
}
testAPI();