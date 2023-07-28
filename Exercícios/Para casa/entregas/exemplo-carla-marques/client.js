const { Bank } = require('./bank.js')
class Client{
    #cpf
    constructor(name,cpf){
        this.name = name;
        this.#cpf = cpf;
        this.banks = [];
    }
    get cpf(){
        return this.#cpf;
    }
    addBank(bank){
        if(bank instanceof Bank){ 
            if(this.banks.includes(bank)){ 
                console.log('O cliente já tem esse banco associado a ele.')
            }else{
                this.banks.push(bank);
                bank.qtdClients += 1;
            }
        }else{
            console.log('Não é um banco válido.')
        }
    }
    removeBank(bank){
        if(bank instanceof Bank){
            if(this.banks.includes(bank)){
                this.banks.forEach((bankInArray,index) => {
                    if(bankInArray === bank){
                        this.banks.splice(index,1); 
                    }
                }) 
                bank.qtdClients -= 1;
            }else{
                console.log('O cliente não tem esse banco associado a ele.')
            }
        }else{
            console.log('Não é um banco válido.')
        }
    }
} 
module.exports = { Client }