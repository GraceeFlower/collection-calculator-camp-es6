'use strict';

function amount_even(collection) {
  return collection.filter((item) => item % 2 === 0)
  .reduce((pre, cur) => pre + cur);
}

module.exports = amount_even;
