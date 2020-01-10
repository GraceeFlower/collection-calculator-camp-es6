'use strict';

function calculate_elements_sum(collection, element) {
  return collection.findIndex(item => element === item);
}

module.exports = calculate_elements_sum;
