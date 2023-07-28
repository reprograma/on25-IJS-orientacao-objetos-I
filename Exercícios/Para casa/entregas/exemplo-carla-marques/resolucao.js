const { Bank } = require('./bank.js');
const { Client } = require('./client.js');
const { BankAccount } = require('./bankAccount.js');

// Criando e testando o banco
console.log(Bank.createdBanks); 
const bank1 = new Bank(100, 'LuaBank', 0.01); 
const bank2 = new Bank(200, 'CarlBank', 0.02); 
console.log(bank1); 
console.log(Bank.createdBanks); 
console.log(bank1.transferTax);
bank1.transferTax = 0.02
console.log(bank1.transferTax);

// Criando e testando o cliente
const client1 = new Client('Maria', 12345678900); 
const client2 = new Client('João', 12345678901); 
console.log(client1); 
console.log(client1.cpf); 
client1.addBank(bank1); 
client2.addBank(bank1); 
client2.addBank(bank2);
console.log(client1);
console.log(client2);
client1.removeBank(bank1); 
console.log(client1);
client1.addBank(bank1); 

// Criando a conta
const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
const bankAccount2 = new BankAccount(client2, bank2, 1234, 1595); 

// Operações bancárias
console.log(bankAccount1);  
console.log(bankAccount2);
console.log(bankAccount1.balance);
console.log(bankAccount1.qtdWithdrawal);
console.log(bankAccount1.withdrawalTax); 
bank1.transferTax = 0.05
bankAccount1.credit(1000); 
bankAccount1.debit(300); 
console.log(bankAccount1.balance);
console.log(bankAccount2.balance);
bankAccount1.transferTo(bankAccount2, 200);
console.log(bankAccount2.balance);
console.log(bankAccount1.balance);
bankAccount1.cashWithdrawal(100);
bankAccount1.cashWithdrawal(100);
bankAccount1.cashWithdrawal(100);
console.log(bankAccount1.balance); 
bankAccount1.cashWithdrawal(100);
console.log(bankAccount1.balance); 
bankAccount1.cashWithdrawal(87);
console.log(bankAccount1.balance); 

// Fechando a conta 
bankAccount1.closeAccount(); 
console.log(bankAccount1) 
