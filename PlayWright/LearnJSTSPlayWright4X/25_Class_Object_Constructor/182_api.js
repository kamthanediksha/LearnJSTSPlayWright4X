class APIClient{
    constructor(baseURL){
        this.baseURL= baseURL;
    }
    diksha(path){
        return this.baseURL + path;
    }
}
let staging = new APIClient("https://staging.api.com");
let prod = new APIClient("https://prod.api.com");
console.log(staging.diksha("/users"));
console.log(prod.diksha("/prod/users"));
