function startbrowser () {
    let name = "edge" ;

function installbrowser () {
    console.log(name) ; // ReferenceError: Cannot access 'name' before initialization
}
return installbrowser ;
}
const runTc = startbrowser();
runTc();