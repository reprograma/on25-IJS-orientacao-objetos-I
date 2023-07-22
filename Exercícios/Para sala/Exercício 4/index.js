class Client {
    #id;
    name;
    address;
    constructor(id, name , address){
        this.#id = id
        this.name = name
        this.address = address

    }

    edit()
    delete()
}

class Bank {
    name;
    code;
    Client;
    constructor(name, code,Client){
      this.name= name
      this.code = code
      this.Client = Client
    }
}