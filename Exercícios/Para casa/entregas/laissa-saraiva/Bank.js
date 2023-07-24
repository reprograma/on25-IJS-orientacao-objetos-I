class Bank {
  bankcode;
  bankName;
  #transferTax;
  // createdBanks;

  constructor(bankcode, bankName, transferTax) {
    this.bankcode = bankcode;
    this.bankName = bankName;
    this.#transferTax = transferTax;
  }

  get transferTax() {
    return this.#transferTax
  }

  set transferTax(newTax) {
    return this.#transferTax = newTax;
  }
}

const laissa = new Bank( 123 , "NuBank", 0.05);

console.log(laissa);
console.log(laissa.transferTax)
laissa.transferTax = 0.06;
console.log(laissa.transferTax)

//  createdBanks: Bancos criados

// Propriedade estática, sendo ela uma array de objetos que é inicialmente vazia e é atualizada a cada vez que um novo banco é criado, contendo:
// Código do banco criado
// Quantidade de clientes que esse banco possui
// Esse valor deve ser inicializado com 0 e aumentar a medida que um cliente é associado a esse banco.