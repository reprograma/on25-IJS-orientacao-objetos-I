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

compra = new InvoiceItem(1, "Fone Bluetooth", "1", 300);
console.log(compra);
