function count_same_elements(collection) {
  let results = [];
  collection.forEach(function (value) {
    let num = value.match(/\d/) ? parseInt(value.slice(-1)) : 1;
    let key = value.match(/\d/) ? value.slice(0, 1) : value;
    let item = checkItem(results, value);
    if (item !== "") {
      results[item].count += num;
    } else {
      let result = {};
      result.key = key;
      result.count = num;
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
