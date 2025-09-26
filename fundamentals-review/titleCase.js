function titleCase(str) {
    const words = str.split(" ");
    let titleCaseResult = "";

    words.forEach((word, index, words) => {
        const firstChar = word.charAt(0).toUpperCase();
        const restChars = word.slice(1).toLowerCase();
        titleCaseResult += firstChar + restChars;

        if (index < words.length - 1) {
            titleCaseResult += " ";
        }
    });
    return titleCaseResult;
}

console.log(titleCase("I like to code"));
console.log(titleCase("javaScript is fun"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));