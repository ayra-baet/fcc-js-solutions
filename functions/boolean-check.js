// Boolean check function

function booWho(value) {
    if (typeof value === "boolean") {
        return true;
    } else {
        return false;
    }
}

console.log(booWho(false));
console.log(booWho([1, 2, 3]));
