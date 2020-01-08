'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((pre, cur) => pre + cur);
}

module.exports = calculate_elements_sum;

