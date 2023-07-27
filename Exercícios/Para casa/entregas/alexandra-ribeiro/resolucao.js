class Bank {
    bankCode;
    bankName;
    #transferTax;

    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.constructor.createdBanks.push({
            bankCode: this.bankCode,
            qtdClients: 0 
        });
    }

    get transferTax() {
        return this.#transferTax;
    }

    set transferTax(newTransferTax) {
        this.#transferTax = newTransferTax
    }
    
}

class Client {
    name;
    #cpf;
    banks;

    constructor(name, cpf) {
        this.name = name;
        this.#cpf = cpf;
        this.banks = [];
    }

    get cpf() {
        return this.#cpf;
    }

    addBank(bank) {
        if(!(bank instanceof Bank)) {
            return "Provide a valid bank"
        }
        if(this.banks.includes(bank)) {
            console.log("This bank is already associated with the client")
        }

        this.banks.push(bank)

        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);

        Bank.createdBanks[bankIndex].qtdClients++;
    }

    removeBank(bank) {
        if(!(bank instanceof Bank)) {
            return "Provide a valid bank"
        }

        if(!this.banks.includes(bank)){
            console.log("This bank is not associated with the client.");
        }

        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);

        Bank.createdBanks[bankIndex].qtdClients--;
        this.banks.splice(bankIndex,1)
    }

}

class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;
    #qtdWithdrawal;
    #withdrawalTax;

    constructor(client, bank, accountNumber, agencyNumber) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.#balance = 0;
        this.#qtdWithdrawal = 0;
        this.#withdrawalTax = 0.03;
    }

    get balance() {
        return this.#balance;
    }

    get qtdWithdrawal() {
        return this.#qtdWithdrawal
    }

    get withdrawalTax() {
        return this.#withdrawalTax
    }

    set withdrawalTax(newDrawalTax) {
        return this.#withdrawalTax = newDrawalTax
    }

    credit(amount) {
        this.#balance += amount;
        console.log(`Credit of ${amount} was successful. New balance is ${this.balance}`)
    }

    debit(amount) {
        if(this.#balance >= amount) {
            this.#balance -= amount;
            console.log(`Debit of ${amount} was successful. New balance is ${this.balance}`);
        } else {
            console.log("Insufficient funds!")
        }
    }

    transferTo(anotherAccount, amount) {
        if(!(anotherAccount instanceof BankAccount)) {
            console.log("Provide a valid account")
            return
        }

        if(this.#balance < amount) {
            console.log("Insufficient funds.")
            return
        }
        
        if(this.bank !== anotherAccount.bank) {
            const transferTaxAmount = this.bank.transferTax
            const totalAmount = amount + (amount * transferTaxAmount);
            this.debit(totalAmount);
        }
        anotherAccount.credit(amount);
        console.log(`Transfer of ${amount} was successful. New balance is ${this.balance}`)
    }

    cashWithdrawal(amount) {}

    closeAccount() {
        if(this.#balance > 0) {
            console.log("To close the account you need to withdraw all balance")
        }
    }
}

console.log(Bank.createdBanks);
const bank1 = new Bank(100, 'LuaBank', 0.01);
console.log(bank1);
console.log(Bank.createdBanks);
console.log(bank1.transferTax);
bank1.transferTax = 0.02
console.log(bank1.transferTax);

console.log("===============================")

const client1 = new Client('Maria', 123);
console.log(client1);
console.log(client1.cpf);

client1.addBank(bank1);
console.log(client1)

client1.removeBank(bank1);
console.log(client1);

console.log("============================")

const bank2 = new Bank(200, 'FariasBank', 0.04)
const client2 = new Client("Ale", 456)
client2.addBank(bank2)

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
const bankAccount2 = new BankAccount(client2, bank2, 3333, 4444)

console.log(bankAccount1)
console.log(bankAccount1.balance);

bankAccount1.credit(1000);
bankAccount1.debit(300);

console.log("++++++++++++++++++++++")

console.log(bankAccount1.balance)
console.log(bankAccount2.balance)

bankAccount2.credit(150);
console.log(bankAccount2.balance)

bankAccount1.transferTo(bankAccount2, 50);

console.log(bankAccount2.balance)
console.log(bankAccount1.balance)

console.log(bank1.transferTax)

console.log(Bank)