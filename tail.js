const tail = function(array) {
  let ans = [];
  if (array.length > 1) {
    ans = array.slice(1);
  } 
  return ans;
};

module.exports = tail;
