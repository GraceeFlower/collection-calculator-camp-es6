function collect_same_elements(collection_a, object_b) {
  return collection_a.map((item) => item.key).filter(item => 
    object_b.value.includes(item));
}

module.exports = collect_same_elements;
