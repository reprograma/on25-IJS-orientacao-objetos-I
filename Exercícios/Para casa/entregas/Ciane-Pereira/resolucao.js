class Bank {
    bankCode;
    bankName;
    #transferTax;
    
    static createdBanks = [];

    constructor(bankCode, bankName, transferTax) {
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.constructor.createdBanks.push({bankCode: this.bankCode, qtdClients: 0});
    }

    get transferTax() {
        return this.#transferTax;
    }

    set transferTax(tax) {
        this.#transferTax = tax;
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
            console.log('Bank not registered.');
            return;
        }           

        if(bank instanceof Bank) {
            console.log('Bank already registered.');
            return;
        }                 

        this.banks.push(bank);
        bank.createdBanks.find((ban) => ban.bankCode === bank.bankCode).qtdClients++;
        console.log(`Bank ${bankCode} added to customer ${this.name}.`);
    }

    removeBank(bank) {
        if(!(bank instanceof Bank)) {
            console.log('Bank not registered.');
            return;
        }

        if(!this.banks.includes(bank)) {
            console.log('Client does not have an associated bank.');
            return;
        }        

        this.banks = this.banks.filter(ban => ban !== bank);
        bank.createdBanks.find((ban) => ban.bankCode === bank.bankCode).qtdClients--;
        console.log(`Bank ${bankCode} removed to customer ${this.name}.`);        
    }
}

class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;

    constructor(client, bank, accountNumber, agencyNumber) {
        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.#balance = 0;
    }

    get balance() {
        return this.#balance
      }
    
      credit(amount) {
        this.#balance += amount
        console.log(this.#balance)
      }
}


