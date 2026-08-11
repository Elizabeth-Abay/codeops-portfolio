// Standard function with a default parameter
function vat(amount, rate = 0.15) {
    return amount * rate;
}

// Arrow function with an implicit return
const vatArrow = (amount, rate = 0.15) => amount * rate;


console.log(vat(100));
console.log(vatArrow(100));
console.log(vatArrow(100, 0.2));


function makeCounter() {
    let count = 0; // Private variable created in lexical scope

    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter());



function discountBy(rate) {
    return function (price) {
        return price * (1 - rate);
    };
}

// Create specialized price calculators
const memberPrice = discountBy(0.10); // 10% discount
const salePrice = discountBy(0.30);   // 30% discount

const price = 1000; // 1000 ETB

console.log(`Member Price: ${memberPrice(price)} ETB`); // Output: 900 ETB
console.log(`Sale Price: ${salePrice(price)} ETB`);     // Output: 700 ETB



function applyToAll(list, fn) {
    const result = [];
    for (let i = 0; i < list.length; i++) {
        result.push(fn(list[i]));
    }
    return result;
}

// Helper function to add 15% VAT to a base price
const addVAT = (price) => price * 1.15;

const prices = [100, 200, 500];
const pricesWithVAT = applyToAll(prices, addVAT);

console.log(pricesWithVAT); 



const cities = ["Addis Ababa", "Hawassa", "Gonder", "Dire Dawa"];

cities.forEach((city, index) => {
    console.log(`${index + 1}. ${city}`);
});
