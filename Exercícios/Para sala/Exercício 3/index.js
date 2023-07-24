class Account{
    id;
    name;
    #balance;

    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.#balance = balance;
    }

    credit(amount){
        this.#balance += amount;
        // console.log(`Seu saldo atual é de R$ ${this.#balance}`);
    }

    debit(amount){
        this.#balance -= amount;
        // console.log(`Seu novo saldo é de R$ ${this.#balance}`);
    }

    transferTo(anotherAccount, amount){
        if(!(anotherAccount instanceof Account)){
            console.log('Informe uma conta válida!')
            return
        }

        if(this.#balance < amount) {
            console.log(`Nao tem saldo suficiente. Seu saldo atual é de R$ ${this.#balance}`);
            return
        }

        this.debit(amount);
        anotherAccount.credit(amount);
    }
}

const conta1 = new Account(123, 'Yela', 5000)
const conta2 = new Account(124, 'Tiago', 2000)

conta1.credit(5000)
conta1.transferTo(conta2, 7000)
console.log(conta1)
console.log(conta2)