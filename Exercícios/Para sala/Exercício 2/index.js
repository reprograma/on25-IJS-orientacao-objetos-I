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

const item1 = new InvoiceItem(123, 'Produto 1', 3, 19.9);
console.log(item1);