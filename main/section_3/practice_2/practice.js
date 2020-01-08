function create_updated_collection(collection_a, object_b) {
  object_b.value.map((item) => {
    let index = checkItem(collection_a, item);
    let count = collection_a[index].count;
    collection_a[index].count -= Math.floor(count / 3);
  });
  return collection_a;
}

function checkItem(arr, element) {
  for(let item = 0; item < arr.length; item++) {
    if (arr[item].key === element) {
      return item;
    }
  }
}

module.exports = create_updated_collection;
