'use strict';

function median_to_letter(collection) {
  let res;
  let numLen = collection.length;
  res = numLen % 2 ? collection[(numLen - 1) / 2]
  : (collection[numLen / 2 - 1] + collection[numLen / 2]) / 2;
  return generateString(Math.ceil(res));
}

function generateString(index) {
  let excess = Math.floor((index - 1) / 26);
  let basic = 96 + index;
  let former = 96 + excess;
  let latter = 96 + index - excess * 26;
  if (!excess) {
    return String.fromCharCode(basic);
  } else {
    return String.fromCharCode(former) + String.fromCharCode(latter);
  }
}

module.exports = median_to_letter;
