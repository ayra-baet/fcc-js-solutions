function fearNotLetter(str) {

    for (let i = 1; i < str.length; i++) {
        const beforeChar = str.charCodeAt(i - 1);
        const currentChar = str.charCodeAt(i);

        if (currentChar - beforeChar > 1) {
            return String.fromCharCode(beforeChar + 1);
        }

    }
    return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));