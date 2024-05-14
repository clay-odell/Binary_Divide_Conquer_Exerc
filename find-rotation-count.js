function findRotationCount(arr){
    let low = 0;
    let high = arr.length -1;
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] > arr[mid + 1]){
            return mid +1;
        }
        if (arr[mid] < arr[mid - 1]){
            return mid;
        }
        if (arr[low] < arr[mid]){
            low = mid +1;
        } else {
            high = mid -1
        }
    }
    return 0;
}

module.exports = findRotationCount;
