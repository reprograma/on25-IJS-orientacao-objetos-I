class InvoiceItem {
  #id;
  #description;
  #quantity;
  #unityPrice;

  constructor(id, description, quantity, unityPrice) {
    this.#id = id
    this.#description = description
    this.#quantity = quantity
    this.#unityPrice = unityPrice
  }

  get id() {
    return this.#id
  }

  get description() {
    return this.#description
  }

  get quantity() {
    return this.#quantity
  }

  set quantity(newQuantity) {
    this.#quantity = newQuantity
  }

  get unityPrice() {
    return this.#unityPrice
  }

  set unityPrice(newUnityPrice) {
    this.#unityPrice = newUnityPrice
  }

  get total() {
    return this.#unityPrice * this.#quantity
  }

  toString() {
    return `id: ${this.#id}, desc: ${this.#description}, qty: ${this.#quantity}, unitPrice: ${this.#unityPrice}`
  }
}

const phone = new InvoiceItem(1, "Samsung cell phone", 1, 2000)
console.log(phone)