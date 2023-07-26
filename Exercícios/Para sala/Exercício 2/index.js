class InvoiceItem{
    id;
    description;
    quantity;
    unityPrice;

    constructor (id, description, quantity, unityPrice){
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.unityPrice = unityPrice;
    }
}

const item1 = new InvoiceItem(1,'celular', 3, 499.99)

console.log(item1)