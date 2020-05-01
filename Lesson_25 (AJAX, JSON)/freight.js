document.addEventListener('DOMContentLoaded', (event) => {
    'use strict';
    const freightOpt = document.getElementById('options'),
    choice = document.getElementById('output');

    freightOpt.addEventListener('change', (ev) =>{
        const request = new XMLHttpRequest();
        request.open('GET', './freight.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
       
        request.addEventListener('readystatechange', (ev) => {
            if (request.status === 200 && request.readyState === 4){
                const response = JSON.parse(request.responseText);
                console.log(response);
                response.freight.forEach(item => {
                    if (item.name === freightOpt.value){
                        console.log(item);
                        const {method, port, name, price} = item;
                        choice.textContent = `Ваш выбор - ${method}, через ${port}, стоимость услуги - ${price}`;  
                    }
                });
            }
        });
    });
});