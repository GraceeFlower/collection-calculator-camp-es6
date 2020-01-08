'use strict';

function compute_chain_median(collection) {
  var array = collection.split("->").map((item) => parseInt(item));
  array.sort((pre, cur) => pre - cur);
  var numLen = array.length;
  if (numLen % 2) {
    return array[(numLen - 1) / 2];
  } else {
    return (array[numLen / 2 - 1] + array[numLen / 2]) / 2;
  }
}

module.exports = compute_chain_median;
