// read the menu.json and then have it in array
// have a state object

let state = {
    dishes: [
        { "id": 1, "name": "Doro Wat", "category": "Main", "price": 240, "spicy": true },
        { "id": 2, "name": "Shiro", "category": "Vegetarian", "price": 120, "spicy": false },
        { "id": 3, "name": "Kitfo", "category": "Main", "price": 320, "spicy": true },
        { "id": 4, "name": "Tibs", "category": "Main", "price": 280, "spicy": true },
        { "id": 5, "name": "Injera Firfir", "category": "Breakfast", "price": 100, "spicy": true },
        { "id": 6, "name": "Beyaynetu", "category": "Vegetarian", "price": 150, "spicy": false },
        { "id": 7, "name": "Misir Wat", "category": "Vegetarian", "price": 110, "spicy": true },
        { "id": 8, "name": "Gomen", "category": "Vegetarian", "price": 90, "spicy": false },
        { "id": 9, "name": "Atkilt Wot", "category": "Vegetarian", "price": 100, "spicy": false },
        { "id": 10, "name": "Derek Tibs", "category": "Main", "price": 310, "spicy": true },
        { "id": 11, "name": "Key Wat", "category": "Main", "price": 220, "spicy": true },
        { "id": 12, "name": "Alicha Wat", "category": "Main", "price": 210, "spicy": false },
        { "id": 13, "name": "Bozena Shiro", "category": "Main", "price": 180, "spicy": true },
        { "id": 14, "name": "Ayibe", "category": "Side", "price": 70, "spicy": false },
        { "id": 15, "name": "Kocho", "category": "Side", "price": 60, "spicy": false },
        { "id": 16, "name": "Enkulal Firfir", "category": "Breakfast", "price": 110, "spicy": true },
        { "id": 17, "name": "Fuul", "category": "Breakfast", "price": 90, "spicy": true },
        { "id": 18, "name": "Genfo", "category": "Breakfast", "price": 130, "spicy": true },
        { "id": 19, "name": "Chechebsa", "category": "Breakfast", "price": 120, "spicy": true },
        { "id": 20, "name": "Kik Alicha", "category": "Vegetarian", "price": 100, "spicy": false }
    ],
    searchTerm: '',
    cart: [] // { id , name ,amount , totalPrice } },

}



let menuContainerDiv = document.getElementById("menu-container");
let orderContainerBox = document.getElementById("order-container-box");
// console.log(orderContainerBox)
let searchBar = document.getElementById('search-bar');
let checkOutForm = document.getElementById('checkout-form');
let phoneNumError = document.getElementById('phone-error');
let NameError = document.getElementById('name-error');

let checkOutFormTotalDisplay = document.getElementById('total-container-for-checkout-form');

let totalContainerPrice = document.getElementById('total-container');


// * things the proj must do
// * get to have items in the home page
// * filter by searching in the search box - updates items To Be Rendered
// * add to cart - updates cart property
// * checkout will do a save on the local storage
// * for the checkout page - phone , name , Address to be delivered to , total Price



// loop through the menu items
// set the id to the div and then write the text accordingly
// add to cart - id  - btn add slew - then i will update the localstorage id - amount of things - * 2
// search - means filter the data from this array and render that
// render wld only change the menu-box part
// it will take an array of items


let renderMenu = async (arrayOfMenuItems) => {
    // when we have a thing to be filtered we will filter by the search term and render that

    menuContainerDiv.innerHTML = ''
    for (item of arrayOfMenuItems) {
        // { id , name, type, category, price, spicy } = item;
        let itemDiv = createMenuCards(item);

        menuContainerDiv.appendChild(itemDiv)
    }
}


let renderOrderContainer = () => {
    // every time order is updated this part will be called
    // src of truth for this is cart
    console.log('Rendering Order contaienr')
    orderContainerBox.innerHTML = '<h3>Your Order</h3>';

    let itemsInCart = state.cart;

    // when sthg is added in cart 
    // {id ,name , amount , price} 


    for (cartItem of itemsInCart) {
        // console.log(cartItem)
        let { id, name, amount, totalPrice } = cartItem
        // create the div and append it to the original
        let orderDiv = createOrderDivs(id, name, amount, totalPrice)

        orderContainerBox.appendChild(orderDiv)

    }

    let total = totalInCartCalculator();
    
    totalContainerPrice.textContent = `Total = ${total}`

    checkOutFormTotalDisplay.textContent = `Total = ${total}`

}


let createOrderDivs = (id, name, amount, totalPrice) => {
    // console.log(id, name, amount, totalPrice)
    let orderContainer = document.createElement('div');

    let textElt = document.createElement('h4')
    textElt.textContent = `${name} * ${amount}  = ${totalPrice}`

    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';

    removeBtn.classList.add('removeBtn');
    removeBtn.orderId = id; // so when remove is clicked to remove the item

    removeBtn.addEventListener('click', removeItemFromCartListener);

    orderContainer.appendChild(textElt);
    orderContainer.appendChild(removeBtn);

    return orderContainer;

}


let removeItemFromCartListener = (e) => {
    // it will remove the item from the cart
    let btnClicked = e.target;
    let id = btnClicked.orderId;

    let itemsInCart = state.cart;

    // since itemsInCart is an array
    let newItems = itemsInCart.filter(
        item => item.id !== id
    )

    state.cart = newItems;

    renderOrderContainer();

}


let createMenuCards = ({ id, name, category, price, spicy }) => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('menu-display');

    let spicyHtml = spicy ? `<button class="spicy">Spicy</button>` : '';

    itemDiv.innerHTML = `
    ${spicyHtml}
    <h3>${name}</h3>
    <strong>${category}</strong>
    <p class="price">${price} ETB</p>
`;

    let addBtn = addToCartBtn(id);
    itemDiv.append(addBtn);

    return itemDiv;
}

let addToCartBtn = (id) => {
    let addToCartBtn = document.createElement('button');

    addToCartBtn.textContent = 'Add to Cart'
    addToCartBtn.itemId = id

    addToCartBtn.addEventListener('click', addToCartListener)

    addToCartBtn.classList.add('add-to-cart-btn');

    return addToCartBtn;

}


let addToCartListener = (e) => {
    // console.log('add to cart clciked')s
    // find the item in the total menu
    // then find that in the cart
    let addToCartBtn = e.target;

    let id = addToCartBtn.itemId

    let totalItems = state.dishes;

    let itemAdded = totalItems.find(
        item => item.id === id
    )

    // then fund the item into the cart
    let newlyAdded = true;

    let itemsInCart = state.cart;

    itemsInCart.forEach(
        item => {
            if (item.id === itemAdded.id) {
                newlyAdded = false;
                // updating already existing item inside the array
                item.amount += 1;
                item.totalPrice += itemAdded.price
            }
        }
    );

    if (newlyAdded) {
        // meaning it is not found
        itemsInCart.push({
            id: itemAdded.id,
            name: itemAdded.name,
            amount: 1,
            totalPrice: itemAdded.price
        })
    }

    // update the cart and rerender the items
    state.cart = itemsInCart;

    renderOrderContainer();

}


// searching items from the items Bar
let searchItemsAndRender = (e) => {
    let searchBar = e.target;

    let text = searchBar.value;

    let tester = new RegExp(`.*${text}.*`, 'i');

    let { dishes } = state
    // render items that match this regexp
    let itemsFiltered = dishes.filter(
        item => {
            if (tester.test(item.name)) {
                return item
            }
        }
    )


    console.log(itemsFiltered)


    renderMenu(itemsFiltered);
}

let checkoutItems = (e) => {
    e.preventDefault();
    // when the checkout button is clicked 
    // have a proper regexp to check the phone number and name and confirm the price
    // save it in the local storage and u r done
    const ethPhoneRegex = /^(?:\+251|251|0)?(9|7)\d{8}$/;

    NameError.textContent = ''
    phoneNumError.textContent = ''


    let formData = new FormData(checkOutForm);

    let name = formData.get('name');
    let phoneNumber = formData.get('telNum');

    let isChecked = formData.has('confirmPayment')

    if (!ethPhoneRegex.test(phoneNumber)) {
        phoneNumError.textContent = 'Please enter a valid Ethiopian phone number (e.g., 0912345678 or +251912345678).';
        return;
    }

    if (name.length <= 2) {
        NameError.textContent = 'Please enter a valid Ethiopian phone number (e.g., 0912345678 or +251912345678).';
        return;
    }

    if (!isChecked) {
        return alert("You have to confirm payment first")
    }

    let total = checkOutFormTotalDisplay.textContent

    // then save to the local storage 
    localStorage.setItem('recentPayment', JSON.stringify({ name, phoneNumber, total }))
    // then confirm payment button

    // else display the total price and show it

    alert('Successful Purchase')
    checkOutForm.reset();

    state.cart = []
    renderOrderContainer()
}

checkOutForm.addEventListener('submit', checkoutItems);



// how to pass the total in cart 




let totalInCartCalculator = () => {
    let { cart } = state;
    let total = cart.reduce(
        (total, item) => total += item.totalPrice,
        0
    )

    return total
}


searchBar.addEventListener('input', searchItemsAndRender)


document.addEventListener('DOMContentLoaded', renderMenu(state.dishes))
