'use strict';

function find_first_even(collection) {
  let item = 0;
  while(item < collection.length) {
    if (collection[item] % 2) {
      item++;
    } else {
      return collection[item];
    }
  }
  return null;
}

module.exports = find_first_even;
