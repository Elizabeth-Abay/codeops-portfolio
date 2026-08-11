// pricing module
// function - takes in an array of orders - returns per order total and grand total
// using array methods - map , filter , reduce , destructure and spread


let obj = { 
    'name' :"Elzi",
    'age' : 21,
    'city' : "Addis Ababa"
}

let arr = [
    ['naem' , 'esk' ,
        //  'sj' , 'sjhgshgkjshgk'
    ],
    ['afh' , 21],
    ['sfhs' , 'ahrj']
]

let x = Object.fromEntries(arr)
// moves into the given thing and 
// then tries to find a thing then it will 
// take 2 things from in there and first - key
//  second will be val , all other things will 
// be ignored
console.log(x)



let keys = Object.keys(obj) // will return array of keys
console.log(...keys);
// spread means it will take the values and remove the array
