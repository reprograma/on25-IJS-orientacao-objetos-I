class Client {
    #id;
    name;
    adress;

    constructor(id, name, adress) {
        this.#id = id;
        this.name = name;
        this.adress = adress;
    }

    edit() {}
    delete() {}    
}

class Bank {
    name;
    code;
    clients;

    constructor(name, code, clients) {
        this.name = name;
        this.code = code;
        this.clients = clients;
    }
}


