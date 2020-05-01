'use strict';
//AJAX
document.addEventListener('DOMContentLoaded', ()=>{
    const select = document.getElementById('cars'),
        output = document.getElementById('output');
    
        select.addEventListener('change', (event) =>{ //на изменение селекта вешаем запрос на сервер
            const request = new XMLHttpRequest(); 
                request.open('GET', './cars.json');
                request.setRequestHeader('Content-type', 'application/json');
                request.send();
                request.addEventListener('readystatechange', (event) => {
                    if (request.readyState === 4 && request.status === 200){
                        const data = JSON.parse(request.responseText);
                        data.cars.forEach(item => {
                            if (item.brand === select.value){
                                const {brand, model, price} = item;
                                output.innerHTML = `Автомобиль ${brand}, модель ${model} <br> стоит ${price}`;
                                console.dir(output);
                            }
                        });
                    } else {
                        output.innerHTML = 'Произошла ошибка';
                    }
                });
        });
});

// JSON
// Пример объекта, который преобразуем
const smartphone = {
    brand: 'samsung',
    screen: 5.5,
    rom: 128,
    ram: 4,
    gps: true,
    sensor: ['Accelerometer', 'E-compass', 'Fingerprint Sensor', 'Gyroscope'],
    camera: {
        back: [32, 5, 8],
        front: 16
    }
};

// JSON. 2 ОСНОВНЫХ МЕТОДА: ПЕРЕДЕЛАТЬ В JSON И РАСШИФРОВАТЬ JSON
const jsonSmart = JSON.stringify(smartphone);
const initObj = JSON.parse(jsonSmart);