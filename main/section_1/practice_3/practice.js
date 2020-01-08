function collect_same_elements(collection_a, object_b) {
  var collection_b = object_b.value;
  var totalArr = collection_b.concat(collection_a);
  var res = totalArr.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
  }, collection_b.length);
  return res;
}

module.exports = collect_same_elements;
