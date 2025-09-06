function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

console.log(findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; }));
console.log(findElement(["cat", "dog", "bird"], function(str) { return str.length > 10; }));