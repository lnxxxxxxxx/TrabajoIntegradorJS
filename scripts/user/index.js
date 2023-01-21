let logoutElement = document.getElementById('logout');

function logoutUser(e) {
    localStorage.removeItem('user');
    location.href = 'login.html';
}

logoutElement.addEventListener('click',  (e) => logoutUser(e) );
