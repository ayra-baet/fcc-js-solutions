let inventory = [];

function findProductIndex(productName) {
    return inventory.findIndex(product => product.name.toLowerCase() === productName.toLowerCase());
}

console.log(findProductIndex("FloUr"));
inventory.push({name: "FLOUR", quantity: 5});
console.log(findProductIndex("flour"));