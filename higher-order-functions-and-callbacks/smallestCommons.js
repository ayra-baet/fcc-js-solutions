// Range-based least common multiple(LCM) = refers to the smallest positive integer that is a multiple of every integer in a specified range

function smallestCommons(arr) {
    // Sorts the order of the array elements in numerical order and store them in respective variables
    const [min, max] = arr.sort((a, b) => a - b);
    // Creates a range array starting from the min up to max
    const range = Array.from({length: max - min + 1}, (_, index) => min + index);

    // Arrow function that is using the Euclidean algorithm to recursively find the Greatest Common Divisor (GCD)
    const GCD = (a, b) => b === 0 ? a : GCD(b, a % b);
    // Arrow function that applies the formula for finding the least common multiple(LCM) using GCD
    const LCM = (a, b) => (a * b) / GCD(a, b);

    // Calculates the range-based LCM by finding the LCM of all numbers within the range array
    return range.reduce((acc, value) => LCM(acc, value));
}

console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([23, 18]));