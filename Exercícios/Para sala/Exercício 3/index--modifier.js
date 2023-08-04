class BankAccount {
  id;
  name;
  #balance; //Atributo privado ( encapsulado)

  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.#balance = balance;
  }

  credit(amount) {
    this.#balance += amount;
    return console.log(
      `Deposito realizado com sucesso. O seu saldo atual é ${this.#balance}`
    );
  }

  debit(amount) {
    this.#balance -= amount;
    return console.log(
      `Saque realizado com sucesso. O seu saldo atualizado é ${this.#balance}`
    );
  }

  transferTo(anotherAccount, amount) {
    // Essa validação de instanciação permite que o código  reconheça o paramentro como objeto;
    if (!(anotherAccount instanceof BankAccount)) {
      return console.log("Informe uma conta válida!");
    } else {
      if (amount <= this.#balance) {
        this.#balance -= amount;
        // this.debit(amount)
        anotherAccount.#balance += amount;
        // anotherAccount.credit(amount)

        return console.log(`Transferência de ${amount} realizada com sucesso.`);
      } else {
        return console.log(`Transferência negada.`);
      }
    }
  }
}

const laissaAccount = new BankAccount(1, "Laíssa", 15000);
const contaDeTerceiros = new BankAccount(2, "Conta de Terceiros", 1000);

console.log(laissaAccount);
console.log(contaDeTerceiros);

laissaAccount.credit(1000);
console.log(laissaAccount);

laissaAccount.debit(10000);
console.log(laissaAccount);
console.log(contaDeTerceiros);

laissaAccount.transferTo(contaDeTerceiros, 1000);

console.log(laissaAccount);
console.log(contaDeTerceiros);

laissaAccount.transferTo(contaDeTerceiros, 10000);
