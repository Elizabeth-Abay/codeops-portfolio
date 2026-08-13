let container = document.getElementById('container')

let apiCaller = async (params) => {
    let result = await fetch(
    'https://dummyjson.com/recipes'
);

    let final = await result.json() 
    // console.log('final')

    // console.log(final)
    // when u have erroneous responses then have some way to handle them
    return  result ? final : ''
    
    
}


// console.log(typeof apiCaller())

// it will return a promise
apiCaller().then(
    (data) => {
        // console.log(data)
        // incase of this
        // have the recepies in a div way

        buildUI(data.recipes)
    }
).catch(err => {
    console.log(err) 
    // else return a message
    buildError()
})



let buildUI = (data) => {
    // data wld be an array of recepies
    for (recepie of data){
        // console.log(recepie)
        let { name , ingredients , prepTime } = recepie;

        let finalContainer = document.createElement('div')

        let nameContainer = document.createElement('div');

        nameContainer.textContent = name;

        let ingredientsContainer = document.createElement('div');

        ingredientsContainer.textContent = ingredients;

        let prepTimeContainer = document.createElement('div');

        prepTimeContainer.textContent = prepTime;

        finalContainer.appendChild(nameContainer)
        finalContainer.appendChild(ingredientsContainer)
        finalContainer.appendChild(prepTimeContainer)



        finalContainer.classList.add('recepie-container')

        container.appendChild(finalContainer)

    }
}


let buildError = () => {
    let div = document.createElement('div');

    div.textContent = "Error happened while fetching"
    container.appendChild(div)
}