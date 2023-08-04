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

const roupa = new InvoiceItem(123, "Produto 01", 3, 9.9);
console.log(roupa);
