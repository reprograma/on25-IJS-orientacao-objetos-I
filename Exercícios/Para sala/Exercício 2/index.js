class InvoiceItem {
    constructor(id, description, quantity, unityPrice){
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.unityPrice = unityPrice;
    }
}

const item = new InvoiceItem(2, "tênis", 1, 10);
console.log(item)