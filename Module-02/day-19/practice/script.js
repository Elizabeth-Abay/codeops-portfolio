let h1Item = document.getElementById('h1-item');

h1Item.textContent = 'Ho Ho World'

let uls = document.getElementById('city-container');
let liNew = document.createElement('li')
liNew.textContent = 'Bahir Dar'

uls.appendChild(liNew)


let wrapForClick = document.getElementById('wrap-for-click');
wrapForClick.addEventListener('click', (e) => {
    // let target = e.target;
    // console.log(target) will be the clicked elt whether the div or not
    // in this case the clicked maybe btn or div so logged will be btn or div

    // let targetItem = e.currentTarget;
    // console.log(targetItem) this is where the event listener is attached
    // in this case always the div

    let clickedElt = e.target;
    console.log(clickedElt.textContent)

})

let bigCotainer = document.getElementById('container-elt');

let container = document.getElementsByClassName('delete-container');

let containersArr = Array.from(container); // since it is an html collection convert to array


for (container of containersArr) {
    container.addEventListener('click', (e) => {
        // remove urself from the dom
        let btn = e.target;
        let div = e.currentTarget;

        bigCotainer.removeChild(div)

    })

}


let form = document.getElementById('form-info');

let lists = [];

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    let formData = new FormData(form);

    let data = formData.get('information');

    console.log(data)
    lists.push(data)

    console.log(lists)
})


