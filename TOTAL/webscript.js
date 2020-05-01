'use strict';
// Рекурсия
// function foo(x){
//     x += 1;
//     if (x<=10) return;
//     console.log(x);
// }

// function pow(x,y ){
//     if (y === 1) return x;
//     return pow(x, y-1) * x;
// }
// const res = pow(5,5);
// console.log(res);

//ПРОВЕРКА НА ЧИСЛО
const isNum = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

//РАНДОМНОЕ ЧИСЛО
const getRandom = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;//Math.random дает от 0 до 1, чтобы ДО 10 - <*10>
};
// console.log(getRandom(1,100)); РАНДОМЫ ПОЛУЧАЕМ

//КОЛИЧЕСТВО ИНПУТОВ
const getCounter = function(){
    let counter = 0;
    return ++counter;
};
let request = function(n){
    const counter = getCounter();
    const count = counter(); 
    if (count < 5){
        prompt('Ты как?');
    } else {
        alert('Отойди!');
    }
};


const gameRandom = function(attempt){
    const randomNum = getRandom (1,100);
    const counter = getCounter();
    return function checkNum(){
        const count = counter();
        const userNum = prompt('Попробуй угадать число');

        if (isNum(userNum)){
            let repeat = false;
            if (count < attempt){
                const num = +userNum;
                if (num > randomNum){
                    alert('Загадано другое!');
                    return checkNum();
                }
                if (num < randomNum){
                    alert('З');
                    return checkNum();
                }
                repeat = confirm('Угадали! Еще?');
            } else {
                repeat = confirm('Попытки закончились, начать с самого начала?');
            }

            if (repeat){
            gameRandom(attempt);
            } else {
            alert('Ввели НЕ то!');
            checkNum();
            }
        }
    };
};

gameRandom(10);