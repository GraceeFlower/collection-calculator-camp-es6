'use strict';

function grouping_count(collection) {
  var res = {};
  collection.filter(function (value) {
    if (value in res) {
      res[value]++;
    } else {
      res[value] = 1;
    }
  });
  return res;
}

module.exports = grouping_count;
