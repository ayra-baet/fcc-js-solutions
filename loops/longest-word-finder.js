function findLongestWordLength(str) {

    const words = str.split(" ");
    let longest = words[0].length;

    for (const word of words) {
        if (word.length > longest) {
            longest = word.length;
        }
    }
    return longest;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));