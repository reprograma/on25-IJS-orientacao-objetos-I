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

const item = new InvoiceItem(2, "produto 1", 3, 20);
console.log(item);
