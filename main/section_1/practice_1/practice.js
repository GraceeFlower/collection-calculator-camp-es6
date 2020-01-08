function collect_same_elements(collection_a, collection_b) {
  var totalArr = collection_b.concat(collection_a);
  return totalArr.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
  }, collection_b.length);
}

module.exports = collect_same_elements;
