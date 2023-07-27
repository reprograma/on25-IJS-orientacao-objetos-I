class Bank{
    bankCode;
    bankName;
    #trasnferTax;
    #qtyClients;
    static createdBanks = [];

    constructor(bankCode, bankName, transferTax){
        this.bankCode = bankCode;
        this.bankName = bankName;
        this.#trasnferTax = transferTax;
        this.#qtyClients = 0;

     
        Bank.createdBanks.push({
            bankCode: this.bankCode,
            qtyClients: this.qtyClients,
        })
        
    }
        get transferTax(){
            return this.#trasnferTax
        }
        set transferTax(transferTax){
            this.#trasnferTax = transferTax
        }

        addClient(bankCode) {
            const bank = Bank.createdBanks.find(b => b.bankCode === bankCode);
            if (bank) {
              bank.qtyClients++;
            }
        }
        // removeClient(bankCode){
            
        // }
    
}

const bank1 = new Bank(100, 'YelaBank', 0.01);
// console.log(bank1)
// console.log(Bank.createdBanks)
// bank1.transferTax = 0.02
// console.log(bank1.transferTax)

class Client{
    name;
    #cpf;
    banks;

    constructor(name, cpf, banks){
        this.name = name;
        this.#cpf = cpf;
        this.banks = [];
    }
    get cpf(){
        return this.#cpf
    }

    addBank(bank){
        if(!(bank instanceof Bank)){
            console.log('Informe um banco válido!');
            return
        }
        if(this.banks.includes(bank)){
            console.log(`Este banco ${bank.bankCode} já está asociado ao cliente ${this.name}.`)
        }else{
            this.banks.push(bank)
            bank.addClient()
            console.log(`Banco ${bank.bankCode} adicionado com sucesso ao cliente ${this.name}.`);
        }
        
    }

    removeBank(bank){
        if(!(bank instanceof Bank)){
            console.log('Informe um banco válido!');
            return
        }else if(!this.banks.includes(bank)){
            console.log(`Este banco ${bank.bankCode} não está asociado ao cliente ${this.name}.`)
            return;
        }else{
            this.banks = this.banks.filter((b) => b !== bank);
            //bank.removeClient();
            console.log(`Banco ${bank.bankCode} removido com sucesso do cliente ${this.name}.`)
            return;
        }
    }
}

const client1 = new Client('Eva', 123)
// console.log(client1)
// //console.log(client1.cpf)
client1.addBank(bank1) //Banco 100 adicionado com sucesso ao cliente Eva.
// client1.addBank(bank1) //Este banco 100 já está asociado ao cliente Eva  
// console.log(client1) //Client { name: 'Eva', banks: [ Bank { bankCode: 100, bankName: 'YelaBank' } ]}
// client1.removeBank(bank1) //Banco 100 removido com sucesso do cliente Eva.
// console.log(client1)//Client { name: 'Eva', banks: [] }

class BankAccount{
    client;
    bank;
    accountNumber;
    agencyNumber;
    #balance;
    
    constructor(client, bank, accountNumber, agencyNumber){
        if (!(client instanceof Client)) {
            console.log("Cliente inválido");
          }
          
          if (!(bank instanceof Bank)) {
            console.log("Banco Inválido");
          }
          
          if (!client.banks.includes(bank)) {
            console.log(`${client.name} não é cliente do Banco ${bank.bankName}.`);
          }

        this.client = client;
        this.bank = bank;
        this.accountNumber = accountNumber;
        this.agencyNumber = agencyNumber;
        this.#balance = 0;
    }

    get balance(){
        return this.#balance;
    }

    credit(amount){
        this.#balance += amount;
        // console.log(`Seu saldo atual é de R$ ${this.#balance}`);
    }
    debit(amount){
        this.#balance -= amount;
        // console.log(`Seu novo saldo é de R$ ${this.#balance}`);
    }
    transferTo(anotherAccount, amount){
        if(!(anotherAccount instanceof BankAccount)){
            console.log('Informe uma conta válida!')
            return
        }

        if(this.bank !== anotherAccount.bank){
            const transferAmount = amount + (amount * this.bank.transferTax);
            if(transferAmount > this.#balance){
                console.log(`Não tem saldo suficiente na conta ${this.accountNumber}. Seu saldo atual é de R$ ${this.#balance}`)
                return
            }
            this.debit(transferAmount);
            anotherAccount.credit(amount)
            console.log(`Transferencia de R$${amount} da conta ${this.accountNumber} para ${anotherAccount.accountNumber} con cobro de taxa de transferencia.`)
        }
        if(this.#balance < amount) {
            console.log(`Não tem saldo suficiente na conta ${this.accountNumber}. Seu saldo atual é de R$ ${this.#balance}`);
            return
        }else {
            this.debit(amount);
            anotherAccount.credit(amount);
            console.log(`Transferencia de R$${amount} da conta ${this.accountNumber} para ${anotherAccount.accountNumber}`)
        }
    }
}

const bankAccount1 = new BankAccount(client1, bank1, 1111, 2222); 
console.log(bankAccount1);

console.log(Bank.createdBanks)
