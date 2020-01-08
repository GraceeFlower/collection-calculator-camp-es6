'use strict';

function choose_common_elements(collection_a, collection_b) {
  let totalArr = collection_b.concat(collection_a);
  return totalArr.filter((value, index, array) => 
    array.indexOf(value) !== index, collection_b.length);
}

module.exports = choose_common_elements;
