// pure function
// one closure based receipt maker - 
// prices order with VAT , member discount and running order number

let orderNumber = 0
// when it starts the order is 0

const VAT_RATE = 0.15

let subTotal = (...prices) =>{
    // subTotal will accept set of prices and then 
    // to calculate the first set of prices
    // console.log("prices")
    // console.log(prices)
    total = prices.reduce((total , price) => {
        return total += price
        // sthg to note is if u use reduce with {} use return
    } , 0)

    // console.log(total)
    return total

}


// will have to be a factory
// meaning it returns a function
// once u define the rate u can call the function with the price locally
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
    return `${price.toFixed(2)} ETB`
}


let makeReceiptMaker = ( subtotal , discountBy ,withVat ,toEtb,isMember = true) => {
    // have default variables at the back
    // returns a function accepts prices
    // ok so as a rule do variable things to be an argument of the returned function
    return (...prices) => {
        orderNumber += 1
        // this is the final one
        finalPrice = subtotal(...prices)
        // console.log(`final price after total is ${finalPrice}`)


        // console.log(finalPrice)
        if (isMember === true){
            discountRate = 0.10 // means by 10 percent
            discounter = discountBy( discountRate)
            finalPrice = discounter(finalPrice)
            // console.log(`final price after discount is ${finalPrice}`)
        }

        finalPrice = withVat(finalPrice)
        // console.log(`final price after vat is ${finalPrice}`)


        finalPrice = toETB(finalPrice)

        return (`#${orderNumber}: amount ${finalPrice}`)

    }

}


// makeReceiptMaker(subTotal, true , discountBy , withVat , toETB , 3000 , 3499 )


const receipt = makeReceiptMaker(subTotal, discountBy , withVat , toETB );

// Almaz orders Doro Wat (220), Tibs (180), and Shiro (120)
console.log(receipt(220, 180, 120));

// Dawit orders Firfir (140) and Buna (60)
console.log(receipt(140, 60));
