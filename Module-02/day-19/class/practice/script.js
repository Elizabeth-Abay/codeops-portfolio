let formElt = document.getElementById("form-elt");

formElt.addEventListener('submit' , (e) => {
    e.preventDefault()
    let nameInputBar = document.getElementById('name');
    let ageInputBar = document.getElementById('age');

    let name = nameInputBar.value;
    let age = ageInputBar.value;

    console.log(name)
    console.log(age)

})

