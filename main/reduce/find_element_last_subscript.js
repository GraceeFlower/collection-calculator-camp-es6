'use strict';

function calculate_elements_sum(collection, element) {
  let item = 0;
  let res;
  while(item < collection.length) {
    if (collection[item] === element) {
      res = item;
      item++;
    } else {
      item++;
    }
  }
  return res;
}
  
module.exports = calculate_elements_sum;
