function collect_same_elements(collection_a, collection_b) {
  var totalArr = collection_b.concat(collection_a);
  totalArr = double_to_one(totalArr);
  var res = totalArr.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
  }, collection_b.length);
  return res;
}

function double_to_one(collection) {
  return collection.reduce((pre, cur) => pre.concat(cur), []);
}

module.exports = collect_same_elements;
