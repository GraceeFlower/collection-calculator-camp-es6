'use strict';

function calculate_elements_sum(collection, element) {
  let item = 0;
  while(item < collection.length) {
    if (collection[item] === element) {
      return item;
    } else {
      item++;
    }
  }
}

module.exports = calculate_elements_sum;
