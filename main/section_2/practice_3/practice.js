function count_same_elements(collection) {
  var results = [];
  collection.forEach(function (value) {
    var num = value.match(/\d/g) ? parseInt(value.match(/\d/g).join("")) : 1;
    var key = value.match(/\d/) ? value.slice(0, 1) : value;
    var item = checkItem(results, key);
    if (item !== "") {
      results[item].summary += num;
    } else {
      var result = {};
      result.name = key;
      result.summary = num;
      results.push(result);
    }
  });
  return results;
}

function checkItem(arr, element) {
  for(var item = 0; item < arr.length; item++) {
    if(arr[item].name === element) {
      return item;
    }
  }
  return ""; 
}

module.exports = count_same_elements;
