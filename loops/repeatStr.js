function repeatStringNumTimes(str, num) {
    let repeatedStr = "";

    if (num <= 0) {
        return "";
    } else {
        for (let i = 0; i < num; i++) {
            repeatedStr += str;
        }
    }

    return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));