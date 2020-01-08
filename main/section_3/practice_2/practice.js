function create_updated_collection(collection_a, object_b) {
  object_b.value.map((item) => {
    var index = checkItem(collection_a, item);
    var count = collection_a[index].count;
    collection_a[index].count -= Math.floor(count / 3);
  });
  return collection_a;
}

function checkItem(arr, element) {
  for(var item = 0; item < arr.length; item++) {
    if (arr[item].key === element) {
      return item;
    }
  }
}

module.exports = create_updated_collection;
