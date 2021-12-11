"use strict";

const rectangle = {
  width: 10,
  height: 20,
  getSquare() {
    return this.width * this.height;
  },
};

console.log(rectangle.getSquare());
