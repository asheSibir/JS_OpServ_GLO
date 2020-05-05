document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', () => {
        const chooseCar = (server) => {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                console.dir(request);
                request.open('GET', server);
                request.setRequestHeader('Content-type', 'application/json');
                console.log(request.status);
                request.send();
                
            
                request.addEventListener('readystatechange', () => {
                    if (request.readyState !== 4){
                        return;
                    }
                    if (request.status === 200){
                        let response = JSON.parse(request.responseText);
                        resolve(JSON.parse(request.responseText)); 
                    } else {
                        reject(request.statusText);
                    }
                });
            });
        };
        const server = `./cars.json`;
        const getResonse = (data) => {
            data.cars.forEach(item => {
                if (item.brand === select.value) {
                const {brand, model, price} = item;
                output.innerHTML = `Тачка ${brand} ${model} <br>
                Цена: ${price}$`;
                }
            });
        };
        chooseCar(server)
            .then(getResonse)
            .catch(error => output.innerHTML = error);
    });
});
