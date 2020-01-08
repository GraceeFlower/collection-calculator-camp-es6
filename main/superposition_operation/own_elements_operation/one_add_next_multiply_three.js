'use strict';
function one_add_next_multiply_three(collection) {
  let res = [];
  collection.forEach((item, index, arr) => {
    if (index + 1 !== arr.length) {
      res.push((item + arr[index + 1]) * 3);
    }
  });
  return res;
}

module.exports = one_add_next_multiply_three;
