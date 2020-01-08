'use strict';

function collect_max_number(collection) {
  return collection.reduce((pre, cur) => pre > cur ? pre : cur);
}

module.exports = collect_max_number;
