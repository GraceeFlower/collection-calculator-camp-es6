'use strict';
function rank_by_two_large_one_small(collection){
  var arr = collection.sort((pre, cur) => pre - cur);
  var res = [];
  for(var item = 0; item < arr.length;) {
    if (item + 3 < arr.length) {
      var subArr = arr.slice(item, item + 3);
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
