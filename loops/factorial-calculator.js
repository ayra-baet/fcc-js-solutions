const num = 7;

function factorialCalculator(num) {

    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);