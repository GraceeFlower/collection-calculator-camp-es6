'use strict';
var even_asc_odd_desc = function(collection){
  var evenArr = collection.filter((item) => item % 2 === 0);
  var oddArr = collection.filter((item) => item % 2 !== 0);
  evenArr.sort((pre, cur) => pre - cur);
  oddArr.sort((pre, cur) => cur - pre);
  return evenArr.concat(oddArr);
};

module.exports = even_asc_odd_desc;
