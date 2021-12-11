"use strict";

function task6() {
  const products = {
    price: 25,
    quantity: 25,
    totalPrice() {
      return this.price * this.quantity;
    },
  };

  const details = {
    price: 11,
    quantity: 11,
    totalPrice: products.totalPrice,
  };

  console.log(details.totalPrice());
}

task6();
