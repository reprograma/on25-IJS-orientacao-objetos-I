const { Bank } = require('./Bank');

class Client{
  name;
  #cpf;
  banks = [];

  constructor(name, cpf){
    this.name = name ;
    this.#cpf = cpf;
  }

  get cpf(){
    return this.#cpf;
  }

  addBank(bankt){
    if(!(bankt instanceof Bank)){
      console.log('Informe um banco válido!');
      return;
    }

    // Verifique se o cliente já tem esse banco associado a ele. Se tiver, retorne uma mensagem e não adicione novamente.
    if(this.banks.includes(bankt.name)){
      console.log(`Já tem o banco ${bankt.name} associado!`);
      return;
    }

    const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bankt.bankCode);
    Bank.createdBanks[bankIndex].qtdClients++;
  }

  // desassocia um banco a esse cliente
  removeBank(bankt){
    if(!(bankt instanceof Bank)){
      console.log('Informe um banco válido!');
      return;
    }
    if(!(this.banks.includes(bankt.name))){
      console.log(`Não tem o banco ${bankt.name} associado!`);
      return;
    }
    const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bankt.bankCode);
    Bank.createdBanks[bankIndex].qtdClients--;
  }
}

module.exports = ({ Client });