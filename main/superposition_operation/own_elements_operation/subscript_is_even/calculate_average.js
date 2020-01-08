'use strict';
let calculate_average = function (collection) {
  let res = collection.filter((value, index) => index % 2 !== 0);
  return res.reduce((pre, cur) => pre + cur) / res.length;
};

module.exports = calculate_average;
