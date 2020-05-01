'use strict';

document.addEventListener('DOMContentLoaded', (event) => {
    
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
//26 УРОК 
// const mult = (x, y) => {
//     return x * y;
// }; 
// const getArg = (z) => {
//     return mult(z, z);
// };

// const showRes = (num) =>{
//     const res = getArg(num);
//     console.log(res);
// }
// showRes(2);
// console.log('a');
// setTimeout(()=> {
//     console.log(1);
// },0);
// console.log('b');
// setTimeout(()=> {
//     console.log(2);
// },0);
// console.log('c');
// setTimeout(()=> {
//     console.log(3);
// },0);

const goUniv = (docs) => {
    return new Promise((resolve, reject) =>{
    if (docs){
        console.log('На рассмотрении...');
        setTimeout(()=>{
            if (Math.random() > 0.2){
                resolve('принят'); //
             } else {
                reject('вы не сдали экзамен');
            }
        }, 3000);
    } else {
        reject('недостаточно документов');
    } 
    });  
};
const goArmy = (checkDoc) => {
    return new Promise((resolve, reject) => {
        if (checkDoc){
            console.log('проверка...');
            console.log(`проверяем ${checkDoc} ли`);
            setTimeout(()=> {
                if (checkDoc === "принят"){
                resolve('отсрочка');
                console.log('отсрочка');
                } else {
                reject('нет решения');
                }
            }, 1000);
        } else {
            reject('повестка');
        }
    });
};

const documents = ['passp', 'photo'];
// ОТРАБОТКА PROMISE
// goUniv(documents)
//     .then(
//     (text)=>{console.log(text); return text;}, 
//     (text)=>{console.log(text);})
//     .then(goArmy)
//     .catch(text=>console.warn(text))
//     .then(()=> console.log('Все умерли'));

const findJob = (company) => {
    return new Promise((resolve, reject) =>{
        const time = Math.ceil(Math.random() * 5000);
        setTimeout(()=> {
            console.log(time % 15);
            if (time % 11){
                console.log('шанс был...');
                resolve(company);
            } else {
                reject (company);
            }
        }, time);
    });
}

const hh = findJob('HH'),
yandex = findJob('Yandex'),
google = findJob('Google');

Promise.all([hh, yandex, google])
    .then(result => console.log(`Вас взяли в ${result}`))
    .then(result => console.log(`Компания ${result} Вам отказала`))
    .catch(result => console.warn(`Компания ${result} закрыла вакансии`));