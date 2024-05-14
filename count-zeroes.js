function countZeroes() {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let midPoint = Math.floor((start + end) / 2);
    if (arr[midPoint] === 1) {
       start = midPoint + 1;
    } else {
       end = midPoint - 1;
    }
  }
  return arr.length - start; 
}

module.exports = countZeroes;
