'use strict';

function get_letter_interval(number_a, number_b) {
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

function generateString(item) {
  return String.fromCharCode(96 + item);
}

module.exports = get_letter_interval;
