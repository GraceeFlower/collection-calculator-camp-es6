'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map((item) => generateString(item));
};

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

module.exports = number_map_to_word_over_26;
