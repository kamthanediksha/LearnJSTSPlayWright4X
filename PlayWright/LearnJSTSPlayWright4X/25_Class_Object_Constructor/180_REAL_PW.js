class Testcase {
 
    constructor(name_given,status_given,priority_given) {
        this.name = name_given;
        this.status = status_given;
        this.priority = priority_given;
    }
    display () {
        console.log(this.name + "->" + this.status + "->" + this.priority);
    }
}

let loginTest_ref = new Testcase("Login Test","Pass","P0");
let signupTest_ref = new Testcase("Signup Test","Fail","P1");

loginTest_ref.display();
signupTest_ref.display();
