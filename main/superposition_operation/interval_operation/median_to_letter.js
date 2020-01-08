'use strict';

function median_to_letter(collection) {
  var res;
  var numLen = collection.length;
  if (numLen % 2) {
    res = collection[(numLen - 1) / 2];
  } else {
    res =  (collection[numLen / 2 - 1] + collection[numLen / 2]) / 2;
  }
  return generateString(Math.ceil(res));
}

function generateString(index) {
  var excess = Math.floor((index - 1) / 26);
  var basic = 96 + index;
  var former = 96 + excess;
  var latter = 96 + index - excess * 26;
  if (!excess) {
    return String.fromCharCode(basic);
  } else {
    return String.fromCharCode(former) + String.fromCharCode(latter);
  }
}

module.exports = median_to_letter;
