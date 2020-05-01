'use strict';
const myForm = document.getElementById('myfom'),
elementsForm = [];


for (let elem of myForm.elements){
    if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button'){
        elementsForm.push(elem);
    }
}
function valid (event) {
    const patternPhone = /^\d+$/;
    elementsForm.forEach(elem => {
        if (!elem.value){
            elem.style.border ='solid red';
            event.preventDefault(); //запрет отправки!
        } else {
            elem.style.border ='';
        }
        if (elem.id === 'phone' && !patternPhone.test(elem.value)){
            elem.style.border ='solid yellow';
            event.preventDefault(); //запрет отправки!
        }
    });
}
myForm.addEventListener('submit', valid);

//maskPhone('#phone'); ПОДКЛЮЧЕНИЕ РАБОТЫ ФОРМУЛЫ ИЗ ДРУГОГО СКРИПТА (ПРОПИСАН В HTML)


// ПРОВЕРКА ЛУЧШЕГО СОБЫТИЯ ДЛЯ СЛУШАТЕЛЯ НА ИНПУТ
// const phone = document.getElementById('phone');

// const showLog = function() {
//     this.value = this.value.replace(/\D/g, '');
// };

// phone.addEventListener('keydown', showLog);
//phone.addEventListener('keyup', showLog);
// phone.addEventListener('keypress', showLog);
// phone.addEventListener('input', showLog);
