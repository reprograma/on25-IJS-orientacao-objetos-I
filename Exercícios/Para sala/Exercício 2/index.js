class InvoiceItem{
    id;
    description;
    quantity;
    unityPrice;

    constructor(id, description, quantity, unityPrice){
        this.id = id,
        this.description = description,
        this.quantity = quantity,
        this.unityPrice = unityPrice
    }
}

const item = new InvoiceItem(1, "shampoo", 2, 37.50);
console.log(item);