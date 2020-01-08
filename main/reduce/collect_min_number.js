'use strict';

function collect_min_number(collection) {
  return collection.reduce((pre, cur) => pre > cur ? cur : pre);
}

module.exports = collect_min_number;
