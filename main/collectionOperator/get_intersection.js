'use strict';

function get_intersection(collection_a, collection_b) {
  var res = [];
  for(var bItem = 0; bItem < collection_b.length; bItem++) {
    for(var aItem = 0; aItem < collection_a.length;) {
      if(collection_a[aItem] === collection_b[bItem]) {
        res.push(collection_b[bItem]);
        break;
      } else {
        aItem++;
      }
    }
  }
  return res;
}

module.exports = get_intersection;
