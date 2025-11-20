function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    
    return `${min}, ${max}`;
}

console.log(smallestCommons([5, 1]));