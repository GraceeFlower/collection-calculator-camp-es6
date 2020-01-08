'use strict';
let number_map_to_word_over_26 = function(collection){
  return collection.map((item) => generateString(item));
};

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

module.exports = number_map_to_word_over_26;
