'use strict';
const number = [71, 8, 90, -0.5, 25, 37, -100];
const names = ['Vlad', 'PaVel', 'serg', 'Tom'];
const mix = ['Glo', 2020, null, 'Vasya', true, 16];
const badNum = [75, 80, 45, 'one', 99];

for (let i = 0; i < mix.length; i++){
    console.log(mix[i]);
}

for (let i in mix){
    console.log(mix[i]);
}

for (let i of mix){
    console.log(i);
}

mix.forEach((elem) => console.log(elem));
mix.forEach(function(elem){
    console.log(this);
}, number);

// Метод MAP (создание нового массива из измененных элементов первоначального массива)
names.forEach((name) => name = name[0].toUpperCase() + name.slice(1).toLocaleLowerCase());
console.log(names);
const correctNames = names.map ((name) => name[0].toUpperCase() + name.slice(1).toLocaleLowerCase());
console.log(correctNames);

// Метод FILTER (выбор элементов из массива)
//Старый синтаксис
const newMix = [];
for (let i = 0; i < mix.length; i++){
    if (typeof mix[i] === 'number'){
        newMix.push(mix[i]);
    }
}
//Filter
const filterWords = mix.filter((elem) => typeof elem === 'string' && isNaN(elem));
console.log(newMix);
console.log(filterWords);

const positive = number.filter((numb) => numb > 0);
console.log(positive);

//SOME, EVERY (Проверка на наличие)
let result = 0;
for (let i = 0; i < badNum.length; i++){
    if (typeof badNum[i] === 'number'){
        result = true;
        break;
    } 
}
console.log(result);

let checkout = number.some((elem) => typeof elem !== 'number');
console.log(checkout);

let research = number.every((elem) => typeof elem === 'number');
console.log(research);

//REDUCE
let sum = 0;
for (let i of number){
    sum += i;
}
console.log(sum);

let newSum = number.reduce((storage, elem) => storage + elem);
console.log(newSum);
let extraSum = number.reduce(function(box, elem) {
    console.table({box, elem});
    return box + elem;
}, 100);
console.log(extraSum);

//Concat
const arr = [[1, 2], [3, 4], [5, 6]];
const updArr = arr.concat();
console.log(arr);