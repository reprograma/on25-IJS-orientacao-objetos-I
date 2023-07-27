class Bank {

    static createdBanks = [];
    bankCode;
    bankName;
    #transferTax;
    clientAmount;
    
    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.constructor.createdBanks.push({bankCode: this.bankCode, clientAmount: 0});
    };

    get transferTax(){
        return this.#transferTax
    }

    set transferTax(value) {
        return this.transferTax = value;
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
    };


    addBank(bank) {
        if(!(bank instanceof Bank)) {
            console.log("Informe um banco válido");
            return;
        }

        if(this.banks.some((element) => element.bankCode === bank.bankCode)) {
            console.log("Você já está associado a esse banco");
            return;
        }

        this.banks.unshift(bank);
        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === element.bankCode);
        Bank.createdBanks[bankIndex].clientAmount++;
    }
    
    removeBank(bank) {
        if(!(bank instanceof Bank)) {
            console.log("Informe um banco válido");
            return;
        }

        if(!(this.banks.some((e) => e.bankCode === bank.bankCode))) {
           console.log("Você não é associado a esse banco");
           return;
        }

        this.banks.pop(bank);
        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === element.bankCode);
        Bank.createdBanks[bankIndex].clientAmount--;   
    }

    get cpf() {
        return this.#cpf;
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
        // this.#qtdWithdrawal = 0;
        // this.#withdrawalTax = 0.1;
    };

    get balance() {
        return this.#balance;
    }
    
    // get qtdWithdrawal() {
    //     return this.#qtdWithdrawal;
    // }
    
    // get withdrawalTax() {
    //     return this.#withdrawalTax;
    // }

    credit(amount) {
        //to do
    }
    
    debit(amount) {
        //to do
    }

    trasferTo(anotherAccounnt, amount) {
        //to do
    }

    // cashWithdrawal(amount) {
        
    // }

    closeAccount() {
        //to do
    }
}

const bank1 = new Bank(100, 'LuaBank', 0.01); // Instanciação de um objeto Bank.
const bank2 = new Bank(200, 'RachBank', 0.01); // Instanciação de um objeto Bank.
console.log(bank1); // { bankCode: 100, bankName: 'LuaBank' }
