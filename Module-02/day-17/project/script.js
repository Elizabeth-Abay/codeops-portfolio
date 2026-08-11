// tracks customer points 
// it lets u earn and redeem points
// the balance must not be directly reachable from outside

// closure - to keep the points balance private
// 3 ops - earn(amt) , redeem(amt) , balance() - getter
// + 1 pt per 10 birr
// redeem - subtract and never go below 0

// higher order function - earn rule
// holiday rule - double points - earn rule


// it accepts a function - higher order function
const createLoyalty = function (earnRule = etb => Math.floor(etb / 10) ){
    let pts = 0;
    return {
        // object of functions
        earn(etb) { return pts += earnRule(etb)},
        // it means earn : (etb) => return pts += earnRule
        redeem : (pt) => {
            if (pts === 0) return
            else pts -= pt
            return pts
        },
        get() {return pts}

    }
}


let holidayRule = etb => 2 *  Math.floor(etb / 10) // since the holiday times will double it

const loyaltyObj = createLoyalty(holidayRule)
console.log(loyaltyObj.earn(100))
console.log(loyaltyObj.redeem(5))