'use strict';

function double_to_one(collection) {
  let res =  collection.reduce((pre, cur) => pre.concat(cur), []);
  return res.filter((value, index, array) => array.indexOf(value) === index);
  //TODO: return [...new Set(collection.flat())];
}

module.exports = double_to_one;
