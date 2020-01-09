'use strict';

function find_last_even(collection) {
  let item = 0;
  let res = null;
  while(item < collection.length) {
    if (collection[item] % 2) {
      item++;
    } else {
      res = collection[item];
      item++;
    }
  }
  return res;

  //TODO: collection.find?
}

module.exports = find_last_even;
