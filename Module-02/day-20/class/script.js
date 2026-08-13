console.log('first');
setTimeout(
    () => console.log('First') ,
    3000
) // micro task

// two ways async implement -- callback based and promise based


let someFileArrived = false
// promise 
let promise = new Promise(
    (resolve , reject) => {
        if (someFileArrived) resolve('Resolved')
        else reject('Rejected')
        
    }
) // macro task

console.log(promise.then(DATA => console.log(DATA)).catch(err => console.log(err)))
console.log('second');

// default is synch
// if u do sthg 


// call stack - stack - 
// event loop - 
// web api -- fetch , location .. - start their task when the callstack is empty
// task queue - micro - promise based and lower time new take and macro task - call back based higher time view
//  higher order func - 




// event loop - 
// js engine

// api - macro
// promise - micro
// call stack bado - micro first then macro




// promise - resolve , reject mnamn
// promise takes call back function
// new Promise((resolve , reject) => { // default - pending , resolved : data , rejected : data})

// promise { <fulfilled> : 'Data '}
// did uk that u can have 2 then in a single promise
// huletegnaw then wld use the first's response





