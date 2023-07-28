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

const onion = new InvoiceItem ('2', 'purple onion', 10000, 0.5);

console.log(onion);
