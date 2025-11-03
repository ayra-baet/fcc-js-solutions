function getIndexToIns(arr, num) {
    return arr.sort((a , b) => a - b);
}

console.log(getIndexToIns([5, 3, 20, 3], 5));