const Bank = require('./bank');
const Client = require('./client');
const BankAccount = require('./bankAccount');

const bank1 = new Bank(101, 'The Global Bank', 0.01);
const bank2 = new Bank(202, 'The Mystery Machine Bank', 0.02);
console.log(Bank.createdBanks);

const client1 = new Client('Scooby', 123);
client1.addBank(bank1);
client1.removeBank(bank2); //erro

const client2 = new Client('Daphne', 321);
client2.addBank(bank1);
client2.removeBank(bank1);
client2.addBank(bank2);

const client3 = new Client('Velma', 213);
client3.addBank(bank2);
client3.addBank(bank2); //erro

const bankAccount1 = new BankAccount(client1, bank1, 1212, 3434);
bankAccount1.credit(1000);
bankAccount1.debit(1100); //erro
bankAccount1.withDrawalTax = 5;

const bankAccount2 = new BankAccount(client2, bank2, 5656, 7878);
bankAccount2.credit(200);
bankAccount2.closeAccount(); //erro
bankAccount2.debit(200);
bankAccount2.closeAccount();

const bankAccount3 = new BankAccount(client3, bank2, 9090, 2121);
bankAccount1.transferTo(bankAccount3, 400);
bankAccount3.cashWithdrawal(100);
bankAccount3.cashWithdrawal(200);
bankAccount3.cashWithdrawal(100);
bankAccount3.cashWithdrawal(500); //erro