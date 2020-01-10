'use strict';

function calculate_elements_sum(collection, element) {
  return (collection.length - 1) - collection.reverse().findIndex(
    item => item === element);
}
  
module.exports = calculate_elements_sum;
