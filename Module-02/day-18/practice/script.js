const VAT_RATE = 0.15

let vatAdder = function (items) {
    items.map(
        price =>  price + price * VAT_RATE
    )
}

let customerObject = {
    name : 'Elizabeth',
    city : 'Addis Ababa',
    balance : 300
}


for (let item of Object.entries(customerObject)){
    console.log(item)
} 

let greet = ({name}) => console.log(`Hello ${name}`)

greet(customerObject)


let updater = (customerObj) => {
    let updated = {...customerObj}
    updated.city = 'Hawassa'
    updated.phoneNumber = '09-xx-xx-xx-xx'
    return updated
}

console.log(updater(customerObject))
