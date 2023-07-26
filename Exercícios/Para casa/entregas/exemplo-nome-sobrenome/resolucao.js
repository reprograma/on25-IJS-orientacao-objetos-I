const Bank = require("./Bank");
const Client = require("./Client");
const BankAccount = require("./BankAccount");

console.log(Bank.createdBanks);
const nuBank = new Bank(123, "Nubank", 0);
const bradesco = new Bank(222, "Bradesco", 5);
