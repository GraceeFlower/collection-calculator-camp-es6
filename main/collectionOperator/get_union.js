'use strict';

function get_union(collection_a, collection_b) {
  let totalArr = collection_a.concat(collection_b);
  let mySet = new Set(totalArr);
  return [...mySet];
}

module.exports = get_union;
