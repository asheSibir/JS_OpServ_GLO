document.addEventListener('DOMContentLoaded', function(){ //выполнение скрипта после загрузки всей страницы

'use strict';
let clickElem = null;
function greenHundler(event){

    if (clickElem){
        clickElem.classList.remove('green');
    }
    clickElem = event.currentTarget;
    clickElem.classList.add('green')
}
 document.querySelector('button').addEventListener('click',greenHundler)








// let eventFunc =  function(event){
//     console.log(event.target.value); //значение введенного
//     console.log(event.type); // тип события
// };
// //МЕШАЕТ УХОДИТЬ СО СТРАНИЦЫ
// window.onbeforeunload = function(){
//     return 'Вы уверены, что хотите покинуть страницу?';
// };
// document.querySelector('a').addEventListener('click', function(event){
//     event.preventDefault();
// })

// document.querySelector('input').addEventListener('input',eventFunc);//введение текста
// // document.querySelector('input').addEventListener('change',eventFunc);//уход с поля введения текста (НЕ ОЧЕНЬ ПОНЯЛА)
// document.querySelector('input').addEventListener('keyup',eventFunc);//убрали палец с клаваши
// document.querySelector('input').addEventListener('keydown',eventFunc);//нажали на клавишу
// document.querySelector('input').addEventListener('blur',eventFunc);//кликнули мимо
// document.querySelector('input').addEventListener('focus',eventFunc); // кликнули где надо
//document.getElementById('range').addEventListener('change',eventFunc); // славливание движения переключателя
// let input0 = document.querySelector('input');

//input0.addEventListener('input', eventFunc);
//input0.addEventListener('click', eventFunc);
//input0.addEventListener('mousedown', eventFunc);// зажатая мышка ушла с поля
//input0.addEventListener('mouseup', eventFunc);// на поле пришлу уже зажатая мышка
//input0.addEventListener('mousemove', eventFunc);// по полю двигается зажатая мышка
//input0.addEventListener('mouseover', eventFunc);//отрабатывает и на parent, и на child
// input0.addEventListener('mouseout', eventFunc);//отрабатывает и на parent, и на child
// input0.addEventListener('mouseleave', eventFunc);//только для node, к которому присвоен
// input0.addEventListener('mouseenter', eventFunc);//только для node, к которому присвоен

//УДАЛЕНИЕ ФУНКЦИОНАЛЬНОСТИ ddEventListener
//let count0 = 0;
// let clicked = function(){
//     count0++;
//     if (count0 === 3 ) input0.removeEventListener('click', clicked); //для удаления при условии
//     console.log('Ограниченный клик');
// };
// input0.addEventListener('click', clicked); //второй параметр, функция, задана ранее

// МОЖНО ДОБАВИТЬ АНАЛОГИЧНЫЕ addEventListener. ОНИ НЕ БУДУТ ДРУГ ДРУГУ МЕШАТЬ
// input0.addEventListener('click', function(){ //2 обязательных параметра: что отслеживаем и функция (что делать)
//     console.log('Вот он!');
// });
// input0.addEventListener('click', function(){ //2 обязательных параметра: что отслеживаем и функция (что делать)
//     console.log('Я тебя знаю!');
// });

})

// // Устаревшие ON-ы
// let input = document.querySelector('input');
// console.dir(input);
// let count = 0; // счетчик действий

// input.oninput = () =>{

//     if (count === 3){ // условие остановки работы счетчика
//         return;
//     }
//     count++; //запуск счетчика, увеличивается каждый раз, как прогоняется функция
//     // let text;
//     // text = input.textContent;
//     console.log('Начался ввод text...');

// }