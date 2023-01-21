let formElement = document.getElementById('login-form');
let userElement = document.getElementById('user');
let passwordElement = document.getElementById('password');
let loginErrorElement = document.getElementById('login-error');


let localStore = localStorage.getItem('users');
let usersList = [];

if (localStorage) {
    usersList = JSON.parse(localStore);
}

function loginUser(e) {
    e.preventDefault();

    let user = userElement.value;
    let password = passwordElement.value;

    if (user !== '' && password !== ''){

        let match = false;

        usersList.forEach(userEl => {
            if (userEl.user === user){
                if(userEl.password === password){
                    match = true;
                    location.href = '../../public/user/index.html';
                    localStorage.setItem('user', JSON.stringify(userEL));
                    return;
                }
            }
        });
        if (!match) {
            loginErrorElement.style.display = 'block';
            loginErrorElement.innerHTML = 'Datos incorrectos.'
        }
    } else {
        loginErrorElement.style.display = 'block';
        loginErrorElement.innerHTML = 'Por favor, complete los datos.'
    }
}

formElement.addEventListener('submit', (e) => loginUser(e));