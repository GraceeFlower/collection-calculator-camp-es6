function create_updated_collection(collection_a, object_b) {
  object_b.value.map((item) => {
    var index = checkItem(collection_a, item);
    collection_a[index].count--;
  });
  return collection_a;
}

function checkItem(arr, element) {
  for(var item = 0; item < arr.length; item++) {
    if(arr[item].key === element) {
      return item;
    }
  }
}

module.exports = create_updated_collection;
