// Find the Largest Number in Each Sub-Array

function largestOfAll(arr) {
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        let largestNum = arr[i][0];

        for (let j = 0; j < arr[i].length; j++) {
            
            if (arr[i][j] > largestNum) {
                largestNum = arr[i][j];
            }
        }
        resultArr.push(largestNum);
    }
    return resultArr;
}

console.log(largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));