'use strict';

function compare_collections(collection_a, collection_b) {
  let res = true;
  if (collection_a.length === collection_b.length) {
    collection_a.forEach((value, index) => {
      if (value !== collection_b[index]) res = false;});
  } else {
    res = false;
  }
  return res;
}

module.exports = compare_collections;
