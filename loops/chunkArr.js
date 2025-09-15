function chunkArrayInGroups(arr, num) {
    let chunkedArr = [];

    for (let i = 0; i < arr.length; i += num) {
        const chunk = arr.slice(i, num + i);
        chunkedArr.push(chunk);
    }

    return chunkedArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));