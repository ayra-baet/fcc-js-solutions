function addTogether(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return undefined;
    }

    return num1 + num2;
}

console.log(addTogether(2, 3));
console.log(addTogether("2", 3));
console.log(addTogether(5, undefined));