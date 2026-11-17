class Car {
    #engine
    constructor(name,engineName){
        this.name = name;
        this.#engine = engineName
    }
    setEngine(nameEngine) {
        this.#engine = nameEngine
    }
    
}