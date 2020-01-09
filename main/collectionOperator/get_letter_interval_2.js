'use strict';

function get_letter_interval_2(number_a, number_b) {
  let res = [];
  if (number_a < number_b) {
    for(let item = number_a; item <= number_b; item++) {
      res.push(generateString(item));
    }
  } else if (number_a > number_b) {
    for(let item = number_a; item >= number_b; item--) {
      res.push(generateString(item));
    }
  } else { //TODO: 这个case和上面能合起来
      res.push(generateString(number_a));
  }
  return res;
}

function generateString(index) {
  let excess = Math.floor((index - 1) / 26);
  let basic = 96 + index;
  let former = 96 + excess;
  let latter = 96 + index - excess * 26;
  return (excess ? String.fromCharCode(former) + String.fromCharCode(latter) :
      String.fromCharCode(basic));
}

module.exports = get_letter_interval_2;
