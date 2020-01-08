'use strict';
let even_group_calculate_average = function (collection) {
  let res = collection.filter((value, index) => value % 2 === 0 && index % 2 !== 0);
  if (res.length === 0) {return [0]}
  let subArr = [];
  res.forEach((item) => generateSubArr(subArr, item));
  return subArr.map((item) => 
    item.reduce((pre, cur) => pre + cur) / item.length)
    .filter((item) => item);
};

function generateSubArr(arr, item) {
  let itemLen = String(item).length;
  if (arr[itemLen - 1]) {
    arr[itemLen - 1].push(item);
  } else {
    arr[itemLen -1] = [item];
  }
  return arr;
}

module.exports = even_group_calculate_average;
