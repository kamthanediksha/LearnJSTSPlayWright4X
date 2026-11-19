class HDFC {
    #balance;
    constructor(name,balance){
        this.#balance= balance;
        this.name= name;
    }
    getBalance () {
        return this.#balance;
    }
    setBalance (balance, isCashier) {
        if(isCashier){
            this.#balance= balance;
        } else {
            console.log("Not Allowed");
        }
    }
}

let diksha = new HDFC ("diksha",1000);
console.log(diksha.getBalance());
diksha.setBalance(10000, false);
console.log(diksha.getBalance());

let diksha_father = new HDFC ("diksha" , 2000) ;
console.log(diksha_father.getBalance());
diksha_father.setBalance (30000, true);
console.log(diksha_father.getBalance());