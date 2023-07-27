const { Bank } = require("./Bank");
const { Client } = require("./Client");
const { BankAccount } = require("./BankAccount");

console.log(Bank.createdBanks); 
const bank1 = new Bank(100, "LuaBank", 0.01);
console.log(bank1);
console.log(Bank.createdBanks); 
console.log(bank1.transferTax);
bank1.transferTax = 0.02;
console.log(bank1.transferTax);

const client1 = new Client("Erica", 111111);
const client2 = new Client("Hugo", 222222);
console.log(client1); 
console.log(client1.cpf);
client1.addBank(bank1);
client2.addBank(bank1); 
console.log(client1); 

const account1 = new BankAccount(client1, bank1, 1111, 2222);
const account2 = new BankAccount(client2, bank1, 1111, 2222);
console.log(account1);
console.log(account1.balance);
account1.credit(1000);
account1.debit(500); 
account1.transferTo(account2, 300);

account2.closeAccount();
account2.debit(300);
account2.closeAccount();
console.log(account2);