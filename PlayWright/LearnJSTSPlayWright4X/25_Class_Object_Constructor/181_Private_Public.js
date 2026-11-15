class Browser {
    constructor(name) {
        this.name= name;
        this.isOpen = true;
        console.log(name + "launched");
    }
    startBrowser() {
        console.log("starting the browser");
    }
    closebrowser() {
        console.log("closing the browser");
    }
}
let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");
console.log(chrome.isOpen);
chrome.closebrowser();
chrome.startBrowser();
