const inventory = [];

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

function removeProduct(productName, quantityToSubtract) {
    const nameLowerCase = productName.toLowerCase();
    const index = findProductIndex(productName);

        if (index === -1) {
            console.log(`${nameLowerCase} not found`);
            return;
        }

        if (inventory[index].quantity < quantityToSubtract) {
            console.log(`Not enough ${nameLowerCase} available, remaining pieces: ${inventory[index].quantity}`);
            return;
        } else {
            inventory[index].quantity -= quantityToSubtract;
            console.log(`Remaining ${nameLowerCase} pieces: ${inventory[index].quantity}`);

            if (inventory[index].quantity === 0) {
                inventory.splice(index, 1);
            }
        }
}

addProduct({name: "flour", quantity: 5});
addProduct({name: "rice", quantity: 5});
addProduct({name: "flour", quantity: 3});
console.log(inventory);

console.log(findProductIndex("FLOUR"));
console.log(findProductIndex("meat"));

removeProduct("FLOur", 8);
removeProduct("rice", 10);
removeProduct("bread", 4);