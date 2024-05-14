function sortedFrequency(arr, val) {
  function binarySearch(arr, val, searchFirst) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === val) {
        result = mid;
        if (searchFirst) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else if (val < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return result;
  }
  let first = binarySearch(arr, val, true);
  if (first === -1) return first;
  let last = binarySearch(arr, val, false);
  return last - first + 1;
}

module.exports = sortedFrequency;
