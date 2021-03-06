'use strict';

function spilt_to_zero(number, interval) {
  let res = [];
  for(let item = number; item > 0;) {
    let nextItem = (item * 10 - interval * 10) / 10;
    res.push(item);
    if (nextItem <= 0) {
      res.push(nextItem);
    }
    item = nextItem;
  }
  return res;
}

module.exports = spilt_to_zero;
