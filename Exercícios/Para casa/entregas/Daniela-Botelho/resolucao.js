const { Bank } = require('./Bank');
const {Client} = require('./Client');
const { BankAccount } = require('./BankAccount');


let bankGranPlus = new Bank(999, "Banco da GranPlus", 0.05);
let bankGolden = new Bank(111, "Banco da Golden", 0.1);

let clientBlanc = new Client("Blanc", "123.456.789-00");
let clientBotão = new Client("Botão", "987.654.321-00");
let clientPxon = new Client("Pxon", "159.951.753-00");
let clientMenina = new Client("Menina", "753.357.789-00");

clientBlanc.addBank(bankGranPlus); 
clientBotão.addBank(bankGranPlus);
clientPxon.addBank(bankGolden);
clientMenina.addBank(bankGranPlus);

let account1 = new BankAccount(clientBlanc, bankGranPlus, 1111, 2222);
let account2 = new BankAccount(clientBotão, bankGranPlus, 3333, 2222);
let account3 = new BankAccount(clientPxon, bankGolden, 1234, 4444);
let account4 = new BankAccount(clientMenina, bankGranPlus, 3333, 1212);

console.log(` Cliente: ${account3.client.name} | Banco: ${account3.bank.bankName} | Nº da Conta: ${account3.accountNumber}`);
console.log(` Cliente: ${account1.client.name} | Banco: ${account1.bank.bankName} | Nº da Conta: ${account1.accountNumber}`);
console.log(` Cliente: ${account2.client.name} | Banco: ${account2.bank.bankName} | Nº da Conta: ${account2.accountNumber}`);
console.log(` Cliente: ${account4.client.name} | Banco: ${account4.bank.bankName} | Nº da Conta: ${account4.accountNumber}`);

console.log(Bank.createdBanks);

clientMenina.removeBank(bankGranPlus);

console.log(Bank.createdBanks)