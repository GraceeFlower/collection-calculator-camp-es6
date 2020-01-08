'use strict';

function average_to_letter(collection) {
  let res = (collection.reduce((pre, cur) => pre + cur))/collection.length;
  return generateString(Math.ceil(res));
}

function generateString(index) {
  let excess = Math.floor((index - 1) / 26);
  let basic = 96 + index;
  let former = 96 + excess;
  let latter = 96 + index - excess * 26;
  return (excess ? String.fromCharCode(former) + String.fromCharCode(latter) : 
    String.fromCharCode(basic));
}

module.exports = average_to_letter;
