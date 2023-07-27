const Bank = require("./bank");
const Client = require("./client");

class BankAccount {
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;

    constructor(client, bank, accountNumber,agencyNumber) {
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber =agencyNumber;
    this.balance = 0;
    }

    get balance() {
        return this.#balance; 
    }
 
    
}