const { Bank, bank1 } = require("./Bank")
const { Client, client1 } = require("./Client")

class BankAccount {
  client;
  bank;
  accountNumber;
  agancyNumber;
  #balance = 0;

  constructor(client, bank, accountNumber, agencyNumber) {
    const isValidClient = client instanceof Client;
    const isValidBank = bank instanceof Bank;
    const isClientAssociated = client.hasBank(bank);

    if (!isValidClient) {
      console.log(
        "Error: Invalid client instance. Please provide a valid Client object."
      );
    } else if (!isValidBank) {
      console.log(
        "Error: Invalid bank instance. Please provide a valid Bank object."
      );
    } else if (!isClientAssociated) {
      console.log(
        "Error: The client is not associated with the provided bank."
      );
    } else {
      this.client = client;
      this.bank = bank;
      this.accountNumber = accountNumber;
      this.agencyNumber = agencyNumber;
    }
  }

  get balance() {
    return this.#balance;
  }

  credit(amount) {
    this.#balance += amount;
    console.log(`Credit ${amount} applied. New balance: ${this.#balance}`);
  }

  debit(amount) {
    const isValidTransaction = this.#balance >= amount;
    isValidTransaction
      ? ((this.#balance -= amount),
        console.log(
          `Debit of ${amount} applied. New balance: ${this.#balance}`
        ))
      : console.log("Error: Insufficient funds.");
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof BankAccount)) {
      console.log(
        "Error: Invalid account instance. Please provide a valid BankAccount object."
      );
      return;
    }

    const sourceBank = this.bank;
    const destinationBank = anotherAccount.bank;

    if (this.#balance >= transferAmount) {
      this.#balance -= transferAmount;
      anotherAccount.credit(amount);
      const transferMessage =
        sourceBank === destinationBank
          ? `to account ${anotherAccount.accountNumber} at the same bank.`
          : `to account ${anotherAccount.accountNumber} at bank ${destinationBank.bankName}.`;
      console.log(
        `Transferred ${amount} ${transferMessage} New balance: ${this.#balance}`
      );
    } else {
      console.log("Error: Insufficient amount for the transfer.");
    }
  }

  closeAccount() {
    const message =
      this.#balance === 0
        ? "Account successfully closed."
        : "Error: Account must have zero balance to be closed.";
    console.log(message);
  }
}

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222); // Instanciação de um objeto BankAccount.
console.log(bankAccount1);
// { 
//   client: Client { name: 'Maria', banks: [ [Bank] ] },
//   bank: Bank { bankCode: 100, bankName: 'LuaBank' },
//   accountNumber: 1111,
//   agencyNumber: 2222,
//   qtdWithdrawal: 0
// }

console.log(bankAccount1.balance); // 0
console.log(bankAccount1.qtdWithdrawal); // 0
console.log(bankAccount1.withdrawalTax); // 0.03
bankAccount1.withdrawalTax = 0.02;

// Creditando dinheiro na conta
bankAccount1.credit(1000); // O novo saldo da conta é: R$ 1000

// Debitando dinheiro da conta
bankAccount1.debit(300); // O novo saldo da conta é: R$ 700

// Transferindo de uma conta para outra
bankAccount1.transferTo(bankAccount2, 200);
// O saldo atual da conta de origem é de R$ 500
// O saldo atual da conta de destino é de R$ 200

// Retirando no banco 24 horas (cenário de 2 retiradas gratuitas)
bankAccount1.cashWithdrawal(100);
// As primeiras 2 retiradas são gratuitas.
// Retirada realizada. O saldo atual da conta é de R$ 900.
// Total de retiradas realizadas: 1
// Você ainda possui 1 retirada gratuita.

bankAccount1.cashWithdrawal(100);
// As primeiras 2 retiradas são gratuitas.
// Retirada realizada. O saldo atual da conta é de R$ 800.
// Total de retiradas realizadas: 2
// Você não possui mais nenhuma retirada gratuita.

bankAccount1.cashWithdrawal(100);
// As primeiras 2 retiradas são gratuitas.
// Retirada realizada. O saldo atual da conta é de R$ 697.
// Total de retiradas realizadas: 3
// Você não possui mais nenhuma retirada gratuita.

// Fechando a conta
bankAccount1.closeAccount(); // Conta encerrada!

console.log(bankAccount1);
// BankAccount {
//   client: undefined,
//   bank: undefined,
//   accountNumber: undefined,
//   agencyNumber: undefined,
//   qtdWithdrawal: 0
// }
