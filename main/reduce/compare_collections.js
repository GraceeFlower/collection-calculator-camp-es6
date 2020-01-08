'use strict';

function compare_collections(collection_a, collection_b) {
  var res = true;
  if (collection_a.length === collection_b.length) {
    collection_a.reduce(function (pre, cur, index, array) {
      if (array[index] !== collection_b[index]) {
        res = false;
      }
    });
  } else {
    res = false;
  }
  return res;
}

module.exports = compare_collections;
