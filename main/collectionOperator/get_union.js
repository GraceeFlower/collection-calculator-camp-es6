'use strict';

function get_union(collection_a, collection_b) {
  var res = collection_a.concat(collection_b);
  for(var item = collection_a.length; item < res.length;) {
    if (res.indexOf(res[item]) !== item) {
      res.splice(item, 1);
    } else {
      item++;
    }
  }
  return res;
}

module.exports = get_union;