function uniteUnique(...arr) {
    const flatArr = arr.reduce((accumulatedArr, currArr) => accumulatedArr.concat(currArr));
    let uniqueValues = [];

    for (const value of flatArr) {
        if (!uniqueValues.includes(value)) {
            uniqueValues.push(value);
        }
    }

    return uniqueValues;
}

console.log(uniteUnique([1, 2, 4], [2, 3, 5]));
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));