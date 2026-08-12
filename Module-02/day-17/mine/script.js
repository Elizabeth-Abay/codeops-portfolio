// const GreetFunc = function Hello(...names){
//     for (let name of names){
        // in will take the index
//         console.log(`Hello ${name}`)
//     }
// }


// GreetFunc("elsi",'elas' , 'dfshfkjh')


// const name = "elsi";

// function greet(name){
//     console.log("Hello " + name)
// }

// greet("Eka") // prints Hello Eka


// function returning another function
// const outer = (fame) => {
//     let inter = 'Elsa'

//     return () => {
//         console.log(`${inter} ${fame}`)
//     }
// }


// this wldnt cause logging - just associates the inner function to the variable inner
// let inner = outer('ahdakjh');
// inner()



// function Greeting(){

// }
// Greeting()

const Greeting2 = () => {
    let lastName = 'Abay'
    return (fname) => {
        console.log(`${fname} ${lastName}`)
    }
}



let returned = Greeting2();
// returned = () => {
//         console.log(`${lastName}`)
//     }



//     returned()
returned('Elais');
returned('Elizabeth');



// const Greeting2 = () => {
// this is not higher order bc it returns a string
//     let lastName = 'Abay'
//     let inner = (fname) => {
//         console.log(`${fname} ${lastName}`)
//     }


//     return `Hello ${inner('Me')}`
// }





// higher order function that accepts callback

let cb = (msg) => console.log(msg)


let higherOrderFunction = (endNumber , cb) => {
    // cb = callBack
    let i = 0
    while (i <= endNumber){
        if (i % 2 === 0){
            // even
            cb('even')
        } else{
            // odd
            cb('odd')
        }
        
        i++
    }
}


higherOrderFunction(20 , cb)