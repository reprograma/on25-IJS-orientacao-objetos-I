const { Bank } = require ('./Bank')
const { Client } = require ('./Client')
const { BankAccount } = require ('./BankAccount')


const bankBrazil = new Bank (123, 'Banco do Brasil', 0.8) // Instanciação de um objeto Bank.
const bankNu = new Bank (456, 'Nubank', 0.3) // Instanciação de um objeto Bank.
const bankBox = new Bank (789, 'Banco Caixa', 0.5) // Instanciação de um objeto Bank.

console.log(bankBrazil)
console.log(bankNu)
console.log(bankBox)
console.log(Bank.createdBanks) // [{ bankCode: 123, qtdClients: 0 }, { bankCode: 456, qtdClients: 0 }, { bankCode: 789, qtdClients: 0 }]

const client1 = new Client ('Mariana', 12345678900) // Instanciação de um objeto Client.
const client2 = new Client ('Martha', 98765432100) // Instanciação de um objeto Client.
console.log(client1)
console.log(client2)
console.log(client1.cpf)

client1.addBank(bankBrazil) // Banco 123 adicionado à cliente Mariana.
console.log(client1.banks) // [Bank { bankCode: 123, bankName: 'Banco do Brasil' }]
client1.addBank(bankBrazil) // Você já possui esse banco associado a sua conta! Tente adicionar um banco diferente.
client1.addBank(bankNu) // Banco 456 adicionado à cliente Mariana.
console.log(client1.banks) // [Bank { bankCode: 123, bankName: 'Banco do Brasil' }, Bank { bankCode: 456, bankName: 'Nubank' }]

client2.addBank(bankBox) // Banco 789 adicionado à cliente Martha.
client2.addBank(bankNu) // Banco 456 adicionado à cliente Martha.
console.log(client2.banks) // [Bank { bankCode: 789, bankName: 'Caixa' }, Bank { bankCode: 456, bankName: 'Nubank' }]
client2.removeBank(bankBox) // Banco 789 removido da cliente Martha.
console.log(client2.banks) // [Bank { bankCode: 456, bankName: 'Nubank' }]

console.log(Bank.createdBanks) // [{ bankCode: 123, qtdClients: 1 }, { bankCode: 456, qtdClients: 2 }, { bankCode: 789, qtdClients: 0 }]

const bankAccount1 = new BankAccount (client1, bankBrazil, 123456, 98765) // Instanciação de um objeto BankAccount.
const bankAccount2 = new BankAccount (client2, bankNu, 789012, 43210) // Instanciação de um objeto BankAccount.
const bankAccount3 = new BankAccount (client2, bankBox, 123456, 123450) // A conta só poderá ser criada se você for cliente do banco. Por favor torne-se cliente do Banco Caixa.

const clientTest = new Bank (111, 'teste', 0.5) 
const bankTest = new Client ('Marcelo', 11122233344)
const bankAccount4 = new BankAccount (clientTest, bankBox, 123456, 123450) // Esse não é um cliente válido!
const bankAccount5 = new BankAccount (client2, bankTest, 123456, 123450) // Esse não é um banco válido!

console.log(bankAccount1)
console.log(bankAccount2)
console.log(bankAccount3) // BankAccount {client: undefined, bank: undefined, accountNumber: undefined, agencyNumber: undefined}

console.log(bankAccount1.balance) // 0
bankAccount1.credit(2500) // Operação realizada com sucesso. Seu saldo é de R$ 2500.
bankAccount1.debit(500) // Operação realizada com sucesso. Seu saldo é de R$ 2000.
bankAccount1.transferTo(bankAccount2, 1200) // Transferência realizada com sucesso para Martha! O seu saldo atual é de R$ 800.

bankAccount2.closeAccount() // Você possui saldo na sua conta. Retire todo o valor para poder encerrá-la.
bankAccount2.debit(1200) // Operação realizada com sucesso. Seu saldo é de R$ 0.
bankAccount2.closeAccount() // Conta encerrada!
console.log(bankAccount2) // BankAccount {client: undefined, bank: undefined, accountNumber: undefined, agencyNumber: undefined}








