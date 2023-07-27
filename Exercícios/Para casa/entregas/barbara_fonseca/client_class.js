const { Bank }= require("./bank_class")

class Client {
    name
    #cpf
    banks

    constructor(name, cpf){
        this.name = name
        this.#cpf = cpf 
        this.banks = []
    }

    get cpf() {
        return this.#cpf
    }

    addBank(bank){
        if (!(bank instanceof Bank)) {
            console.log(`Banco inválido!`)
            return
        } 
        
        if (this.banks.includes(bank.bankName)) {
            console.log(`Erro: Banco ${bank.bankName} já associado!`)
            return
        }
        else {
            this.banks.push(bank.bankName)
            console.log(`Associação do banco ${bank.bankName} realizada com sucesso!`)
        }
        //AUMENTAR A QUANTIDADE DE CLIENTES
        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode)
        Bank.createdBanks[bankIndex].qtdClients++
    }
    //EXEMPLO: createdBanks = [banco1, banco2, banco3...]
    // index = posição

    removeBank(bank) {
        if (!(bank instanceof Bank)) {
            console.log(`Banco inválido!`)
            return
        } 
        
        if (this.banks.includes(bank.bankName)) {
            this.banks.splice(bank.bankName)
            console.log(`Desassociação do banco ${bank.bankName} realizada com sucesso!`) 
        }
        else {
            console.log(`Erro: Este banco não é associado ao cliente!`)
        }
        // DIMINUIR A QUANTIDADE DE CLIENTES
        const bankIndex = Bank.createdBanks.findIndex((element) => element.bankCode === bank.bankCode)
        Bank.createdBanks[bankIndex].qtdClients--
    }   

}

/*console.log(Bank.createdBanks)
let ana = new Client("Ana", 12312312312, [])
console.log(ana)
const bbank = new Bank(1, "BBank", 0.05)
console.log(Bank.createdBanks)
ana.addBank(bbank)
console.log(ana)
console.log(Bank.createdBanks)
ana.removeBank(bbank)
console.log(ana)
console.log(Bank.createdBanks)*/



module.exports = { Client }