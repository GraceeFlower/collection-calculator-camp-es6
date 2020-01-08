'use strict';

function choose_no_repeat_number(collection) {
 return collection.filter(function (value, index, array) {
    return array.indexOf(value) === index;
  });
}

module.exports = choose_no_repeat_number;
