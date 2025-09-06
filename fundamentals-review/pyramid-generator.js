// Pyramid Generator with inverted and upright modes

function pyramidGenerator(char, rows, isInverted) {
    let pyramid = [];

    if (isInverted) {
        for (let i = rows; i >= 1; i--) {
            pyramid.push(" ".repeat(rows - i) + char.repeat(2 * i - 1));
        }
    } else {
        for(let i = 1; i <= rows; i++) {
            pyramid.push(" ".repeat(rows - i) + char.repeat(2 * i - 1));
        }
    }
    
    return "\n" + pyramid.join("\n") + "\n";
}

console.log(pyramidGenerator("o", 4, true));
console.log(pyramidGenerator("o", 4, false));