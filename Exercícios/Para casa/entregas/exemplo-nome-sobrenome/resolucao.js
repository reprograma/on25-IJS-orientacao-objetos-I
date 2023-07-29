class Bank{
    bankCode;
    bankName;
    #transferTax;

    static createdBanks = [];

    constructor(bankCode, bankName, transferTax){
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#transferTax = transferTax;
        this.qtdClients = 0;

        Bank.createdBanks.push({ bankCode, qtdClients: this.qtdClients });
    }

    get transferTax() {
        return this.#transferTax;
      }

      set transferTax(newTax) {
        this.#transferTax = newTax;
      }
}

console.log(Bank.createdBanks); // []

class Client {
    name;
    #cpf;

    constructor(name, cpf){
        this.name = name;
        this.#cpf = cpf;
        this.banks = [];
    }

    get cpf(){
        return this.#cpf;
    }

    addBank(bank){
        if (!this.isValidBank(bank)) {
            console.log('Banco Inválido');
            return;
    }

    if (!this.isBankAssociated(bank)) {
        this.banks.push(bank);
        bank.addClient(this); // Adiciona o cliente a o banco
      } else {
        console.log(`O cliente ${this.name} já tem o banco ${bank.bankCode} associado.`);
      }
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
          console.log('INforme um banco válido!');
          return;
        }
    
        const index = this.banks.indexOf(bank);
        if (index !== -1) {
          this.banks.splice(index, 1);
          bank.removeClient(this); // Remove o cliente deste banco
        } else {
          console.log(`O cliente ${this.name} não tem o banco ${bank.bankCode} associado.`);
        }
      }
}


class BankAccount{
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;

    constructor(client, bank, accountNumber, agencyNumber, balance){
        this.client=client;
        this.bank=bank;
        this.accountNumber=accountNumber;
        this.agencyNumber=agencyNumber;
        this.#balance=balance;
        const balance = 0;
    }

    get balance(){
        return this.#balance
    }
}
