class Bank {
  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this._transferTax = transferTax;

    Bank.createdBanks.push({ bankCode: this.bankCode, customers: 0 });
  }

  get transferTax() {
    return this._transferTax;
  }

  set transferTax(newTax) {
    this._transferTax = newTax;
  }

  addCustomer() {
    for (let bank of Bank.createdBanks) {
      if (bank.bankCode == this.bankCode) {
        bank.customers++;
        break;
      }
    }
  }

  removeCustomer() {
    for (let bank of Bank.createdBanks) {
      if (bank.bankCode == this.bankCode) {
        bank.customers--;
        break;
      }
    }
  }
}

class Client {
  constructor(name, cpf) {
    this.name = name;
    this._cpf = cpf;
    this.banks = [];
  }

  get cpf() {
    return this._cpf;
  }

  addBank(bank) {
    if (bank instanceof Bank) {
      if (this.banks.includes(bank)) {
        return "Você já tem esse banco associado.";
      } else {
        this.banks.push(bank);

        bank.addCustomer();
      }
    } else {
      return "O parâmetro deve ser um objeto da classe Bank.";
    }
  }

  removeBank(bank) {
    if (bank instanceof Bank) {
      if (this.banks.includes(bank)) {
        this.banks = this.banks.filter((b) => b != bank);

        bank.removeCustomer();
      } else {
        return "Você não tem esse banco associado.";
      }
    } else {
      return "O parâmetro deve ser um objeto da classe Bank.";
    }
  }
}

let client1 = new Client("Alice", "123.456.789-00");
let client2 = new Client("Bob", "987.654.321-00");

let bank1 = new Bank(123, "Banco Um", 0.05);
let bank2 = new Bank(456, "Banco Dois", 0.1);

client1.addBank(bank1);
client1.addBank(bank2);

client2.addBank(bank1);

client1.removeBank(bank2);

console.log(client1);
console.log(client2);
console.log(Bank.createdBanks);
