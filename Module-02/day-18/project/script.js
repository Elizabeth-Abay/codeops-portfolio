// small report generator
// list of telebirr transaction 
// each tx is an object
// output - summarize and format them

// tx object = { id , customer , amount - in ETB, type = credit or debit}

// filter - to separate credit , debit 
// reduce to get total

// use map + destructuring in the callback to build a formatted receipt
// spread operator to find updated copy of one tx without mutating the original

const transactions = [
{ id: 1, customer: "Almaz", amount: 250, type: "debit" },
{ id: 2, customer: "Dawit", amount: 600, type: "credit" },
{ id: 3, customer: "Tigist", amount: 180, type: "debit" },
];



let filterCredit = (transactions , type = "credit" ) => {
    return transactions.filter(
        item => item.type.toLowerCase().trim() === type
    )
}


let total = (transactions) => {
    return transactions.reduce(
        (total , item) => { total += item.amount}
    )
}

let formattedReceipt = (transactions) => {
    return transactions.map(
        ({customer , amount }) => `${customer} : ${amount}`
    )
} 


let updatedCopy = (transactions) => {
    let updated = [...transactions]

    updated[0].amount += 2000

    return updated;
}




