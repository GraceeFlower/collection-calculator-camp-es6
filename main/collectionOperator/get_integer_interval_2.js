'use strict';

function get_integer_interval_2(number_a, number_b) {
  var res = [];
  if (number_a < number_b) {
    var item = number_a % 2 ? number_a + 1 : number_a;
    while(item <= number_b) {
      res.push(item);
      item += 2;
    }
  } else if(number_a > number_b) {
    var item = number_a % 2 ? number_a - 1 : number_a;
    while(item >= number_b) {
      res.push(item);
      item -= 2;
    }
  } else {
    if (!(number_a % 2)) {
      res.push(number_a);
    }
  }
  return res;
}

module.exports = get_integer_interval_2;
