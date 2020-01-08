function create_updated_collection(collection_a, object_b) {
  collection_a = count_same_elements(collection_a);
  object_b.value.map((item) => {
    let index = checkItem(collection_a, item);
    let count = collection_a[index].count;
    collection_a[index].count -= Math.floor(count / 3);
  });
  return collection_a;
}

function count_same_elements(collection) {
  let results = [];
  collection.forEach((value) => {
    let item = checkItem(results, value);
    if (item !== "") {
      results[item].count++;
    } else {
      let result = {};
      result.key = value;
      result.count = 1;
      results.push(result);
    }
  });
  return results;
}

function checkItem(arr, element) {
  for(let item = 0; item < arr.length; item++) {
    if (arr[item].key === element) {
      return item;
    }
  }
  return ""; 
}

module.exports = create_updated_collection;