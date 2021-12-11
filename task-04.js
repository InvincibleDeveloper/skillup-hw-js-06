"use strict";

const isStrict = function () {
  return !this;
};

const numerator = {
  value: 1,

  double: function () {
    this.value *= 2;
    return this;
  },

  plusOne: function () {
    ++this.value;
    return this;
  },

  minusOne: function () {
    --this.value;
    return this;
  },
};

numerator.double().plusOne().plusOne().minusOne();
console.info(numerator.value);
