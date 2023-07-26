class Account {
    id;
    name;
    #balance;

    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    credit(amount) {
        this.#balance += amount;
        console.log(`O saldo atualizado é de re R$ ${this.#balance} .`)
    }

    debit(amount) {
        this.balance -= amount
        console.log(`O saldo atualizado é de re R$ ${this.balance} .`)
    }

    transferTo(anotherAccount, amount) {
        if (!(anotherAccount instanceof Account)) {
            console.log('Informe uma conta válida!');
            return;
        }

        if (this.balance < amount) {
            console.log(`Você não tem saldo suficiente para realizar essa operação. 
            seu saldo atual é de ${this.balance}`);
            return;
        }

        this.debit(amount);
        anotherAccount.credit(amount);
        console.log(`Transferência realizada com sucesso. 
        o seu saldo atula é de ${this.balance} e o saldo da conta destino é de ${anotherAccount}`);
    }
}

const contaCarol = new Account(123, 'Carol', 10000);
contaCarol.credit(5000);
contaCarol.debit(300)

const contaRegina = new Account(234, 'Regina', 1000);
contaCarol.transferTo(contaRegina, 250)

console.log(contaCarol)
console.log(contaRegina)
