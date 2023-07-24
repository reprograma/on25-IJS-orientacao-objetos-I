class InvoiceItem {
    #id;
    #desc;
    #qty;
    #unitPrice;

    constructor(id, desc, qty, unitPrice){
        this.#id = id,
        this.#desc = desc,
        this.#qty = qty,
        this.#unitPrice = unitPrice
    }

    get id(){
        return this.#id;
    }

    get desc(){
        return this.#desc;
    }

    get qty(){
        return this.#qty;
    }

    set qty(newQty){
        this.#qty = newQty;
    }

    get unitPrice(){
        return this.#unitPrice;
    }

    set unitPrice(newUnitPrice){
        this.#unitPrice = newUnitPrice;
    }

    get total(){
        return this.#unitPrice * this.#qty;
    }

    returnItem(){
        const itemString = `InvoiceItem[id = ${this.#id}], desc = ${this.#desc}, qty = ${this.#qty}, unitPrice = ${this.#unitPrice}`;
        return itemString;
    }
}
const item1 = new InvoiceItem(1, "shampoo", 2, 37.50);

const item2 = new InvoiceItem(2, "mousse", 1, 42);