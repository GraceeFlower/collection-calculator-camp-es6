'use strict';
function rank_by_two_large_one_small(collection) {
  let arr = collection.sort((pre, cur) => pre - cur);
  let res = [];
  for(let item = 0; item < arr.length;) {
    let subArr;
    if (item + 3 < arr.length) {
      subArr = arr.slice(item, item + 3);
      subArr.shift();
      subArr.push(arr[item]);
      res = res.concat(subArr);
      item += 3;
    } else {
      subArr = arr.slice(item);
      res = res.concat(subArr);
      item = arr.length;
    }
  }
  return res;
}

module.exports = rank_by_two_large_one_small;
