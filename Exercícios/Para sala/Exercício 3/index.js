class Account {
    id;
    name;
    #balance;

    constructor (id, name, balance) {
        this.id = id;
        this.name = name;
        this.#balance = balance;
    }

    credit (amount) {
        this.#balance += amount;
        //console.log(`Saldo atualizado ${this.balance} `);
    }

    debit (amount) {
        this.#balance -= amount;
        //console.log(`Saldo atualizado ${this.balance} `);
    }

    transferTo (anotherAccount, amount) {
        if(!( anotherAccount instanceof Account)) {
            console.log('Informe uma conta valida!');
            return;
        }

        if(this.#balance < amount) {
            console.log(`Você não possui saldo suficiente para realizar a transação. Saldo atual ${this.#balance}`)
            return;
        }
        this.debit(amount);
        anotherAccount.credit(amount);
        console.log(`Tranferencia realizada com sucesso! Saldo atual ${this.#balance}`)
    }
}

const contaCelina = new Account (21 ,'Celina', 2000);
contaCelina.credit(5000);
contaCelina.debit(200);

const contaAle = new Account (785, 'Ale', 700)
contaCelina.transferTo(contaAle, 2000);