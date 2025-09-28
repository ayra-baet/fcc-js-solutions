function sumAll(arr) {
    const lowNum = Math.min(...arr);
    const highNum = Math.max(...arr);
    let sum = 0;

    for (let i = lowNum; i <= highNum; i++) {
        sum += i
    }
    return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));