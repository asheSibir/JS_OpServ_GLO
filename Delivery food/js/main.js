'use strict';
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");



function toggleModal() {
  modal.classList.toggle("is-open");
}
cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);


// 1day
const buttonAuth = document.querySelector('.button-auth'),
  modalAuth = document.querySelector('.modal-auth'),
  closeAuth = document.querySelector('.close-auth'),
  logInForm = document.getElementById('logInForm'),
  loginInput = document.getElementById('login'),
  userName = document.querySelector('.user-name'),
  buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('login');

const toggleModalAuth = () => {
  modalAuth.classList.toggle('is-open');
};


function authorized() {
  const logOut =()=> {
    login = '';
    localStorage.removeItem('login');
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }
  console.log('Авторизован');
  buttonAuth.style.display = 'none';
  userName.textContent = login;
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';
  buttonOut.addEventListener('click', logOut);

}

function nonAuthorized() {
  function logIn(event) {
    event.preventDefault();
    login = loginInput.value;
    if (!login){
      alert('Введите логин!');
    }
    localStorage.setItem('login', login);
    toggleModalAuth();
    buttonAuth.removeEventListener('click', toggleModalAuth);
    closeAuth.removeEventListener('click', toggleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    //loginInput.value = ''; 
    logInForm.reset();
    checkAuth();
  }
  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
}
function checkAuth(){
  if (login){
    authorized();
  } else {
    nonAuthorized();
  }
}
checkAuth();



