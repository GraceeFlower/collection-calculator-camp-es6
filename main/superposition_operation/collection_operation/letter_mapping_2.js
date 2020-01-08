'use strict';

function average_to_letter(collection) {
  var res = (collection.reduce((pre, cur) => pre + cur))/collection.length;
  return generateString(Math.ceil(res));
}

function generateString(index) {
  var excess = Math.floor((index - 1) / 26);
  var basic = 96 + index;
  var former = 96 + excess;
  var latter = 96 + index - excess * 26;
  return (excess ? String.fromCharCode(former) + String.fromCharCode(latter) : 
    String.fromCharCode(basic));
}

module.exports = average_to_letter;
