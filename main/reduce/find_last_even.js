'use strict';

function find_last_even(collection) {
  var item = 0;
  var res = null;
  while(item < collection.length) {
    if (collection[item] % 2) {
      item++;
    } else {
      res = collection[item];
      item++;
    }
  }
  return res;
}

module.exports = find_last_even;
