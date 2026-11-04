function placeOrder(item,callback) {
    console.log("Placing an order") ;
    console.log ("Order placed for item: " + item) ;
    callback() ;
}

//First Way
 function completeOrderPrint() {
    console.log("Normal Order completed") ;
 }

 placeOrder("burger", completeOrderPrint) ;


//Second Way
placeOrder("pizza", function() {
    console.log("Order is ready! pick it up!") ;
});

//THIRD WAY => Arrow Fnn
placeOrder("burger", () => {
    console.log("Arrow Fn, I'm also a function without name") ;
});

test ('has title', async({page }) => {
    });

test ('has title', async({page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    await page.screenshot({ path: 'screenshot.png' });
    await page.pause();
});