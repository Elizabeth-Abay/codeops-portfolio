const VAT_RATE = 0.15

let withVat = (price) => {
    return price + (price * VAT_RATE)
}

let toETB = (price) => {
    return `${price.toFixed(2)} ETB`
}


// produces - per order total and grand total
// { price , qty }
// array of orders = [ { price : 300 , qty : 4}  , { price : 400 , qty : 8}] - input
// map - attach total to each order
//  [ { price , qty , total}]
// spread - to attach things
// filter the list > 500


let pricing = function (totalOrders) {
    // totalOrders =  [ { price : 300 , qty : 4}  , { price : 400 , qty : 8}]
    totalOrders.map(item => {
        item.total = item.price * item.qty
    })

    console.log(totalOrders)

    // using reduce to calculate the total orders
    let grandTotal = totalOrders.reduce(
        (grandTotal, { total }) => grandTotal += total, 0
    )

    final = withVat(grandTotal)
    formatted = toETB(final)

    console.log(formatted)


    let expensive = totalOrders.filter(
        ({ total }) => total > 500
    )

    console.log(totalOrders)
    console.log(expensive)
}


pricing([{ price: 300, qty: 4 }, { price: 400, qty: 8 } ,  { price: 400, qty: 1 }])


