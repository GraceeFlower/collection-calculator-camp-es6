'use strict';

function calculate_elements_sum(collection, element) {
  var item = 0;
  var res;
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
