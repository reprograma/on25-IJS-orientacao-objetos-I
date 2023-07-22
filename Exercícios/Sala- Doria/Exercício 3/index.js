class Account {
    id;
    name;
    balance;
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance
    }

    credit(amount) {
        this.balance += amount;
        console.log(`Saldo atual é de R$${this.balance}`)
    }

    debit(amount) {
        this.balance -= amount;
        console.log(`Saldo atual é de R$${this.balance}`)
    }

    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof Account)) {
            console.log('Informe uma conta válida')
            return
        } if (amount <= this.balance) {
            anotherAccount.balance += amount;
            this.balance -= amount;
            return console.log(`Seu saldo atual é de R$${this.balance}, o saldo atual do ${anotherAccount.name} é de R$${anotherAccount.balance}`)
        } else {
            return console.log(`Seu saldo atual é insuficiente, para realizar essa transferência`)
        }
    }
}

const conta1 = new Account(23, "Rafaela", 200);
console.log(conta1)
const conta2 = new Account(24, "Gabriel", 100);
console.log(conta2)

//conta1.transferTo("teste2", 20);

conta1.transferTo(conta2, 20);
// conta1.transferTo(conta2, 210);

//conta1.credit(50);
//conta1.debit(30);
