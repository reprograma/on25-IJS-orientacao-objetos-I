const {Bank} = require('./Bank')
// const{BankAccount} = require('./BankAccount')
class Client {
  name;
  #cpf;
  banks;

  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
    this.banks = [];
  }

  get cpf() {
    return this.#cpf;
  }

  addBank(bank) {
    if(!(bank instanceof Bank)) {
      return `Insira um Banco válido.`
    } else {
      if(!this.banks.includes(bank)) {
        this.banks.push(bank);
        bank.qtdClient ++;
        return console.log("O banco foi adicionado.")
      }
    }
  }

  removeBank() {

  }
}

const testeBank = new Bank( 789 , "testBank", 0.05);
const testeBank2 = new Bank( 245 , "Teste 2", 0.04);

const laissa = new Client("Laíssa", 13213213205)
const lucas = new Client("Lucas", 13285965874)
console.log(testeBank)
console.log(laissa)

laissa.addBank("nunbank")
console.log(laissa.addBank("nunbank"))
console.log(laissa.addBank(testeBank))
console.log(laissa.addBank(testeBank2))
console.log(lucas.addBank(testeBank2))
console.log(laissa.banks)


module.exports = {Client}