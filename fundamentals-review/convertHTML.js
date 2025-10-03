function convertHTML(str) {
    const specialChars = {
        "&" : "&amp;",
        "<" : "&lt;",
        ">" : "&gt;",
        '"' : "&quot;",
        "'" : "&apos;"
    };
    let convertedStr = "";

    for (const char of str) {
        if(specialChars[char]) {
            convertedStr += specialChars[char]
        } else {
            convertedStr += char;
        }
    }
    return convertedStr;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));