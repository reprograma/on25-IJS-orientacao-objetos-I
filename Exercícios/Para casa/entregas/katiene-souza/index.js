const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { BankAccount } = require('./BankAccount');

const itau = new Bank(2639, "itau", 0.02);
const nubank = new Bank(9582, "nubank", 0.04);
const inter = new Bank(1537, "inter", 0.03);

console.log(Bank.createdBanks); //[{ bankCode: 2639, qntclients: 0 },  { bankCode: 9582, qntclients: 0 }, { bankCode: 1537, qntclients: 0 }]
itau.transferTax; //{ transferTax: 0.02 }
itau.transferTax = 0.04;
itau.transferTax; //{ transferTax: 0.04 }

const ana = new Client("Ana", 29506892466);
ana.addBank(itau);
ana.addBank(nubank);
ana.cpf; //{ cpf: 29506892466 }


const maria = new Client("Maria", 40678120456);
maria.addBank(inter);
maria.addBank(nubank);


console.log(maria); //Client { name: 'Maria', banks: [Bank { bankCode: 1537, bankName: 'inter' }, Bank { bankCode: 9582, bankName: 'nubank' }] }
maria.removeBank(inter);
console.log(maria); //Client { name: 'Maria', banks: [Bank { bankCode: 9582, bankName: 'nubank' }] }


const contaAnaItau = new BankAccount(ana, itau, 2637, 5483, 150); //conta criada
contaAnaItau.balance; //{ balance: 150 }
contaAnaItau.debit(30); //{ saldo: 'Seu saldo atual é de 120' }
contaAnaItau.balance; //{ balance: 120 }
contaAnaItau.credit(20);  //{ saldo: 'Seu saldo atual é de 140' }
contaAnaItau.balance; //{ balance: 140 }

const contaAnaNubank = new BankAccount(itau, ana, 2637, 5483, 0); //informe um cliente valido! //informe um banco valido!

const contaMariaInter = new BankAccount(maria, nubank, 9628, 6237, 50); //conta criada
console.log(contaMariaInter); //BankAccount { client: Client { name: 'Maria', banks: [ [Bank] ] }, bank: Bank { bankCode: 9582, bankName: 'nubank' }, accountNumber: 9628, agencyNumber: 6237 }
contaMariaInter.balance; //{ balance: 50 }
contaMariaInter.transferTo(contaAnaItau, 50); //Seu saldo atual é de: 0 e o saldo de Ana é de: 190.
contaMariaInter.balance; //{ balance: 0 }

const contaMariaItau = new BankAccount(maria, itau, 9628, 6237, 10); //O cliente Maria, não é associado a este banco!

contaMariaInter.closeAccount(); //Sua conta foi encerrada com sucesso!
console.log(contaMariaInter);  //BankAccount { client: undefined, bank: undefined, accountNumber: undefined, agencyNumber: undefined }
contaAnaItau.closeAccount(); //Sua conta não pode ser encerrada enquanto possuir saldo!




