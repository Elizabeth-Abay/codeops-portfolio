// read the menu.json and then have it in array
// have a state object

let state = {
    dishes : [],
    searchTerm : '',
    cart : [] // { id : { amount , totalPrice }}
}



let menuContainerDiv = document.getElementById("menu-container");


// loop through the menu items
// set the id to the div and then write the text accordingly
// add to cart - id  - btn add slew - then i will update the localstorage id - amount of things - * 2
// search - means filter the data from this array and render that
// render wld only change the menu-box part
// it will take an array of items


let renderMenu = async (arrayOfMenuItems) =>{
    // when we have a thing to be filtered we will filter by the search term and render that

    for (item of arrayOfMenuItems){
        let itemDiv = document.createElement('div');
        let name = document.createElement('h3');
        let type = document.createElement('strong')
        let category = document.createElement('strong');
        let price = document.createElement('strong');
        let addToCartBtn = document.createElement('button');

        name.textContent = item.

        itemDiv.classList.add('menu-display');
        addToCartBtn.classList.add('add-to-cart-btn');


        menuContainerDiv.appendChild()
    }

    
}


let renderOrder = (arrayOfOrderedItems) =>{
    // e will have the target id
    // then update the state object and then redraw the div that have got that id bcha 
    // locate the div with that id and update its inner content

    // add to cart --> id 
    // try to find the item in the cart - update it or put it in there
    // rerenderOrder -- loop through the state object and use that

}