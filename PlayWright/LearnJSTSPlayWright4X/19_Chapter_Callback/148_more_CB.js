function test (item, callMeWhenDone) {
    console.log ("start the testcase", item) ;
    callMeWhenDone();
}

test("verify the login page is working", async (page) =>  {
});