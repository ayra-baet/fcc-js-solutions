function frankenSplice(arr1, arr2, index) {
    copyArr = arr2.slice();
    copyArr.splice(index, 0, ...arr1);
    
    return copyArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));