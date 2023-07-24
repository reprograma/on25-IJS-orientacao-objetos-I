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
      qndClients: 0,
    });
  }
  get transferTax() {
    return this.#transferTax;
  }
  set transferTax(newTransferTax) {
    this.#transferTax = newTransferTax;
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
    if (!(bank instanceof Bank)) {
      console.log("Informe um banco válido!");
      return;
    }
    if (this.banks.includes(bank)) {
      console.log(
        `Esse banco já está associado a esse cliente e não será adicionado novamente.`
      );
      return;
    }

    this.banks.push(bank);

    console.log(`Banco ${bank.bankCode} adicionado ao cliente ${this.name}.`);

    //Encontrar o banco no array createdBanks e incrementar +1 a qntClients
    const bankInfo = Bank.createdBanks.find(
      (item) => item.bankCode === bank.bankCode
    );
    if (bankInfo) {
      bankInfo.qndClients++;
    }
  }
  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log("Informe um banco válido!");
      return;
    }
    if (!this.banks.includes(bank)) {
      console.log(
        `Primeiro associe o banco ${bank.bankCode} ao cliente ${this.name}, para remove-lo.`
      );
    }
    console.log(`Banco ${bank.bankCode} removido do(a) cliente ${this.name}.`);
    //Encontra o bank no array, e cria outro array sem o "bank"
    this.banks = this.banks.filter((item) => item !== bank);

    //Encontrar o banco no array createdBanks e incrementar +1 a qntClients
    const bankInfo = Bank.createdBanks.find(
      (item) => item.bankCode === bank.bankCode
    );
    if (bankInfo) {
      bankInfo.qndClients--;
    }
  }
}

class BankAccount {
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance;
  constructor(client, bank, accountNumber, agencyNumber) {
    if (!(client instanceof Client)) {
      return console.log(
        "O parâmetro client deve ser uma instância do tipo Client"
      );
    }
    if (!(bank instanceof Bank)) {
      return console.log(
        "O parâmetro bank deve ser uma instância do tipo Bank"
      );
    }
    if (!client.banks.includes(bank)) {
      return console.log("O cliente não é cliente desse banco");
    }
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
    this.#balance = 0;
  }
  get balance() {
    return this.#balance;
  }
  credit(amount) {
    this.#balance += amount;
    console.log(`Operação realizada, o saldo é de: R$ ${this.#balance},00.`);
  }
  debit(amount) {
    this.#balance -= amount;
    console.log(`Operação realizada, seu saldo é de: R$ ${this.#balance},00.`);
  }
  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      return;
    }
    if (this.bank !== anotherAccount.bank) {
      amount += amount * this.bank.transferTax;
    }
    if (amount > this.balance) {
      console.log(
        `O valor de transferencia deve ser menor que o saldo da conta. Saldo disponível: R$ ${this.balance},00`
      );
    }
    this.debit(amount);
    anotherAccount.#balance += amount;
    console.log(`Transferencia de R$ ${amount},00.`);
  }
  closeAccount() {
    if (this.#balance === 0) {
      console.log("Conta encerrada!");
      this.client = undefined;
      this.bank = undefined;
      this.accountNumber = undefined;
      this.agencyNumber = undefined;
    } else {
      console.log("Não é possível encerrar a conta. A conta possui saldo.");
    }
  }
}

console.log(Bank.createdBanks); // [ ]
const bank1 = new Bank(100, "LuaBank", 0.01);
console.log(bank1); // { bankCode: 100, bankName: 'LuaBank' }
console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 0 } ]
console.log(bank1.transferTax); // 0.01
bank1.transferTax = 0.02;
console.log(bank1.transferTax); // 0.02

const client1 = new Client("Maria", 125454643);
const client2 = new Client("João", 54654564);
console.log(client1); // { name: 'Maria', banks: [] }
console.log(client1.cpf); // 125454643
client1.addBank(bank1); // Banco 100 adicionado à cliente Maria
client2.addBank(bank1); // Banco 100 adicionado à cliente Maria
console.log(client1); // { name: 'Maria', banks: [ Bank { bankCode: 100, bankName: 'LuaBank' } ] }
//client1.removeBank(bank1); //Banco 100 removido do(a) cliente Maria.
// console.log(client1); //Client { name: 'Maria', banks: [] }

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
const bankAccount2 = new BankAccount(client2, bank1, 1111, 2222);
console.log(bankAccount1);
console.log(bankAccount1.balance); //0
bankAccount1.credit(1000); //Operação realizada, o saldo é de: R$ 1000,00.
bankAccount1.debit(300); //Operação realizada, o saldo é de: R$ 700,00.
bankAccount1.transferTo(bankAccount2, 200);
// Operação realizada, seu saldo é de: R$ 500,00.
// Transferencia de R$ 200,00.

bankAccount2.closeAccount(); //Não é possível encerrar a conta. A conta possui saldo.
bankAccount2.debit(200); // Operação realizada, seu saldo é de: R$ 0,00.
bankAccount2.closeAccount(); // Conta encerrada!
console.log(bankAccount2);
/**
 * BankAccount {
  client: undefined,
  bank: undefined,
  accountNumber: undefined,
  agencyNumber: undefined
}
 */
