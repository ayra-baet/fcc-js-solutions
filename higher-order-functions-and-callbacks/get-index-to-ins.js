function getIndexToIns(arr, num) {
    arr.sort((a , b) => a - b);

    const isLargerOrEqualToNum = element => element >= num;
    const index = arr.findIndex(isLargerOrEqualToNum);

    return index === -1 ? arr.length : index;
}

console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([3, 10, 5], 11));
console.log( getIndexToIns([], 5));