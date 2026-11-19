class Car {
    //Constructor
    //Default vs Param

    constructor(assigned_name){
        this.name = assigned_name; 
    }

}
let hyundai_i10 = new Car("i10");
console.log(hyundai_i10.name);

let mg_hector = new Car("MG hector");
console.log(mg_hector.name);

const i11 = new Car("i11");
const Nexon = new Car ("Nexon");
console.log(i11.name);
console.log(Nexon.name);