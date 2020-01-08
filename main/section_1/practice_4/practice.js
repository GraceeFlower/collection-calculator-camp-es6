function collect_same_elements(collection_a, object_b) {
  let arr_a = collection_a.map((item) => item.key);
  let arr_b = object_b.value;
  let totalArr = arr_b.concat(arr_a);
  let res = totalArr.filter(function (value, index, array) {
    return array.indexOf(value) !== index;
  }, arr_b.length);
  return res;
}

module.exports = collect_same_elements;
