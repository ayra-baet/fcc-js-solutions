function addTogether(...num) {

    if (typeof num[0] !== "number") return undefined;

    if (num.length === 1) {
        return function(secondNum) {
            return typeof secondNum === "number" ? num[0] + secondNum : undefined;
        }
    }

    if (typeof num[1] !== "number") return undefined;

    return num[0] + num[1];   
}

console.log(addTogether(2, 3));
console.log(addTogether("2", 3));
console.log(addTogether(5, undefined));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(5))
console.log(addTogether(5)(7));
console.log(addTogether(2)([3]));