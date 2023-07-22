class InvoiceItem{ // ainda não fiz, só copiei do exercício 4
    id
    description
    quantity
    unityPrice

    constructor(id, description, quantity, unityPrice){
        this.id = id
        this.description = description
        this.quantity = quantity
        this.unityPrice = unityPrice
    }
}

invoice1 = new InvoiceItem(1, "descrição", 2, 10)
console.log(invoice1)