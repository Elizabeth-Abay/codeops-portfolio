// console.log(window)
// window is an obj , it has got local storaage


// document = {
//     html : {
//         Children : [ HTMLCollection ],
//         body : sthg
//     }
// }



// html collection
const logoDiv = document.getElementsByClassName("logo")
// console.log(logoDiv)

// this will give us html collection - 2 elements
// then going into each elt 2 things 
// children - will have tags only
// childNodes - will even select text
// firstChild , lastChild - childNodes[0] and childNodes[last]
// firstElementChild , lastElementChild = children[0] and children[last]


// selectionbyName - < tag name = "xyz">  xyz
// selectionbyTagName - < tag name = "xyz"> tag 



const idSelector = document.getElementById("nav");
console.log(idSelector)
// idSelector.classList.add('hi')
// idSelector.classList.toggle('hi')
// console.log(idSelector.classList)
// only a single element
// elt.classList.add() , elt.classList.remove()
// elt.classList.toggle() - means kale atfaw kelele add




// const heroDivs = document.querySelector(".Hero")
// console.log(heroDivs)




// const heroDivsNodes = document.querySelectorAll(".Hero")
// console.log(heroDivsNodes) // will get all the elts in a nodelist

// innerText - dont give diplay : none and visiblity - hidden
//  vs TextContect - gives us all the  hidden things and none display 


// if u create sthg only until u append it it will not be seen in the dom


// live update means without selecting again then u can have real live thing
// node list is static - means in order to check sthg u will have to re call it again

// any action is event --- handler
// page if it never responds = document new
// events are things that the user uses to communicate with ur document



