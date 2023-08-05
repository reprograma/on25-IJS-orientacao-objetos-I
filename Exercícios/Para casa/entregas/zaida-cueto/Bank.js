class Bank {
  static createdBanks = [];

  constructor(bankCode, bankName, transferTax) {
    this.bankCode = bankCode;
    this.bankName = bankName;
    this._transferTax = transferTax;
    this.clientsCount = 0;
    Bank.createdBanks.push({ bankCode: this.bankCode, qtdClients: this.clientsCount });
  }

  get_transfer_tax() {
    return this._transferTax;
  }

  set_transfer_tax(tax) {
    this._transferTax = tax;
  }

  get_clients_count() {
    return this.clientsCount;
  }

  add_client() {
    this.clientsCount++;
    const bankIndex = Bank.createdBanks.findIndex((bank) => bank.bankCode === this.bankCode);
    if (bankIndex !== -1) {
      Bank.createdBanks[bankIndex].qtdClients = this.clientsCount;
    }
  }
}

// A propriedade estática createdBanks é uma array vazia
// antes de nenhum banco ter sido criado:
console.log(Bank.createdBanks); // [ ]

const bank1 = new Bank(100, 'LuaBank', 0.01); // Instanciação de um objeto Bank.
console.log(bank1); // { bankCode: 100, bankName: 'LuaBank' }

// Agora a propriedade estática createdBanks é uma
// array que contém 1 objeto, que corresponde ao banco criado.
// O objeto possui o código do banco e a quantidade de clientes (que inicialmente é 0):
console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 0 } ]

console.log(bank1.transferTax); // 0.01
bank1.transferTax = 0.02;
console.log(bank1.transferTax); // 0.02

bank1.add_client();
bank1.add_client();
console.log(bank1.get_clients_count()); // 2

console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 2 } ]
