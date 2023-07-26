class Bank {
  bankCode;
  bankName;
  #transferTax;

  static createdBanks = []

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode
    this.bankName = bankName
    this.#transferTax = transferTax
    this.constructor.createdBanks.push({ bankCode: this.bankCode, qtdClients: 0})
  }

  get transferTax() {
    return this.#transferTax
  }

  set transferTax(tax) {
    this.#transferTax = tax
  }
}

console.log(Bank.createdBanks);
const bank1 = new Bank(100, "LuaBank", 0.01);
const bank2 = new Bank(200, "HinaBank", 0.02);
console.log(bank1);
console.log(Bank.createdBanks);
console.log(bank1.transferTax);
bank1.transferTax = 0.02;
console.log(bank1.transferTax);

class Client {
  name;
  #cpf;
  banks;

  constructor(name, cpf) {
    this.name = name
    this.#cpf = cpf
    this.banks = []
  }

  get cpf() {
    return this.#cpf
  }

  addBank(bank) {
    if(!(bank instanceof Bank)) return "Bank not registered"

    if(this.banks.includes(bank)) return "Bank already registered"

    this.banks.push(bank)
    
    const bankIndex = Bank.createdBanks.findIndex(obj => obj.bankCode === bank.bankCode)
    Bank.createdBanks[bankIndex].clients += 1
  }

  removeBank(bank) {
    if(!(bank instanceof Bank)) return "Bank not registered"

    if(!this.banks.includes(bank)) return "Bank is not registered"

    this.banks = this.banks.filter(obj => obj.bankCode !== bank.bankCode)

    const bankIndex = Bank.createdBanks.findIndex(obj => obj.bankCode === bank.bankCode)
    Bank.createdBanks[bankIndex].clients -= 1
  }
}

const client1 = new Client("Maria", 123);
console.log(client1);
console.log(client1.cpf);
client1.addBank(bank1);
client1.addBank(bank2);
console.log(client1);
client1.removeBank(bank1);
console.log(client1);

class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance;
  #qtdWithdrawal;
  #withdrawalTax;

  constructor(client, bank, accountNumber, agencyNumber) {
    if(!(client instanceof Client)) return "Client is not registered"
    if(!(bank instanceof Bank)) return "Bank is not registered"
    if(!client.banks.includes(bank)) return "Client is not resgistered in this bank"

    this.client = client
    this.bank = bank
    this.accountNumber = accountNumber
    this.agencyNumber = agencyNumber
    this.#balance = 0
  }

  get balance() {
    return this.#balance
  }

  credit(amount) {
    this.#balance += amount
    console.log(this.#balance)
  }
}