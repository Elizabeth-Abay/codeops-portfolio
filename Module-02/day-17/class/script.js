// const GreetFunc = function Hello(...names){
//     for (let name of names){
//         // in will take the index
//         console.log(`Hello ${name}`)
//     }
// }


// GreetFunc("elsi",'elas' , 'dfshfkjh')


// const name = "elsi";

// function greet(name){
//     console.log("Hello " + name)
// }

// greet("Eka") // prints Hello Eka


// // function returning another function
// const outer = (fame) => {
//     let inter = 'Elsa'

//     return () => {
//         console.log(`${inter} ${fame}`)
//     }
// }


// // this wldnt cause logging - just associates the inner function to the variable inner
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