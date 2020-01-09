function collect_same_elements(collection_a, object_b) {
  let arr_a = collection_a.map((item) => item.key);
  let arr_b = object_b.value;
  let totalArr = arr_b.concat(arr_a);
  return totalArr.filter((value, index, array) =>
    array.indexOf(value) !== index, arr_b.length); //TODO: collection.includes?
}

module.exports = collect_same_elements;
