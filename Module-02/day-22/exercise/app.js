// what if first we gotta get the ranges and save it to the local strorage

// make the api request here and then localstorage lay make them persistance
// api request ,  then store the things in the watchlist 
// for every convert make an api request


const API = 'https://open.er-api.com/v6/latest/ETB';
let dropDownItem = document.getElementById("currency-rates");
let formConverter = document.getElementById("exchange-form");
let currencyInput = document.getElementById("amt");
let resultContainer = document.getElementById('result-container');
let watchList = document.getElementById('watch-list');

let numberOfConvertedVals = 0; // at the start nthg will be converted


const displayStatus = (message, type = 'loading') => {
    resultContainer.innerHTML = '';
    const statusDiv = document.createElement('div');
    statusDiv.className = `display-div ${type}`;
    statusDiv.textContent = message;
    resultContainer.appendChild(statusDiv);
};


let convertValue = async (e) => {
    e.preventDefault();
    // make the request
    // find the selected value's 
    let amount = Number(currencyInput.value);

    let submitBtn = formConverter.querySelector('button[type="submit"]');

    if (isNaN(amount) || amount <= 0) {
        displayStatus('Please enter a valid positive number.', 'error');
        return;
    }
    let valueItem = dropDownItem.value;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Converting...';
    displayStatus('Fetching latest exchange rates...', 'loading');

    try {
        let response = await fetch(API);

        let jsonified = await response.json(); // will already make it an object

        let ratesObj = jsonified.rates;

        // ratesObj = JSON.parse(ratesObj); parse - string to obj
        // stringify - obj - string

        // then access the ratesObj

        // console.log(ratesObj)

        ++numberOfConvertedVals;

        convertedAmount = (amount * ratesObj[valueItem]).toFixed(2)

        console.log(amount, convertedAmount);

        // put into the result div

        // display the result and add info to the local storage
        displayResult(amount, convertedAmount, from = 'ETB', to = valueItem)

        localStorage.setItem(valueItem, ratesObj[valueItem]);

        reloadWatchList();

    } catch (error) {
        console.error('Conversion error:', error);
        displayStatus(`Error: ${error.message || 'Network error occurred.'}`, 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Convert Now';
        formConverter.reset();

    }

}


let removeFromLocalStorage = (e) => {
    // removes from the local storage and calls the re rendering of watchlist
    // watch list's source of truth is the localstorage
    let buttonClicked = e.target;

    let keyRemoved = buttonClicked.getAttribute('key');

    console.log(`Remove button clicekd for id number in the localstorage of ${keyRemoved} `)

    // then remove from the local storage

    localStorage.removeItem(keyRemoved);

    reloadWatchList()


}


let createWatchListElt = (key, storedInfo) => {
    console.log('WatchList being created')
    // create a div and removal button

    // "ANG": 0.011113


    let infoContainerDiv = document.createElement('div');

    infoContainerDiv.innerHTML = `<b>${key} : ${storedInfo}</b>`
    infoContainerDiv.classList.add('watchlist-item');

    let removalButton = document.createElement('button');

    removalButton.classList.add('remove-btn')

    removalButton.textContent = 'x'

    // either u have to set it into the dataset object to make it accessible through the .getAttribute('key')
    // or u can have it as this  removalButton.key = key and access it normally with e.target.key no .getAttribute('key')
    removalButton.setAttribute('key', key) // button will have id same as the key in the local storage

    removalButton.addEventListener('click', removeFromLocalStorage);

    infoContainerDiv.appendChild(removalButton);

    watchList.appendChild(infoContainerDiv)

    console.log(`In creating this the id attached is ${key} and the storedVal is ${storedInfo}`)
}


let reloadWatchList = () => {
    // get the watchlist container and loop and show the results

    console.log('Reloading watch list')

    console.log(`local stoage lay yalut when reload is called expected ${numberOfConvertedVals}`)

    watchList.innerHTML = '' // make it empty

    let i = 1 // id to get the items

    // get the objects from the localstorage

    let allDataStored = { ...localStorage };

    // this will give us the local storage object



    for (key of Object.keys(allDataStored)) {
        console.log(`Accessing the info of ${key}`);

        let storedInfo = localStorage.getItem(key)

        if (!storedInfo) continue;

        console.log(`storedInfo of ${key} is ${storedInfo}.`);

        createWatchListElt(key, storedInfo)
    }


    // having continue in the loop will cause i not to be incremened
    // // numberofConvertedVals - is the number of items converted
    // while (i <= numberOfConvertedVals) {
    //     console.log(`Accessing the info of ${i}`);

    //     let storedInfo = localStorage.getItem(i)

    //     if (!storedInfo) continue;

    //     console.log(`storedInfo of ${i} is ${storedInfo}.`);

    //     createWatchListElt(storedInfo, i);


    //     // if storedInfo = null = false 
    //     // if (!storedInfo) continue;
    //     i += 1



    // }
}


// let addToLocalStorage = (e) => {
//     // get the parent's value
//     console.log('Add button clicked')
//     let buttonClicked = e.currentTarget
//     let parent = buttonClicked.closest('.display-div');

//     let value = parent.textContent;
//     // from this to this , 
//     // value - bold

//     localStorage.setItem(numberOfConvertedVals, value);

//     // only sets it to local stroage 

//     reloadWatchList();
// }





let displayResult = (amount, convertedAmount, from, to) => {
    // there needs to be a + btn to add it to the section
    resultContainer.textContent = ''
    let displayDiv = document.createElement('div');

    // displayDiv.classList.add('display-div')
    displayDiv.className = 'display-div success';


    displayDiv.textContent = `${amount} ${from}  = ${convertedAmount} ${to}`;


    // also there needs to be a + button
    // let addToWatchList = document.createElement('button');
    // addToWatchList.textContent = '+'


    // displayDiv.appendChild(addToWatchList)

    // addToWatchList.addEventListener('click', addToLocalStorage)


    resultContainer.appendChild(displayDiv)
}



formConverter.addEventListener('submit', convertValue)

document.addEventListener('DOMContentLoaded', reloadWatchList);


// when i click - the thing below is getting removed