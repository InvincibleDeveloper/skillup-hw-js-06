"use strict";

const object = {
  height: 10,
  increaseHeight() {
    return ++this.height;
  },
};

console.log((object.height = 10));
console.log(object.increaseHeight());
console.log(object.height);
