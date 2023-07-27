class Account {
    id;
    name;
    #balance;
    user;

    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.#balance = balance;
    }

    get #balance {
        this.validUser();
    }

    validUser() {
        return this.user == true;
    }

    credit(amount) {
        this.#balance += amount;
        console.log(`Saldo atual: ${this.#balance} simoleons`);
        return this.#balance;
    }

    debit(amount) {
        this.#balance -= amount;
        console.log(`Saldo atual: ${this.#balance} simoleons`);
        return this.#balance;
    }

    transfer(anotherAccount, amount) {

        if(!(anotherAccount instanceof Account)) {
            console.log("Informe uma conta válida.")
            return;
        }

        if(this.#balance < amount) {
            console.error(`Não há saldo suficiente para realizar essa operação. Saldo disponível: ${this.balance}`);
            return;
        }

        this.debit(amount);
        //anotherAccount.balance += amount;
        anotherAccount.credit(amount);
        return this.#balance;
        
    }
}