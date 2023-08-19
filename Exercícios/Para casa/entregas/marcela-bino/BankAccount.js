const { Bank } = require('./Bank');
const { Client } = require('./Client');

class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;

    constructor(client, bank, accountNumber, agencyNumber, balance) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.#balance = balance;
    }

    get balance() {
        return this.#balance;        
    }

    credit(amount) {
        this.balance += amount;
    }

    debit(amount) {
        this.balance -= amount;
    }

    tranferTo(anotherAccount, amount) {
        if((anotherAccount instanceof BankAccount)) {
            if(this.balance < amount) {
                console.log("Você não tem saldo suficiente!");
            } else {
                this.debit(amount);
                anotherAccount.credit(amount);
            }
        }
    }
}

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222); // Instanciação de um objeto BankAccount.
console.log(bankAccount1);