'use strict';
let single_element = function (collection) {
  let res = collection.filter((value, index) => index % 2 !== 0);
  let repeat = res.filter((value, index, array) => 
    array.indexOf(value) !== index);
  if(repeat.length === 0) {
    return [];
  }
  return res.filter((value) => !repeat.includes(value));
};

module.exports = single_element;
