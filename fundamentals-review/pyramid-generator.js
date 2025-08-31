// Pyramid Generator with inverted and upright modes

function pyramidGenerator(char, rows, isInverted) {
    let pyramid = "";

    if (isInverted) {
        for (let i = rows; i >= 1; i--) {
            pyramid += " ".repeat(rows - i) + char.repeat(2 * i - 1) + "\n";
        }
    } else {
        for(let i = 1; i <= rows; i++) {
            pyramid += " ".repeat(rows - i) + char.repeat(2 * i - 1) + "\n";
        }
    }
    
    return pyramid;
}

console.log(pyramidGenerator("o", 4, true));
console.log(pyramidGenerator("o", 4, false));