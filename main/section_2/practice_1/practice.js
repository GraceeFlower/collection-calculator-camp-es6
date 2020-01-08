function count_same_elements(collection) {
  let results = [];
  collection.forEach(value => {
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
    if(arr[item].key === element) {
      return item;
    }
  }
  return ""; 
}

module.exports = count_same_elements;
