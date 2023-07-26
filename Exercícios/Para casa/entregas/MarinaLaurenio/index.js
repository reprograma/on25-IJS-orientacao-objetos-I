const { Bank } = require("./Bank");
const { Client } = require("./Client");
const { BankAccount } = require("./BankAccount");

console.log(Bank.createdBanks); // [ ]
const bank1 = new Bank(100, "LuaBank", 0.01);
console.log(bank1); // { bankCode: 100, bankName: 'LuaBank' }
console.log(Bank.createdBanks); // [ { bankCode: 100, qtdClients: 0 } ]
console.log(bank1.transferTax); // 0.01
bank1.transferTax = 0.02;
console.log(bank1.transferTax); // 0.02

const client1 = new Client("Maria", 125454643);
const client2 = new Client("João", 54654564);
console.log(client1); // { name: 'Maria', banks: [] }
console.log(client1.cpf); // 125454643
client1.addBank(bank1); // Banco 100 adicionado à cliente Maria
client2.addBank(bank1); // Banco 100 adicionado à cliente Maria
console.log(client1); // { name: 'Maria', banks: [ Bank { bankCode: 100, bankName: 'LuaBank' } ] }
//client1.removeBank(bank1); //Banco 100 removido do(a) cliente Maria.
// console.log(client1); //Client { name: 'Maria', banks: [] }

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222);
const bankAccount2 = new BankAccount(client2, bank1, 1111, 2222);
console.log(bankAccount1);
console.log(bankAccount1.balance); //0
bankAccount1.credit(1000); //Operação realizada, o saldo é de: R$ 1000,00.
bankAccount1.debit(300); //Operação realizada, o saldo é de: R$ 700,00.
bankAccount1.transferTo(bankAccount2, 200);
// Operação realizada, seu saldo é de: R$ 500,00.
// Transferência de R$ 200,00 realizada.

bankAccount2.closeAccount(); //Não é possível encerrar a conta. A conta possui saldo.
bankAccount2.debit(200); // Operação realizada, seu saldo é de: R$ 0,00.
bankAccount2.closeAccount(); // Conta encerrada!
console.log(bankAccount2);
/**
 * BankAccount {
  client: undefined,
  bank: undefined,
  accountNumber: undefined,
  agencyNumber: undefined
}
 */
console.log(Bank.createdBanks); //[ { bankCode: 100, qtyClients: 2 } ]
