class Account {
    id;
    name;
    balance;

    constructor(id, name, balance){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    credit = (amount) => {
        this.balance += amount;
        console.log(`Credited ${amount} to account ${this.id}. New balance: ${this.balance}`);
    }

    debit = (amount) => {
        if (this.balance < amount) {
            console.log(`You don't have enough balance to debit.`);
        }
        this.balance -= amount;
        console.log(`Debited ${amount} from account ${this.id}. New balance: ${this.balance}`);
    }

    transferTo = (anotherAccount, amount) => {
        if(!(anotherAccount instanceof Account)) {
            console.log('try a valid account');
            return;
        }


        if (this.balance < amount) {
            console.log(`Not enough balance for this operation`);
        }

        this.balance -= amount;
        anotherAccount.credit(amount);
        console.log(`Transfered ${amount} from ${this.id} to account ${anotherAccount.id}`)
    }
}

const account1 = new Account ('1000', 'Deborah', 25000);
const account2 = new Account ('3455', 'Victoria', 2000000);


console.log("Initial balances:");
console.log("Account 1 balance:", account1.balance);
console.log("Account 2 balance:", account2.balance);

account1.credit(1000);
account2.debit(200);

console.log("Updated balances:");
console.log("Account 1 balance:", account1.balance);
console.log("Account 2 balance:", account2.balance);

account1.transferTo(account2, 300);

console.log("Final balances:");
console.log("Account 1 balance:", account1.balance);
console.log("Account 2 balance:", account2.balance);
