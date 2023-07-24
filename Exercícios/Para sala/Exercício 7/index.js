class Account{
    #id;
    #name;
    #balance;

    constructor(id, name, balance){
        this.#id = id,
        this.#name = name,
        this.#balance = balance
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }

    get balance(){
        return this.#balance;
    }

    set credit(amount){
        return this.#balance += amount;
    }

    set debit(amount){
        if(this.#balance < amount){
            console.log("Error! Amount exceeded balance");
            return this.#balance;
        } else {
            return this.#balance -= amount;
        }
    }

    transferTo(anotherAccount, amount){
        if(!(anotherAccount instanceof Account)){
            console.log("Error! Insert a valid account");
            return false
        }

        if(this.#balance < amount){
            console.log("Error! Amount exceeded balance");
            return this.#balance;
        } else {
            anotherAccount.#balance += amount;
            return this.#balance -= amount;
        }
    }
}

const daphne = new Account(1, "Daphne", 3500);
daphne.credit = 500;

const velma = new Account (2, "Velma", 4000);
velma.debit = 5000;
velma.transferTo(daphne, 100);
