class Bank {
  bankCode;
  bankName;
  #transferTax;
  qtdClients;

  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
    this.qtdClients = 0;
    this.constructor.createdBanks.push({
      bankCode: this.bankCode,
      qtdClients: this.qtdClients,
    });
  }

  incrementClients() {
    this.qtdClients++;
  }
}

// Instanciação de um objeto Bank.
//console.log(bank1); // { bankCode: 100, bankName: 'LuaBank' }
//console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 0 } ]
//console.log(bank1.transferTax);

class Client {
  name;
  cpf;
  banks;

  static banks = [];

  constructor(name, cpf) {
    this.name = name;
    this.cpf = cpf;
    this.banks = [];
  }
  addBank(bank) {
    if (this.banks.includes(bank)) {
      console.log(`Você já é associado ao banco ${bank.bankName}`);
    } else {
      if (bank instanceof Bank) {
        this.banks.push(bank);
        bank.incrementClients();
      } else {
        console.log("O objeto fornecido não é uma instância de Bank.");
      }
    }
  }

  removeBank(bank) {
    const index = this.banks.indexOf(bank);
    if (index !== -1) {
      this.banks.splice(index, 1);
    }
  }
}
const bank1 = new Bank(100, "LuaBank", 0.01, 0);
const bank2 = new Bank(200, "SolBank", 0.02);

const client1 = new Client("Maria", 123);
client1.addBank(bank1);
client1.addBank(bank2);

console.log(client1);

class BankAccount {
  client;
  Bank;
  accountNumber;
  agencyNumber;
  #balance;

  constructor(client, Bank, accountNumber, agencyNumber, balance) {
    this.client = client;
    this.Bank = Bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this.#balance = 0;
  }
  get balance() {
    return this.#balance;
  }
}

const contaLua = new BankAccount("Lua", "LuaBank", 123, 456);
console.log(contaLua);
