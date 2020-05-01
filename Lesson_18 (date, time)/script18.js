'use strict';
//setTimeout - настройка отложенного включения функции;
//setInterval - настройка повторения выполнения функции;
//clearInterval(id) - остановка повторения функции;
//clearTimeout 



// //ЗАДЕРЖКА ВЫПОЛНЕНИЯ ФУНКЦИИ
// setTimeout(()=>{
//     alert('Я долгий');
// }, 5000);

// //ПОВТОР С САМОПИСНОЙ ОСТАНОВКОЙ

// let count = 0;
// setInterval(()=>{
//     count++;
//     if (count < 5){
//         console.log('Я долгий, зато частый');
//     }
    
// }, 1000);

// //ПОВТОР С ОСТАНОВКОЙ ЧЕРЕЗ clearInterval

// let idInt = setInterval(() => {console.log('Я другой')}, 2000);
// setTimeout(()=>{
//     clearInterval(idInt);
// }, 10000);

//ПОВТОР С АРГУМЕНТОМ ИЗ ФУНКЦИИ
let getMessage = (name) => {
    console.log(`Привет, ${name}!`);
};
let idInt2 = setInterval(getMessage, 500, 'my User');
setTimeout(()=>{
    clearInterval(idInt2);
}, 3000);

//clearTimeout
let invite = (name) => {
    console.log(`${name}, пойдем обедать!`);
};

let idTimeout = setTimeout(invite, 2000, 'Андрей');
setTimeout(invite, 4000, 'Andrey');
clearTimeout(idTimeout);