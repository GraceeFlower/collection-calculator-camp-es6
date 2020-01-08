'use strict';
let calculate_median = function(collection){
  let res = collection.filter((value, index) => index % 2 !== 0);
  let numLen = res.length;
  if (numLen % 2) {
    return res[(numLen - 1) / 2];
  } else {
    return (res[numLen / 2 - 1] + res[numLen / 2]) / 2;
  }
};

module.exports = calculate_median;
