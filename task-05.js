"use strict";

const products = {
  price: 25,
  quantity: 25,
  totalPrice() {
    return this.price * this.quantity;
  },
};

console.log(products.totalPrice());
