function addTogether(...num) {
    if (num.length === 2) {
        if (typeof num[0] !== "number" || typeof num[1] !== "number") {
            return undefined;
        } else {
            return num[0] + num[1];

        }
    }

    if (num.length === 1) {
        if (typeof num[0] === "number") {
            return function(secondNum) {
                if (typeof secondNum === "number") {
                    return num[0] + secondNum;
                }
            }
        }
    }    
}


console.log(addTogether(2, 3));
console.log(addTogether("2", 3));
console.log(addTogether(5, undefined));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(5))
console.log(addTogether(5)(7));
console.log(addTogether(2)([3]));