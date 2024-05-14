function findRotatedIndex(arr, val) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === val) {
        return mid;
      }
  
      if (arr[start] <= arr[mid]) {
        if (val >= arr[start] && val <= arr[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else {
        if (val >= arr[mid] && val <= arr[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
  
    return -1;
  }

module.exports = findRotatedIndex