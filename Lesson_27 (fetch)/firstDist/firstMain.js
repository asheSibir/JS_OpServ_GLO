(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function moduleOne() {
    console.log('moduleOne');
}
module.exports = moduleOne;

},{}],2:[function(require,module,exports){
function moduleOne() {
    console.log('moduleOne');
}
module.exports = moduleOne;
},{}],3:[function(require,module,exports){
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


},{"./moduleOne":1,"./moduleTwo":2}]},{},[3]);
