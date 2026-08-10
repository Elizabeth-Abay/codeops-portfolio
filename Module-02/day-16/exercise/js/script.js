// script - input -amt and party size , adds tip prints total and amt per person
const TELE_BIRR_SERVICE_FEE = 30
const CBE_SERVICE_FEE = 40


// let bill = prompt("")

function ReadAndAdd( bill , party_size , use){
    // bill and party size - bill - number
    // use - means telebirr or cbe
    bill = Number(bill)
    party_size = Number(party_size)
    if (!bill || !party_size){
        console.log("Bill  or party_size is not a number or 0")
    }

    tip = (bill > 300) ? 0.01 * bill : 0.005 * bill

    // total = bill + tip
    total = bill + tip

    per_person = total / party_size

    console.log(`total is ${total} and per person is ${per_person}`)

    switch(use.toLowerCase()){
        case "cbe":
            total += CBE_SERVICE_FEE
        case "telebirr":
            total += TELE_BIRR_SERVICE_FEE

    }


}


ReadAndAdd("2330" , 90 , "teleBIRR")