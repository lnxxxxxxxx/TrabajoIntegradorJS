let formElement = document.getElementById('register-form');
let nameElement = document.getElementById('name');
let lastnameElement = document.getElementById('lastname');
let userElement = document.getElementById('user');
let passwordElement = document.getElementById('password');
let registerErrorElement = document.getElementById('register-error');

registerErrorElement.style.display = 'none';

let localStore = localStorage.getItem('users');
let usersList = [];
if (localStore) {
    usersList = JSON.parse(localStore);
}

function uuidv4(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


function saveUser(e) {
    e.preventDefault();

    registerErrorElement.style.display = 'none';

    let name = nameElement.value;
    let lastname = lastnameElement.value;
    let user = userElement.value;
    let password = passwordElement.value;

    if (name !== '' && lastname !== '' && user !== '' && password !== ''){
        let newUser = {
            name,
            lastname,
            user,
            password,
            cbu: uuidv4(),
            balance: 0,
            saved: [],
            services: []
        }
        
        usersList.push(newUser);
    
        let users = JSON.stringify(usersList);
        localStorage.setItem('users', users);

        location.href = "../../public/user/login.html";
    } else {
        registerErrorElement.style.display = 'block';
        registerErrorElement.innerHTML = 'Por favor, complete todos los campos.'
    }
    

}

formElement.addEventListener('submit', (e) => saveUser(e));