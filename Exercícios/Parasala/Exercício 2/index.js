class InvoiceItem{
    id // apenas boa prática passar aqui em cima os atributos
    description // são os atributos que vamos passar no constructor e os que não vamos
    quantity // não passa método aqui
    unityPrice // quando formos falar de encapsulamento e atributos estáticos isso vai ser importante

    constructor(id, description, quantity, unityPrice){
        this.id = id
        this.description = description
        this.quantity = quantity
        this.unityPrice = unityPrice
    }
}

invoice1 = new InvoiceItem(1, "descrição", 2, 10)
console.log(invoice1)