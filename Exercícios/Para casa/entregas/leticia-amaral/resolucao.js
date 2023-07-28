const Bank = require('./Bank');
const Client = require('./Client');
const BankAccount = require('./BankAccount');

// Bank
console.log(Bank.createdBanks);

const bank1 = new Bank(100, "LuaBank", 0.01);
const bank2 = new Bank(200, "HinaBank", 0.02);

console.log(bank1);
console.log(bank2);

console.log(Bank.createdBanks);

console.log(bank1.transferTax);
bank1.transferTax = 0.02;
console.log(bank1.transferTax);

// Client
const client1 = new Client("Maria", 123);
const client2 = new Client("Letícia", 456);

console.log(client1);
console.log(client2);

console.log(client1.cpf);

client1.addBank(bank1);
client1.addBank(bank2);
console.log(client1);

client1.removeBank(bank1);
console.log(client1);

// BankAccount
const bankAccount1 = new BankAccount("banana", bank1, 1111, 2222);
const bankAccount2 = new BankAccount(client2, bank2, 1111, 2222);

console.log(bankAccount1);
console.log(bankAccount2);

console.log(bankAccount1.balance); 

bankAccount1.credit(1000);

bankAccount1.debit(300);

bankAccount1.transferTo(bankAccount2, 200);

bankAccount1.closeAccount();
console.log(bankAccount1);
