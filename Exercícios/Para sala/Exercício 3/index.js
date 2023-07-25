class Account {
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
        // return `Seu saldo atual é de R$ ${this.balance}` sem o console.log por conta do encapsulamento. Teria que ter um método só pra isso
    }

    debit(amount){
        this.#balance -= amount;
        // return `Seu saldo atual é de R$ ${this.balance}`
    }

    transferTo(anotherAccount, amount){
        if(!(anotherAccount instanceof Account)){
            console.log("Informe uma conta válida.")
            return //dando return ele sai do método.
        }

        if(this.balance < amount){
            console.log(`Você não tem saldo suficiente para realizar essa operação. Seu saldo atual é de R$ ${this.balance}`);
            return;
        }

        this.debit(amount);
        anotherAccount.credit(amount);
        console.log(`Transferência realizada com sucesso! Seu saldo atual é de R$ ${this.balance} e o saldo da conta destino é de R$ ${anotherAccount.balance}`)
    }
}

const nicole = new Account(1, "nicole", 300)
const rodrigo = new Account(2, "rodrigo", 300)
nicole.credit(400);
nicole.debit(100);
nicole.transferTo(rodrigo, 600)
console.log(nicole)
console.log(rodrigo)