function steamrollArray(nestedArr) {
    // stores the result of the flattened array
    const flattenArr = [];

    // flatten function to handle the recursion
    // element parameter can represent anything such as a nested array, number, strings etc.
    function flatten(element) {
        if (Array.isArray(element)) {
            for (const item of element) {
                flatten(item) // recursively calls the flatten function to unwrap the arrays/s until it becomes a non-array/s
            }
        } else {
            flattenArr.push(element) // pushes the non-array elements to flattenArr
        }
    }

    // calls the flatten function on nestedArr
    flatten(nestedArr);
    // returns the flattened array result
    return flattenArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, {"foo": "bar"}, [2]]));
console.log(steamrollArray(["baz", [1, 2], {}]));