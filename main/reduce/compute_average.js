'use strict';

function compute_average(collection) {
  return collection.reduce((pre, cur) => pre + cur)/collection.length;
}

module.exports = compute_average;
