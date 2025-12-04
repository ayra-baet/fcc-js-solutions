/* SOLUTION 1
function steamrollArray(nestedArr) {
    // stores the result of the flattened array
    const flattenArr = [];

    // flatten function to handle the recursion
    // element parameter can represent anything such as a nested array, number, strings etc.
    function flatten(element) {
        if (Array.isArray(element)) {
            for (const item of element) {
                flatten(item) // Recursively unwraps nested arrays until reaching a non-array element.
            }
        } else {
            flattenArr.push(element) // pushes the non-array elements to flattenArr
        }
    }

    // calls the flatten function on nestedArr
    flatten(nestedArr);
    // returns the flattened array result
    return flattenArr;
} */

// Flatten a deeply nested array using a higher order function like reduce
// 1. reduce iterates through each element of nestedArr
// 2. if element is an array → recursively flatten it
// 3. if element is not an array → add it directly
// 4. concat merges results into the accumulator
function steamrollArray(nestedArr) {
    return nestedArr.reduce((acc, value) => {
        return acc.concat(Array.isArray(value) ? steamrollArray(value) : value);
    }, []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));