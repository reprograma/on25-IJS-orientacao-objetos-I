const { Bank } = require("./Bank");
const { BankAccount } = require("./BankAccount");
const { Client } = require("./Client");

const client1 = new Client("Maria", "987.654.300-99");
const client2 = new Client("Sandra", "987.654.300-40");
// const client3 = new Client("Gabriela", "987.654.300-99");
// const client4 = new Client("Jessica", "987.654.300-00");

//console.log(client1.cpf); //987.654.300-99

const bank1 = new Bank(1009, "BancoSul", 0.01);
const bank2 = new Bank(2008, "BancoNorte", 0.01);
const bank3 = new Bank(3007, "BancoLeste", 0.01);
const bank4 = new Bank(4006, "BancoOeste", 0.01);

client1.addBank(bank1);
client1.addBank(bank1); //Cliente consta no banco X BancoSul
client1.addBank(bank2);

client1.removeBank(bank1);

client2.addBank(bank2);
client2.addBank(bank3);
client2.addBank(bank4);

const bankAccount1 = new BankAccount(client1, bank1, 85555, 282);
const bankAccount2 = new BankAccount(client2, bank2, 89909, 646);

bankAccount1.credit(150000);
bankAccount1.debit(800);

bankAccount2.transferTo(bankAccount1, 1500);
bankAccount1.transferTo(bankAccount2, 1500);
bankAccount1.transferTo(bankAccount2, 1500);
bankAccount2.closeAccount();
console.log(bankAccount2);
console.log(bankAccount1);
console.log(client1);
console.log(client2);
