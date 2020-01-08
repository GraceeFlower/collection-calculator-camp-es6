'use strict';
var calculate_median = function(collection){
  var res = collection.filter((value, index) => index % 2 !== 0);
  var numLen = res.length;
  if (numLen % 2) {
    return res[(numLen - 1) / 2];
  } else {
    return (res[numLen / 2 - 1] + res[numLen / 2]) / 2;
  }
};

module.exports = calculate_median;
