const { Bank, bank1 } = require("./Bank")

class Client {
    name
    #cpf
    banks = []

    constructor(name, cpf){
        this.name = name
        this.#cpf = cpf
    }

    get cpf() {
        return this.#cpf
    }
    
    addBank(bank) { // Podem desconsiderar os comentários, são apenas explicações para meus estudos
        
               //entramos na array createdBanks (propriedade estática da classe Bank)
                                            //usamos a função findIndex pra buscar o índice de um element, vamos olhar todos os elementos da array (cada banco na array de bancos)
                                                                //dentro desse element vai ter um bankCode
                                                                                // esse bankCode do element vai ser igual ao bankCode do bank passado na função
                                                                                        // aí retorna o índice do element na array
        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode)
        //Entramos na Classe Bank
            //entramos na array createdBanks, dentro de Bank
                        //passo a posição que achamos ali em cima
                                    // adiciono 1 ao numClients que é uma propriedade também da Classe Bank
        Bank.createdBanks[bankIndex].numClients++

        if(!bank instanceof Bank) {
            return console.log(`Este banco é inválido`)
        } else if(this.banks.includes(bank)) {
            return console.log(`Esta pessoa usuária já é cliente deste banco`)
        } else {
            this.banks.push(bank)
        }
    }

    removeBank(bank) {
        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode)
        Bank.createdBanks[bankIndex].numClients--

        if(!bank instanceof Bank) {
            return console.log(`Este banco é inválido`)
        } else if(this.banks.includes(!bank)) {
            return console.log(`Esta pessoa usuária não é cliente deste banco`)
        } else {
            this.banks.pop(bank)
        }
    }
}

const client1 = new Client("Maria", 123)
// console.log(client1)
// console.log(client1.cpf)

// client1.addBank(bank1)
// console.log(client1)

// client1.removeBank(bank1)
// console.log(client1)

module.exports = { Client, client1 }