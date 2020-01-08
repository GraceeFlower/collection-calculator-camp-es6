'use strict';

function even_to_letter(collection) {
  var res = collection.filter((item) => item % 2 === 0);
  return res.map((item) => generateString(item));
}

function generateString(index) {
  var excess = Math.floor((index - 1) / 26);
  var basic = 96 + index;
  var former = 96 + excess;
  var latter = 96 + index - excess * 26;
  return (excess ? String.fromCharCode(former) + String.fromCharCode(latter) : 
    String.fromCharCode(basic));
}

module.exports = even_to_letter;
 