function bouncer(arr) {
    let truthyArr = [];

    for (const value of arr) {
        if(value) {
            truthyArr.push(value);
        }
    }

    return truthyArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));