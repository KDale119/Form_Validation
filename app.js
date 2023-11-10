function checkName() {
    let name = document.getElementById('name').value; // length or value???
    if (name.length === 0){
    document.getElementById('name-error').style.visibility = "visible";
} else {
    document.getElementById('name-error').style.visibility = "hidden";
}

if(!name.match(/^[A-Za-z ]+$/)) {
    document.getElementById('name-error').style.visibility = "visible";
}
}


function checkEmail() {
    let email = document.getElementById('email').value;
    if (email.length === 0) {
    document.getElementById('email-error').style.visibility = 'visible';
} else {
    document.getElementById('email-error').style.visibility = 'hidden';
}
}


function checkNumb() {
    let numb = document.getElementById('numb').value;
    if (numb.length < 10 || numb.length > 10){
    document.getElementById('numb-error').style.visibility = 'visible';
} else {
    document.getElementById('numb-error').style.visibility = 'hidden';
}}

function checkMsg() {
    let msg = document.getElementById('msg').value;
    if (msg.length <= 10 || msg.length >= 250){
    document.getElementById('msg-error').style.visibility = 'visible';
} else {
    document.getElementById('msg-error').style.visibility = 'hidden';
}}
































// document.getElementById('error').style.visibility = 'hidden';




//form.addEventListener('submit', function {
//    event.preventDefault()
//})

