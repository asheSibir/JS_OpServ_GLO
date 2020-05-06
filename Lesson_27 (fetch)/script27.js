'use strict';
//FETCH
document.addEventListener('DOMContentLoaded', ()=>{
    const select = document.getElementById('cars'),
        output = document.getElementById('output');
    
    select.addEventListener('change', (event) =>{ //на изменение селекта вешаем запрос на сервер
        fetch('./cars.json', {
            method: 'GET',
            mode: 'same-origin',
            cashe: 'default', // ЛУЧШЕ УКАЗЫВАТЬ!
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'client',
            //body: JSON.stringify(body)
        }) //fetch принимает url запроса, вторым параметром - объект с настройками (см.ниже **)   
            .then((response) => {
                if (response.status !== 200){
                    throw new Error(response.statusText);
                }
                return response.json(); //смотри про методы для этой строки ниже (*)
            })
            .then((data) => { //data === response.json()
                data.cars.forEach(item => { //это код из AJAX
                    if (item.brand === select.value){
                        const {brand, model, price} = item;
                        output.innerHTML = `Автомобиль ${brand}, модель ${model} <br> стоит ${price}`;
                    }
                });
            })
            .catch((error) => console.log(error));
    });
});

// (*) у FETCH есть 3 метода обработки:
// - text() - просто текст
// - json() - json объект
// - blob() - это для файлов

// (**)
// - method: 'GET' - по умолчанию. 
// - mode: (режимы правил ограничения домена, режим кроссдоменности) по умолчанию - 'same-origin'. 
// - 'cors' позволит делать запросы к другим сайтам
// - cache: режим кеширования. в некоторых браузерах не default, может вызвать проблемы
// - credentials - можно ли передавать учетные данные вместе с запросом (include (можно), same-origin (в своем домене), 
// omit)
// - headers - объект с заголовками, в основном для POST
// - redirect (follow (переадресовывать), manual (ручн. настройка), error (прерывать перенаправление))
// - referrer (откуда пришел запрос, напр., 'client')
// - body (ВАЖНО, если POST!!!)


// FETCH НА POST
const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successsMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

const form = document.getElementById('myForm'),
    statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';


form.addEventListener('submit',(event) => {
    event.preventDefault();
    form.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(form);
    // const body = {};
    // formData.forEach((val, key) => {
    //     console.log(val);
    //     body[key] = val;
    // });
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData,
            credentials: 'include' // для cookie!!
        });
        
    };    

    postData(formData)
        .then((response) => {
            if (response.status !== 200){
                return new Error(response.statusText);
            } 
            statusMessage.textContent = successsMessage;
        })
        .catch((error) => {
            statusMessage.textContent = errorMessage;
            console.warn(error);
        });
});


