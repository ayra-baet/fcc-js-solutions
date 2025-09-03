function confirmEnding(str, targetStr) {
    return str.slice(-targetStr.length) === targetStr;
}


console.log(confirmEnding("Open sesame", "same"));