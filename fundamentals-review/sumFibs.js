function sumFibs(num) {
    let prevNum = 0;
    let currNum = 1;
    let oddSum = 0;

    while (currNum <= num) {
        if (currNum % 2 !== 0) {
            oddSum += currNum;
        }

        [prevNum, currNum] = [currNum, prevNum + currNum];
    }
    
    return oddSum;
}

console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));