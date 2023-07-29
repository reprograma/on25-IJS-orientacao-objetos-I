const Client = require("./Client");
const Bank = require("./Bank");

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
