'use strict';
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");



function toggleModal() {
  modal.classList.toggle("is-open");
}
cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);



const buttonAuth = document.querySelector('.button-auth'),
  modalAuth = document.querySelector('.modal-auth'),
  closeAuth = document.querySelector('.close-auth'),
  logInForm = document.getElementById('logInForm'),
  loginInput = document.getElementById('login'),
  userName = document.querySelector('.user-name'),
  buttonOut = document.querySelector('.button-out'),
  cardsRectaurants = document.querySelector('.cards-restaurants'),
  containerPromo = document.querySelector('.container-promo');

let login = localStorage.getItem('login');
// 1day АВТОРИЗАЦИЯ
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
  };
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
    if (!login || login.trim() === ''){
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

// КАРТОЧКИ РЕСТОРАНОВ
const actingCards = () =>{
  const createCard = () =>{
    const card = `
      <a href="restaurant.html" class="card card-restaurant">
      <img src="img/pizza-plus/preview.jpg" alt="image" class="card-image"/>
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title">Пицца плюс</h3>
          <span class="card-tag tag">50 мин</span>
        </div>
        <div class="card-info">
          <div class="rating">
            4.5
          </div>
          <div class="price">От 900 ₽</div>
          <div class="category">Пицца</div>
        </div>
      </div>
      </a>`;
    cardsRectaurants.insertAdjacentHTML('beforeend', card);
  };
  createCard();
  
  const openGoods =(event)=> {
    const target = event.target,
      restaurant = target.closest('.card-restaurant');
    if (restaurant){

    }
     
  };
  cardsRectaurants.addEventListener('click', openGoods);
};



