const Bank = require('./Bank');

class Client {
  name;
  #cpf;
  banks = [];

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
  }

  get cpf() {
    return this.#cpf;
  }


  addBank(bank) {

    if (!(bank instanceof Bank)) {
      console.log('Error: Invalid bank instance. Please provide a valid Bank.');
      return;
    }
  
    if (this.banks.includes(bank)) {
      console.log(`The client already has the bank ${bank.bankName} associated.`);
      return;
    }
  
    this.banks.push(bank);    
    
    const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
    if (bankIndex !== -1) {
      Bank.createdBanks[bankIndex].totalClients++;
  }
  }

  removeBank(bank) {
    if (!(bank instanceof Bank)) {
      console.log('Error: Invalid bank instance. Please provide a valid Bank.');
      return;
    }
  
    const bankIndex = this.banks.indexOf(bank);
    if (bankIndex === -1) {
      console.log(`The client does not have the bank ${bank.bankName} associated.`);
      return;
    }
  
    this.banks.splice(bankIndex, 1);
  
    const bankIndexInCreatedBanks = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode);
    if (bankIndexInCreatedBanks !== -1) {
      Bank.createdBanks[bankIndexInCreatedBanks].totalClients--;
    }
  }
}

const client1 = new Client ('Deborah Gomes', '111.111.111-11');

// client1.addBank(bank1);
// client1.addBank(bank2);
// client1.addBank(bank3);

// // client1.addBank(bank2);

// // client1.removeBank(bank3);
// // client1.removeBank(bank3);

// console.log(client1.getBanks());




module.exports = Client;
