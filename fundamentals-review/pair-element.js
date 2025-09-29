function pairElement(str) {
    const basePairs = {
        A : "T",
        T : "A",
        C : "G",
        G : "C"
    }
    let matchedResult = [];

    for (const char of str) {
        matchedResult.push([char, basePairs[char]]);
    }
    return matchedResult;
}

console.log(pairElement("ATCGA"));