'use strict';

function get_letter_interval(number_a, number_b) {
  var res = [];
  if (number_a < number_b) {
    for(var item = number_a; item <= number_b; item++) {
      res.push(generateString(item));
    } 
  } else if (number_a > number_b) {
    for(var item = number_a; item >= number_b; item--) {
      res.push(generateString(item));
    }
  } else {
    res.push(generateString(number_a));
  }
  return res;
}

function generateString(item) {
  return String.fromCharCode(96 + item);
}

module.exports = get_letter_interval;