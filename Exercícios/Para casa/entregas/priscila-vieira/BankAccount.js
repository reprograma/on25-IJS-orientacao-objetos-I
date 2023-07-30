const { Client } = require('./Client');

class BankAccount{
  client;
  bank;
  accountNumber;
  agencyNumber;
  #balance = 0;

  constructor(client, Bank, accountNumber, agencyNumber){
    this.client = client;
    this.bank = bank;
    this.accountNumber = accountNumber;
    this.agencyNumber = agencyNumber;
  }

  get balance(){
    return this.#balance;
  }

  credit(amount){ 
		this.#balance += amount;
		console.log(`O saldo atualizado é de R$ ${this.#balance}`);
  }

  debit(amount){
    if (amount > this.#balance) {
			console.log(`Seu saldo R$ ${this.#balance} é insuficiente para realizar essa operação.`);
			return;
		}
    this.#balance -= amount;
		console.log(`Debitado ${amount}. O saldo atual é de R$ ${this.#balance}`);
  }

  transferTo(anotherAccount, amount){    
		if (!(anotherAccount instanceof BankAccount)) {
			console.log('Informe uma conta válida!');
			return;
		}

    if(this.bank !== anotherAccount.bank){  
      //amount += 1 + (Bank.#transferTax / 100);
      this.debit(amount);
      anotherAccount.#balance += amount;      
    } else {
      this.debit(amount);
      anotherAccount.#balance += amount;
    }
    console.log(`Transferência realizada com sucesso para ${anotherAccount.client.name}!`);
  }

  closeAccount(){
    if (this.#balance > 0){
        console.log(`Para fechar a conta seu saldo R$ ${this.#balance} deverá ser zerado`);
        return;
    } 
    this.client.removeBank(this.bank);
    Object.keys(this).forEach(key => this[key] = undefined);
    console.log("Conta encerrada com sucesso!");   
  }
}