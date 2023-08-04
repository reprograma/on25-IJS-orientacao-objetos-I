const { Bank } = require('./Bank');
const { Client } = require('./Client');
const { BankAccount } = require('./BankAccount');

console.log(Bank.createdBanks) // []

const caixa = new Bank(104, "Caixa", 1.04)
const bradesco = new Bank(237, "Bradesco", 1.20)
const itau = new Bank(341, "Itaú", 0.89)
const pagBank = new Bank(290, "PagBank", 1.00)
const nuBank = new Bank(260, "NuBank", 0.90)
const bb = new Bank(001, "Banco do Brasil", 0.67)
const santander = new Bank(33, "Santander", 1.15)

console.log(caixa) // Bank { bankCode: 104, bankName: 'Caixa'}
//console.log(caixa.bankCode);
//console.log(caixa.transferTax); 
//caixa.transferTax = 1.14
//console.log(caixa.transferTax); 

console.log(bradesco) // Bank { bankCode: 237, bankName: 'Bradesco' }
console.log(itau) // Bank { bankCode: 341, bankName: 'Itaú' }
console.log(pagBank) // Bank { bankCode: 290, bankName: 'PagBank' }
console.log(nuBank) // Bank { bankCode: 260, bankName: 'NuBank' }
console.log(bb) // Bank { bankCode: 1, bankName: 'Banco do Brasil' }
console.log(santander) // Bank { bankCode: 33, bankName: 'Santander' }


console.log(Bank.createdBanks)

const doria = new Client("Dória", "1234");
const dhilly = new Client("Dhilly", "2345");
console.log(doria)
// console.log(doria.cpf)

doria.addBank(caixa)
console.log(doria)
doria.addBank(bradesco)
doria.addBank(caixa)
dhilly.addBank(caixa)
//console.log(caixa.qtdClients)

doria.removeBank(caixa)
console.log(doria)

// console.log(caixa.qtdClients)

conta1 = new BankAccount(doria, bradesco, 5678, 4567)
conta2 = new BankAccount(dhilly, caixa, 9087, 5006)
console.log(conta1)

conta1.credit(500)

conta1.transferTo(conta2, 100)
// console.log(conta2.balance)



conta1.cashWithdrawal(100)
//conta1.cashWithdrawal(50)
//conta1.cashWithdrawal(20)
conta1.debit(300)
conta1.closeAccount()
console.log(conta1)
