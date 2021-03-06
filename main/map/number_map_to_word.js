'use strict';
var number_map_to_word = function(collection){
  return collection.map((item) => generateString(item));
};

function generateString(item) {
  return String.fromCharCode(96 + item);
}

module.exports = number_map_to_word;
