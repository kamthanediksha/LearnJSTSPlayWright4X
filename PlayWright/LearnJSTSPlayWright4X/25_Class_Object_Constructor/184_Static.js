class TestRunner{
    static totalTests = 0;
    static passCount = 0;
    constructor(name, passed) {
        this.name = name;
        TestRunner.totalTests++;
        if(passed) {
            TestRunner.passCount++;
        }
    }
}
let T1 = new TestRunner("loginTest",true);
let T2 = new TestRunner("signTest",false);
let T3 = new TestRunner("dashboardTest",true);
let T4 = new TestRunner("supportTest",true);
console.log(TestRunner.totalTests);
console.log(TestRunner.passCount);
console.log(T1.name);
console.log(T2.name);
console.log(T3.name);
console.log(T4.name);

//name,passed - non static
//totaltests,passCount - static
