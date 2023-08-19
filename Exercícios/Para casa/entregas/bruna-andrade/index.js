const { Bank } = require('./Bank');
const { BankAccount } = require('./BankAccount');
const { Client } = require('./Client');

const bank1 = new Bank(341, 'Itau', 0.01);
const bank2 = new Bank(260, 'Santander', 0.02);

const client1 = new Client('Agatha', 123456789);
const client2 = new Client('Camila', 987654321);

client1.addBank(bank1);
client1.addBank(bank2);
client1.removeBank(bank2);

console.log(client1);

client2.addBank(bank2);
console.log(client2);
console.log(Bank.createdBanks);

const bankAccount1 = new BankAccount(client1, bank1, 1234, 4321);
console.log(bankAccount1);

const bankAccount2 = new BankAccount(client1, bank2, 5678, 7865);
console.log(bankAccount2);
