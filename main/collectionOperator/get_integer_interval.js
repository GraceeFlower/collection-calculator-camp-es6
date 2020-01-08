'use strict';

function get_integer_interval(number_a, number_b) {
  let res = [];
  if (number_a < number_b) {
    for(let item = number_a; item <= number_b; item++) {
      res.push(item);
    }
  } else if(number_a > number_b) {
    for(let item = number_a; item >= number_b; item--) {
      res.push(item);
    }
  } else {
    res.push(number_a);
  }
  return res;
}

module.exports = get_integer_interval;

