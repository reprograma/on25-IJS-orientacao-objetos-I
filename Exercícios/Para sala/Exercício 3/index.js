class Account{
    id;
    name;
    balance;

    constructor(id, name, initialBalance){
        this.id = id,
        this.name = name,
        this.balance = initialBalance
    }

    credit(amount){
        this.balance += amount;
        console.log(`Com o depósito, seu novo saldo é de R$${this.balance}`);
    }

    debit(amount){
        this.balance -= amount;
        console.log(`Com o saque, seu novo saldo é de R$${this.balance}`);
    }

    transferTo(anotherAccount, amount){
        if(!(anotherAccount instanceof Account)){
            console.log("Erro! Informe uma conta válida");
            return false
        }

        if(this.balance < amount){
            console.log(`Erro, você não tem saldo suficiente para realizar a transferência. \n Seu saldo é de R$${this.balance}`);
            return false;
        } else {
            this.balance -= amount;
            anotherAccount.balance += amount;
            console.log(`Transferido R$${amount} para a conta de ${anotherAccount.name}. \n Seu saldo atual é de R$${this.balance}`);
        }
    }
}
const daphne = new Account(2, "Daphne", 3700);

const susan = new Account(1, "Susan", 450);
susan.debit(200);
susan.credit(500);
susan.transferTo(daphne, 300);