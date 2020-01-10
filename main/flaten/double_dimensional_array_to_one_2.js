'use strict';

function double_to_one(collection) {
  let mySet = new Set(collection.flat());
  return [...mySet];
}

module.exports = double_to_one;
