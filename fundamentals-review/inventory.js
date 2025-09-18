let inventory = [];

function findProductIndex(productName) {
    return inventory.findIndex(product => product.name.toLowerCase() === productName.toLowerCase());
}

function addProduct(product) {
    const nameLowerCase = product.name.toLowerCase();
    const index = findProductIndex(nameLowerCase);

    if (index !== -1) {
        inventory[index].quantity += product.quantity;
        console.log(`${nameLowerCase} quantity updated`);
    } else {
        inventory.push({name: nameLowerCase, quantity: product.quantity});
        console.log(`${nameLowerCase} added to inventory`);
    }
}

console.log(findProductIndex("FloUr"));
inventory.push({name: "FLOUR", quantity: 5});
console.log(findProductIndex("flour"));

addProduct({name: "FLOUR", quantity: 5});
console.log(inventory[0].quantity);

addProduct({name: "rice", quantity: 5});
console.log(inventory);