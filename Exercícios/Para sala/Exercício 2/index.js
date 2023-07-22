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

const notebook = new InvoiceItem(1, "NoteBook", 20, 2000.0);
