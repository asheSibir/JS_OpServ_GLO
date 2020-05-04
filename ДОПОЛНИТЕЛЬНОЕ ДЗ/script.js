document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', () => {
        const chooseCar = (data) => {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('GET', './cars.json');
                request.setRequestHeader('Content-type', 'application/json');
                request.send();
                request.addEventListener('readystatechange', () => {
                    if (request.readyState === 4 && request.status === 200) {
                        const data = JSON.parse(request.responseText);
                        // console.log(request.readyState);
                        // console.log(request.status);
                        console.log(data);
                        return resolve(data);
                        // data.cars.forEach(item => {
                        //     if (item.brand === select.value) {
                        //         const {brand, model, price} = item;
                        //         output.innerHTML = `Тачка ${brand} ${model} <br>
                        //         Цена: ${price}$`;
                        //     }
                        // });
                    } else {
                        reject(request.responseText);
                    }
                });
            });
        };
        const data = select.value;
        const getResonse = (key) => {
            
            console.log(key);
        };
        chooseCar(data)
            .then(getResonse)
            .catch(error => output.innerHTML = 'error');
    });
});
