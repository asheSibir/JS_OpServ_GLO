'use strict';
//new Set (коллекция уникальных значений)
const option = new Set();
option.add('a')
option.add(123);
option.add(NaN);
option.add('a'); //(*) не добавится, так как повторяется

//new Map (объект из параметров с любыми ключами)
const test = new Map([
    [2019, 'прошлый год'],
    ['list', {apple: 10, tomato: 16}]
]);
test.set('address',{Central: 132, Pervomay: 78})
    .set(777, 'sevens')
    .set(null, 'oops')
    .set(NaN, 'wow!')
    .set(undefined, 'I do not know')
    .set(option, 'function')
    option.clear();
    console.log(option, test);
    