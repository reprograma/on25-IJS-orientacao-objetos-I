import { Bank } from "./entregas/Doria-fernandes/Bank";
// import { BankAccount } from "./entregas/Doria-fernandes/BankAccount";

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
            return 'Informe um Banco válido';
        } if (bank == banks) {
            return 'Este cliente já possui vínculo a este banco';
        } else {
            this.banks.unshift(bank)

            return "Cliente vínculado com sucesso";
        }
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            return 'Informe um Banco válido';
        }
    }

}



export { Client }