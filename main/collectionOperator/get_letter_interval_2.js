'use strict';

function get_letter_interval_2(number_a, number_b) {
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

function generateString(index) {
  var excess = Math.floor((index - 1) / 26);
  var basic = 96 + index;
  var former = 96 + excess;
  var latter = 96 + index - excess * 26;
  return (excess ? String.fromCharCode(former) + String.fromCharCode(latter) :
      String.fromCharCode(basic));
}

module.exports = get_letter_interval_2;
