'use strict';
//ПОДКЛЮЧЕНИЕ МОДУЛЕЙ ИЗ СТОРОННИХ ФАЙЛОВ (CommonJS)
const moduleOne = require('./moduleOne');
const moduleTwo = require('./moduleTwo');

moduleOne();
moduleTwo();





// // Первый вариант модуля
// (()=> {
//     const data = {
//         a: 5,
//         b: 10
//     };
//     console.log(data.a, data.b);
// })();
// // Второй вариант модуля
// const car = (() => {
//     const hidden = 'строка';
//     const secret = () => {
//         console.log(hidden);
//     };
//     return {
//         hidden: hidden,
//         secret: secret,
//         run(){
//             console.log(hidden);
//         }
//     };
// })();
// car.secret();
// car.run();
// console.log(car.hidden);

