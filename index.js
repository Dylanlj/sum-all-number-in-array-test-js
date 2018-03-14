function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (let index of array){

    if(Array.isArray(index)){
      index = sumItems(index)
    }
    sum += index
  }
  return sum
}

module.exports = sumItems;

