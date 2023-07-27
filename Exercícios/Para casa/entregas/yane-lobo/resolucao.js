import {Bank} from './Bank.js';
import {Client} from './Client.js';
import {BankAccount} from './BankAccount.js';


const hwaBank = new Bank ('HwaBank', 0.5)
const wheeBank = new Bank ('WheeBank', 0.4)
const moonBank = new Bank ('MoonBank', 0.3)


const hwasa = new Client ('Hwasa', 123456789)
hwasa.addBank(hwaBank)
hwasa.addBank(moonBank)
hwasa.addBank(wheeBank) 

const wheein = new Client ('Wheein', 2345678910)
wheein.addBank(hwaBank)
wheein.addBank(moonBank)


const account2 = new BankAccount(wheein, hwaBank, 1, 1, 2)
const account1 = new BankAccount(hwasa, hwaBank, 1, 1, 2)

account1.credit(500)
account1.cashWithdrawal(300)
account1.cashWithdrawal(100)
account1.cashWithdrawal(100)

account1.closeAccount()
console.log(account1)

account1.debit(100)
account1.closeAccount()
console.log(account1)



