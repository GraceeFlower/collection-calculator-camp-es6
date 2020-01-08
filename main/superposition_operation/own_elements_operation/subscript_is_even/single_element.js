'use strict';
var single_element = function(collection){
  var res = collection.filter((value, index) => index % 2 !== 0);
  var repeat = res.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
  });
  if(repeat.length === 0) {
    return [];
  }
  return res.filter((value) => !repeat.includes(value));
};

module.exports = single_element;
