'use strict';
function one_add_next_multiply_three(collection){
  var res = [];
  for(var item = 0; item < collection.length; item++) {
    if(item + 1 !== collection.length) {
      var multi = (collection[item] + collection[item + 1]) * 3;
      res.push(multi);
    }
  }
  return res;
}

module.exports = one_add_next_multiply_three;
