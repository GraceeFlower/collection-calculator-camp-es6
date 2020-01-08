'use strict';
let even_asc_odd_desc = function (collection) {
  let evenArr = collection.filter((item) => item % 2 === 0);
  let oddArr = collection.filter((item) => item % 2 !== 0);
  evenArr.sort((pre, cur) => pre - cur);
  oddArr.sort((pre, cur) => cur - pre);
  return evenArr.concat(oddArr);
};

module.exports = even_asc_odd_desc;
