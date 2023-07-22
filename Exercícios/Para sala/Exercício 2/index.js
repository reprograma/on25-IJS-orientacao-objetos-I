class InvoiceItem {
  id;
  description;
  quantity;
  unityPrice;

  constructor(id, description, quantity, unityPrice) {
    this.id = id
    this.description = description
    this.quantity = quantity
    this.unityPrice = unityPrice
  }
}

const phone = new InvoiceItem(1, "Samsung cell phone", 1, 2000)
console.log(phone)