//// importar classes
const Bank = require("./Bank");

const Client = require("./Client");

const BankAccount = require("./BankAccount");

///// tests
const nuBank = new Bank(160, "Nubank", 0);
console.log(Bank.createdBanks);
const bradesco = new Bank(222, "Bradesco", 5);
console.log(nuBank);

const jef = new Client("Jef", 123123123);

console.log(jef);

jefAccount = new BankAccount(jef, nuBank, 3333, 4444);
console.log(jefAccount);

console.log(Bank.createdBanks);
