// pure function
// one closure based receipt maker - 
// prices order with VAT , member discount and running order number

let orderNumber = 0
// when it starts the order is 0

const VAT_RATE = 0.15

let subTotal = (...prices) =>{
    // subTotal will accept set of prices and then 
    // to calculate the first set of prices
    console.log("prices")
    console.log(prices)
    total = prices.reduce((total , price) => {
        return total += price
        // sthg to note is if u use reduce with {} use return
    } , 0)

    console.log(total)
    return total

}


// will have to be a factory
// meaning it returns a function
let discountBy = (rate) => {
    return (price) => {
        return price - (price * rate)
    }
    // returns an arrow

}

let withVat = (price) => {
    return  price + (price * VAT_RATE)
}

let toETB = (price) => {
    return `${price} ETB`
}


let makeReceiptMaker = ( subtotal ,isMember , discountBy ,withVat ,toEtb , ...prices) => {
    orderNumber += 1
    // this is the final one
    finalPrice = subtotal(...prices)
    console.log(finalPrice)
    if (isMember === true){
        discountRate = 0.15 // means by 15 percent
        discounter = discountBy( discountRate)
        finalPrice = discounter(finalPrice)
    }

    finalPrice = withVat(finalPrice)

    finalPrice = toETB(finalPrice)

    console.log(`#${orderNumber}: amount ${finalPrice}`)


}


makeReceiptMaker(subTotal, true , discountBy , withVat , toETB , 3000 , 3499 )
