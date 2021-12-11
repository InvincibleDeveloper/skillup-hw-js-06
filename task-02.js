"use strict";

const price = {
  price: 10,
  discount: "15%",

  getPrice() {
    return this.price;
  },

  getPriceWithDiscount() {
    return this.price - (this.price * parseInt(this.discount)) / 100;
  },
};

console.log(price.getPrice());
console.info(price.getPriceWithDiscount());
