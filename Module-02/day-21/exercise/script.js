// sign up form
// validates the name and eth phone number

// shows clear errors
// saves valid things to localStorage


let form = document.getElementById('validated');
let nameMistakeContainer = document.getElementById('name-mistake-container');
let phoneMistakeContainer = document.getElementById('phone-mistake-container');
let emailMistakeContainer = document.getElementById('email-mistake-container');
let passwordMistakeContainer = document.getElementById('password-mistake-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    nameMistakeContainer.textContent = ""
    emailMistakeContainer.textContent = ""
    passwordMistakeContainer.textContent = ""
    phoneMistakeContainer.textContent = ""



    let formData = new FormData(form);

    let name = formData.get('Name')
    let phone_num = formData.get('phone_num');
    let password = formData.get('password');
    let email = formData.get('email');

    let namePattern = /^\w\s+$/
    let phoneNumberPattern =  /^(?:\+?251|0?)(?:9|7)\d{8}$/
    // working /^(?:09|07)\d{8}$/
    // optional or option - ?
    // option (?: ) // optional ( ?)
    // (?: option_one | option_two)nextvalues
    // option_one - +251 or 251 --> 
    // since + means sthg then escape \+  and it is optional
    // option_one = \+?251 
    // option_two = 0? - bc we will accept 09 and 9 too
    // \d{} - digits {count}

    let emailPattern = /^[\w.]+@[\w.]+\.\w+$/;
    // length (?= .{8,}) - means make sure the whole length is 8 charachters
    // let passwordPattern = /^(?=.{8,})\w+[A-Z]+[a-z]+\+*\.*\_*\-*\@*\#*\(*\)*{8}/
    let passwordPattern = /^[A-Z]+[a-z]+[!@#$%^&*()_\-+.]+{8,}$/
    // let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+.])[A-Za-z\d!@#$%^&*()_\-+.]{8,}$/;
    // >= 8 , 1 upper , 1 lower , 1 special
    // ?= looks ahead


    let testingName = namePattern.test(name)
    let testingPhone = phoneNumberPattern.test(phone_num);

    let testingPassword = passwordPattern.test(password);
    let testingEmail = emailPattern.test(email);

    if (!testingName) nameMistakeContainer.textContent = "Name is mistaken"
    if (!testingEmail) emailMistakeContainer.textContent = "email is mistaken"
    if (!testingPassword) passwordMistakeContainer.textContent = "password is mistaken"
    if (!testingPhone) phoneMistakeContainer.textContent = "phone is mistaken"


    localStorage.setItem('submitted_form', JSON.stringify({
        name, phone_num, email, password
    }))


})
