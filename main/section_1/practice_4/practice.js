function collect_same_elements(collection_a, object_b) {
  var arr_a = collection_a.map((item) => item.key);
  var arr_b = object_b.value;
  var totalArr = arr_b.concat(arr_a);
  var res = totalArr.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
  }, arr_b.length);
  return res;
}

module.exports = collect_same_elements;
