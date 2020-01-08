function count_same_elements(collection) {
  let results = [];
  collection.forEach(function (value) {
    let num = value.match(/\d/g) ? parseInt(value.match(/\d/g).join("")) : 1;
    let key = value.match(/\d/) ? value.slice(0, 1) : value;
    let item = checkItem(results, key);
    if (item !== "") {
      results[item].summary += num;
    } else {
      let result = {};
      result.name = key;
      result.summary = num;
      results.push(result);
    }
  });
  return results;
}

function checkItem(arr, element) {
  for(let item = 0; item < arr.length; item++) {
    if(arr[item].name === element) {
      return item;
    }
  }
  return ""; 
}

module.exports = count_same_elements;
