'use strict';

function even_to_letter(collection) {
  return collection.filter((item) => item % 2 === 0)
  .map((item) => generateString(item));
}

function generateString(index) {
  let excess = Math.floor((index - 1) / 26);
  let basic = 96 + index;
  let former = 96 + excess;
  let latter = 96 + index - excess * 26;
  return (excess ? String.fromCharCode(former) + String.fromCharCode(latter) : 
    String.fromCharCode(basic));
}

module.exports = even_to_letter;
 