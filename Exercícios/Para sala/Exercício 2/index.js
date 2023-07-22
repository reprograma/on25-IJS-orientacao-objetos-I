class InvoiceItem {
    id;
    description;
    quantity;
    unityPrice;

constructor(id, description, quantity, unityPrice) {
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.unitPrice = unityPrice;
   }
}

const item1 = new InvoiceItem(123, 'Produto', 3, 25.8);
console.log(item1);

