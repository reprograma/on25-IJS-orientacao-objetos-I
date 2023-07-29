class Bank {
  bankCode;
  bankName;

  #transferTax;

  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
    this.totalClients = 0;
    this.constructor.createdBanks.push({
      bankCode: this.bankCode,
      totalClients: this.totalClients,
    });
  }

  get transferTax() {
    return this.#transferTax;
  }

  set transferTax(tax) {
    return (this.#transferTax = tax);
  }

  static getCreatesBanks() {
    return Bank.createdBanks;
  }
}

// A propriedade estática createdBanks é uma array vazia
// antes de nenhum banco ter sido criado:
console.log(Bank.createdBanks); // [ ]

const bank1 = new Bank(100, "DebbbsBank", 0.01); // Instanciação de um objeto Bank.
console.log(bank1); // { bankCode: 100, bankName: 'LuaBank' }

// Agora a propriedade estática createdBanks é uma
// array que contém 1 objeto, que corresponde ao banco criado.
// O objeto possui o código do banco e a quantidade de clientes (que inicialmente é 0):
console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 0 } ]

console.log(bank1.transferTax); // 0.01
bank1.transferTax = 0.02;
console.log(bank1.transferTax); // 0.02

module.exports = { Bank, bank1} ;
