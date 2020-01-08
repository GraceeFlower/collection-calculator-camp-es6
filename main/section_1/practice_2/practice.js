function collect_same_elements(collection_a, collection_b) {
  var totalArr = collection_b.concat(collection_a);
  totalArr = double_to_one(totalArr);
  return totalArr.filter((value, index, array) =>
    array.indexOf(value) !== index, collection_b.length);
}

function double_to_one(collection) {
  return collection.reduce((pre, cur) => pre.concat(cur), []);
}

module.exports = collect_same_elements;
