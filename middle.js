const middle = function(array) {
  let middleItemArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleItemArray.push(array[(array.length / 2) - 1], array[array.length / 2]);
    } else {
      middleItemArray.push(array[Math.floor(array.length / 2)]);
    }
  }
  return middleItemArray;
};

module.exports = middle;

