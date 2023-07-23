import { Bank } from "./entregas/Doria-fernandes/Bank";

class Client {
    name;
    #cpf;
    banks;

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
        } if (bank) {
            return 'Este cliente já possui vínculo a este banco'
        }
    }

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            return 'Informe um Banco válido';
        }
    }
}



export { Client }