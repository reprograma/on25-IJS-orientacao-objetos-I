class InvoiceItem {
    constructor(id, description, quantity, unityPrice) {
        this.id = id
        this.description = description
        this.quantity = quantity
        this.unityPrice = unityPrice
    }
}

const item1 = new InvoiceItem(123, "produto 1", 3, 19.90)
console.log(item1)