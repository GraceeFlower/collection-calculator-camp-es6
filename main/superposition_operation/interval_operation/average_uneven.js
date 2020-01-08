'use strict';

function average_uneven(collection) {
  var res = collection.filter((item) => item % 2 !== 0);
  return res.reduce((pre, cur) => pre + cur) / res.length;
}

module.exports = average_uneven;
