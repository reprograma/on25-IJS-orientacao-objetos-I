class Client {
  name;
  #cpf;
  banks;
  
  constructor(name,cpf, bank) {
    this.name = name;
    this.#cpf = cpf;
    this.banks = []
  }

  get cpf() {
    return this.#cpf;
  }

  addBank(bank) {

  }

  removeBank(){

  }
}