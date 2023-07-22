class InvoiceItem {
    id;
    description;
    quantity;
    unityPrice;

    constructor(id, description, quantity, unityPrice) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.unityPrice = unityPrice;
    }

}

const item1 = new InvoiceItem(2, "bla bla", 30, 19.5)
console.log(item1)

