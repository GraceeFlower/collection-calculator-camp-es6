function collect_same_elements(collection_a, object_b) {
  let collection_b = object_b.value;
  let totalArr = collection_b.concat(collection_a);
  return totalArr.filter((value, index, array) =>
    array.indexOf(value) !== index, collection_b.length); //TODO: collection.includes?
}

module.exports = collect_same_elements;
