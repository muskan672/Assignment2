const form = document.getElementById('form');
const username = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const password2 = document.getElementById('pass2');
const phoneNumber = document.getElementById("phoneNumber");

let check;


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'textfield error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
function checkError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'checkbox error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'textfield success small';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function checkSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'checkbox success';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


form.addEventListener('submit', function (e) {
    if (check == true) {
        validate();
        

    }
    else {
        e.preventDefault();
        validate();

    }


});

function isValid(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
}

function passcheck(password) {
    const code = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return code.test(password);
}

function phoneCheck(phoneNumber){
    const phone = /^\d{10}$/;;

    return phone.test(phoneNumber);
}


function validate() {

    if (username.value === '') {
        showError(username, 'Username should not be empty')
        check = false;
    }
   

    else if (username.value.length > 20) {
        showError(username, 'Username cannot be longer than 20 chracters')

        check = false;
    }
    else {
        showSuccess(username, 'ok')
        check = true;
    }

    if (email.value === '') {
        showError(email, 'Email address should not be empty')
        check = false;
    }
    else if (!isValid(email.value)) {
        showError(email, 'Email address should be in xyx@xyz.xyz format')
        check = false;
    }
    else {
        showSuccess(email, 'ok')
        check = true

    }
    if (password.value === '') {
        showError(password, 'Password should be at least 6 chAracter: 1 Upper case, 1 Lowercase and atleast number')
        check = false;

    }
    else if (!passcheck(password.value)) {
        showError(password, 'Password should be: 1 Upper case, 1 Lowercase')
        check = false;
    }
    else {
        showSuccess(password, 'ok')
        check = true

    }

    if (password2.value === '') {
        showError(password2, 'Please retype password')
        check = false;
    }
    else if (password.value !== password2.value) {
        showError(password2, 'not matched')
        check = false;
    }
    else {
        showSuccess(password2, 'ok')
        check = true;
    }



    if (phoneNumber.value === '') {
        showError(phoneNumber, 'Phone number should not be empty')
        check = false;
    }else if (!phoneCheck(phoneNumber.value)) {

        showError(phoneNumber,'phone number should be of 10 digits only')
        check=false;
    }
    
    else {
        showSuccess(phoneNumber,'ok')
        check=true;
    }
    
}


    
