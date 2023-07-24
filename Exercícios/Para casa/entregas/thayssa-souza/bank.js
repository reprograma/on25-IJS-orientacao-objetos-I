class Bank {
    bankCode;
    bankName;
    #transferTax;
    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode,
        this.bankName = bankName,
        this.#transferTax = transferTax,
        Bank.createdBanks.push({
            bankCode: this.bankCode,
            qtyClients: 0
        });
    }

    get transferTax(){
        return this.#transferTax;
    }

    set transferTax(newTax){
        this.#transferTax = newTax;
    }

    static isBank(bank){
        if(!(bank instanceof Bank)){
            console.log("Error! Enter a valid bank");
            return false;
        } else {
            return true;
        }
    }

    findBank(){
        let bankItem = Bank.createdBanks.find((item) => item.bankCode == this.bankCode);
        return bankItem;
    }

    addClient(){
        let bankItem = this.findBank();
        bankItem.qtyClients += 1;
    }

    removeClient(){
        let bankItem = this.findBank();
        bankItem.qtyClients -= 1;
    }

}

class Client {
    name;
    #cpf;
    banks;

    constructor(name, cpf){
        this.name = name,
        this.#cpf = cpf,
        this.banks = []
    }

    get cpf(){
        return this.#cpf;
    }

    addBank(bank){
        if(Bank.isBank(bank) == false){
            return false;
        }

        if(this.banks.includes(bank)){
            console.log(`Error! You already are a ${bank.bankName}'s client`);
            return false;
        } else {
            this.banks.push(bank);
            console.log(`Congrats! Now you're a ${bank.bankName}'s client`);
            bank.addClient();
        }
    }

    removeBank(bank){
        if(Bank.isBank(bank) == false){
            return false;
        }

        if(!this.banks.includes(bank)){
            console.log(`Error! You're not a ${bank.bankName}'s client`);
        } else {
            let bankIndex = this.banks.indexOf(bank);
            //indexOf retorna o índice do array
            if (bankIndex > -1) {
                this.banks.splice(bankIndex, 1);
                console.log(`You're not ${bank.bankName}'s client anymore`);
                bank.removeClient();
            }
        }
    }
}

class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;
    #qtyWithdrawal;
    #withDrawalTax;

    constructor(client, bank, accountNumber, agencyNumber){
        this.client = client,
        this.bank = bank,
        this.accountNumber = accountNumber,
        this.agencyNumber = agencyNumber,
        this.#balance = 0,
        this.#qtyWithdrawal = 0,
        this.#withDrawalTax = 2.5
    }

    get balance(){
        return this.#balance;
    }

    get qtyWithdrawal(){
        return this.#qtyWithdrawal;
    }

    get withDrawalTax(){
        return this.#withDrawalTax;
    }

    set withDrawalTax(newTax){
        if (newTax !== 0){
            this.#withDrawalTax = newTax;
        } else {
            console.log("Error, the fee cannot be 0");
            return false;
        }
    }

    static isBankAccount(bankAccount){
        if(!(bankAccount instanceof BankAccount)){
            console.log("Error! Enter a valid bank account");
            return false;
        } else {
            return true;
        }
    }

    credit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Credit $${amount} successfully added. Actual balance: $${this.#balance}`);
        } else {
            console.log("Enter a valid amount of money");
            return false;
        }
    }

    debit(amount){
        if(this.#balance >= amount){
            this.#balance -= amount;
            console.log(`Operation successfully done. Atual balance: $${this.#balance}`);
            return true;
        } else {
            console.log(`Error! You don't have $${amount} in your account. Your actual balance: $${this.#balance}`)
            return false;
        }
    }

    debitWithFee(amount){
        let amountFee = amount + this.#withDrawalTax;
        if(this.#balance >= amountFee){
            this.#balance -= amountFee;
            console.log(`Operation successfully done. Atual balance: $${this.#balance}`);
            return true;
        } else {
            console.log(`Error! You don't have value of amount and/or fee in your account. Your actual balance: $${this.#balance}`)
            return false;
        }
    }

    transferTo(anotherAccount, amount){
        if(BankAccount.isBankAccount(anotherAccount) == false){
            return false;
        }

        if((this.bank !== anotherAccount.bank) && (this.debitWithFee(amount) == true)){
            anotherAccount.#balance += amount;
            console.log(`Successful transfer $${amount} to ${anotherAccount.client.name}`);
        } else if (this.debit(amount) == true) {
            anotherAccount.#balance += amount;
            console.log(`Successful transfer $${amount} to ${anotherAccount.client.name}`);
        } else {
            return false;
        }
    }

    cashWithdrawal(amount){
        let withdrawalsLimit = 2;
        // let amountFee = amount + this.#withDrawalTax;

        if(this.#qtyWithdrawal >= withdrawalsLimit){
            console.log(`You already made ${withdrawalsLimit} withdrawals at the ATM. Now each withdrawal will have a fee de $${this.#withDrawalTax}`);

            if(this.debitWithFee(amount) == true){
                this.#qtyWithdrawal += 1;
                return true;
            } else {
                return false;
            }
        }
        
        if(this.debit(amount) == true){
            this.#qtyWithdrawal += 1;
            let withdrawalsTime = withdrawalsLimit - this.#qtyWithdrawal;
            console.log(`You can make ${withdrawalsTime} withdrawal(s) without paying fee`);
        }
    }

    closeAccount(){
        if (this.#balance > 0){
            console.log(`Sorry, you cannot close the account until reset the balance. Actual balance: $${this.#balance}`);
            return false;
        } else {
            Object.keys(this).forEach(key => this[key] = undefined);
            console.log("Closed account successfully");
        }
    }
}

const bank1 = new Bank(101, 'The Global Bank', 0.01);
const bank2 = new Bank(202, 'The Mystery Machine Bank', 0.02);
console.log(Bank.createdBanks);

const client1 = new Client('Scooby', 123);
client1.addBank(bank1);
client1.removeBank(bank2); //erro

const client2 = new Client('Daphne', 321);
client2.addBank(bank1);
client2.removeBank(bank1);
client2.addBank(bank2);

const client3 = new Client('Velma', 213);
client3.addBank(bank2);
client3.addBank(bank2); //erro

const bankAccount1 = new BankAccount(client1, bank1, 1212, 3434);
bankAccount1.credit(1000);
bankAccount1.debit(1100); //erro
bankAccount1.withDrawalTax = 5;

const bankAccount2 = new BankAccount(client2, bank2, 5656, 7878);
bankAccount2.credit(200);
bankAccount2.closeAccount(); //erro
bankAccount2.debit(200);
bankAccount2.closeAccount();

const bankAccount3 = new BankAccount(client3, bank2, 9090, 2121);
bankAccount1.transferTo(bankAccount3, 400);
bankAccount3.cashWithdrawal(100);
bankAccount3.cashWithdrawal(200);
bankAccount3.cashWithdrawal(100);
bankAccount3.cashWithdrawal(500); //erro