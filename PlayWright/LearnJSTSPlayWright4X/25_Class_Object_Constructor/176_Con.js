class Credentials {
#apiKey;

constructor(user,key){
this.user = user;
this.#apiKey = key ;

}
getAPI() {
    return this.#apiKey;
}
}

let cred = new Credentials("admin","")