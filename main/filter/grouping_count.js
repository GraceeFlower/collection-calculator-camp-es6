'use strict';

function grouping_count(collection) {
  var res = {};
  collection.filter(value => 
    value in res ? res[value]++ : res[value] = 1);
  return res;
}

module.exports = grouping_count;
