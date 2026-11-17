class Person {
    // hide my variables
    #child1;
    #child2;
    constructor(name,child1,child2) {
        this.name= name;
        this.#child1= child1;
        this.#child2 = child2;
    }
    getChild() {     //M/O
        return this.#child1;
    }
    setChild(changed_name) {  //W/F
        this.#child1 = changed_name;
    }
}
let p =new Person ("Diksha","naveen","Vamika");
//console.log(p.#child1);
console.log(p.getChild());

p.setChild("Chinnu");
console.log(p.getChild());

console.log(p.name);
p.name =" Rekha";