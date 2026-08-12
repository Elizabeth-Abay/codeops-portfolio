let formElt = document.getElementById('add-items');
let counterSection = document.getElementById('counter');
let namesClass = document.getElementsByClassName('name');
let addingOneItemBtn = document.getElementsByClassName('added');
let removingOneItemBtn = document.getElementById('bought');



function removeOneItem(e) {
    // find the amount in that container and update that
    let btnClicked = e.target; // gives us the element that was clicked

    let amtContainer = btnClicked.closest('.container').querySelector('.amount')

    if (!amtContainer) return alert('Error cldnt find the amt container')

    let currentAmount = Number(amtContainer.textContent)
    if (!currentAmount || currentAmount < 0) return alert('Current Amt <=  0 or Nan')

    currentAmount -= 1

    amtContainer.textContent = currentAmount
}


function addOneItem(e) {
    let btnClicked = e.target;

    // closest will reach upward for the parent , grandparent ..
    let amtContainer = btnClicked.closest('.container').querySelector('.amount');

    if (!amtContainer) return alert('Error cldnt find the amt container')

    let currentAmount = Number(amtContainer.textContent)

    currentAmount += 1

    amtContainer.textContent = currentAmount

}


formElt.addEventListener('submit', (e) => {
    e.preventDefault();

    const formDataHolder = new FormData(formElt);
    // will be an object of name : value

    let itemName = formDataHolder.get('item-name')?.toLowerCase().trim();
    let itemAmount = formDataHolder.get('item-amount')?.trim()

    if (!itemName || !itemAmount) return alert('Name and amount cant be null')

    // else create and append them in the count
    // are we supposed to add or set new item

    let editedNext = false;

    for (let itemNameDiv of Array.from(namesClass)) {
        // remove the parent container and add new thing
        let nameOfItem = itemNameDiv.innerText.toLowerCase().trim()
        if (nameOfItem === itemName) {
            // edit the immediate next's amount
            let amtContainer = itemNameDiv.nextElementSibling
            // nextEltSibiling is a property
            amtContainer.textContent = itemAmount
            editedNext = true
        }
    }

    if (!editedNext) {
        // means add a new item
        let containerDiv = document.createElement('div');
        containerDiv.classList.add('container');
        let nameContainer = document.createElement('div');
        nameContainer.classList.add('name')
        nameContainer.textContent = itemName
        let amtContainer = document.createElement('div');
        amtContainer.classList.add('amount')
        amtContainer.textContent = itemAmount

        const boughtBtn = document.createElement('button');
        boughtBtn.classList.add('bought');
        boughtBtn.textContent = '-';

        // Create the "+" (added) button
        const addedBtn = document.createElement('button');
        addedBtn.classList.add('added');
        addedBtn.textContent = '+';

        containerDiv.appendChild(nameContainer)
        containerDiv.appendChild(amtContainer)
        containerDiv.appendChild(boughtBtn);
        containerDiv.appendChild(addedBtn)


        counterSection.appendChild(containerDiv)

    }


    formElt.reset()

})
