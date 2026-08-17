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


let convertValue = async (e) => {
    e.preventDefault();
    // make the request

    // find the selected value's 
    let amount = Number(currencyInput.value);

    if (isNaN(amount)) return alert('The amount must be a number');

    let valueItem = dropDownItem.value;

    console.log(valueItem);

    let response = await fetch(
        API
    );

    let jsonified = await response.json(); // will already make it an object

    let ratesObj = jsonified.rates;

    // ratesObj = JSON.parse(ratesObj); parse - string to obj
    // stringify - obj - string

    // then access the ratesObj

    // console.log(ratesObj)

    ++numberOfConvertedVals;

    convertedAmount = amount * ratesObj[valueItem]

    console.log(amount, convertedAmount);

    // put into the result div
    displayResult(amount, convertedAmount, from = 'ETB', to = valueItem)



}


let removeFromLocalStorage = (e) => {
    let buttonClicked = e.target;


    console.log('Remove button clicekd')
    let idRemoved = buttonClicked.id;
    
    console.log("Removing from local Storage")

    console.log(idRemoved)

    localStorage.removeItem(idRemoved);

    reloadWatchList()


}


let createWatchListElt = (storedInfo, i) => {
    console.log('WatchList being created')
    // create a div and removal button

    let infoContainerDiv = document.createElement('div');

    infoContainerDiv.textContent = storedInfo

    let removalButton = document.createElement('button');

    removalButton.textContent = '-'

    removalButton.id = i;

    removalButton.addEventListener('click', removeFromLocalStorage);

    infoContainerDiv.appendChild(removalButton)

    watchList.appendChild(infoContainerDiv)
}


let reloadWatchList = () => {
    // get the watchlist container and loop and show the results

    console.log('Reloadinf watch list')

    watchList.textContent = ''
    let i = 1
    while (i <= numberOfConvertedVals) {
        let storedInfo = localStorage.getItem(i)

        console.log(numberOfConvertedVals)
        console.log(storedInfo)

        // meaning if there is no item found with
        //  that key it will return null - falsy value

        if (!storedInfo) continue;
        createWatchListElt(storedInfo , i);

        i += 1
    }
}


let addToLocalStorage = (e) => {
    // get the parent's value
    console.log('Add button clicked')
    let buttonClicked = e.currentTarget
    let parent = buttonClicked.closest('.display-div');

    let value = parent.textContent;
    // from this to this , 
    // value - bold

    localStorage.setItem(numberOfConvertedVals, value);

    // only sets it to local stroage 

    reloadWatchList();
}


//  ! sthg to note is convert now shld also add to watch list



let displayResult = (amount, convertedAmount, from, to) => {
    // there needs to be a + btn to add it to the section
    resultContainer.textContent = ''
    let displayDiv = document.createElement('div');

    displayDiv.classList.add('display-div')


    displayDiv.textContent = `${amount} ${from}  = ${convertedAmount} ${to}`;
    // also there needs to be a + button
    let addToWatchList = document.createElement('button');
    addToWatchList.textContent = '+'


    displayDiv.appendChild(addToWatchList)

    addToWatchList.addEventListener('click', addToLocalStorage)


    resultContainer.appendChild(displayDiv)
}



formConverter.addEventListener('submit', convertValue)

