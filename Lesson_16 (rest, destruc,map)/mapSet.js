'use strict';
//new Set
const option = new Set();
option.add('a')
option.add(123);
option.add(NaN);
option.add('a');
console.log(option.size);




// new Map
const test = new Map([
    [2019, 'прошлый год'],
    ['list', {apple: 10, tomato: 16}]
]);
const car = {
    brand: 'tuktuk',
    color: 'green'
}
const fun = () => console.log(1+1);
test.set('address',{Central: 132, Pervomay: 78})
    .set(777, 'sevens')
    .set(null, 'oops')
    .set(NaN, 'wow!')
    .set(undefined, 'I do not know')
    .set(fun, 'function')


console.log(test); 
console.log(test.get(NaN));
console.log(test.has(123));
console.log(test.size);

test.forEach((key, value) => console.log(`Ключ: ${key}, а значение: ${value}`))
for(let[key, value] of test){
    console.log(`${key} - это раз, а значит от - ${value}`);
}