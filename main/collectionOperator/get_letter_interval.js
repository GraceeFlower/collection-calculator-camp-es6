'use strict';

function get_letter_interval(number_a, number_b) {
  let res = [];
  if (number_a < number_b) {
    for(let item = number_a; item <= number_b; item++) {
      res.push(generateString(item));
    } 
  } else {
    for(let item = number_a; item >= number_b; item--) {
      res.push(generateString(item));
    }
  }
  return res;
}

function generateString(item) {
  return String.fromCharCode(96 + item);
}

module.exports = get_letter_interval;