'use strict';

function get_intersection(collection_a, collection_b) {
  let res = [];
  collection_b.forEach(item => {
    collection_a.forEach(value => {
      if (value === item) {res.push(item);}
    });
  });
  return res;
}

module.exports = get_intersection;
