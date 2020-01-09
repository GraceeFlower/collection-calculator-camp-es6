'use strict';

function double_to_one(collection) {
  return collection.reduce((pre, cur) => pre.concat(cur), []);
  //TODO: flat?
}

module.exports = double_to_one;
