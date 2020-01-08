'use strict';

function double_to_one(collection) {
  var res =  collection.reduce((pre, cur) => pre.concat(cur), []);
  return res.filter((value, index, array) => array.indexOf(value) === index);
}

module.exports = double_to_one;
