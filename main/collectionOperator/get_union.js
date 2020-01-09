'use strict';

function get_union(collection_a, collection_b) {
  let res = collection_a.concat(collection_b);
  for(let item = collection_a.length; item < res.length;) {
    if (res.indexOf(res[item]) !== item) {
      res.splice(item, 1);
    } else {
      item++;
    }
  }
  return res;
  //TODO: 用set试试？
}

module.exports = get_union;
