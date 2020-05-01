'use strict';
//Rest Spread и деструктуризация
const carsModel = {
    brand: 'Volvo',
    models: {
        sedan: ['s60', 's90'],
        cross: ['v60', 'v90']
    }
};

const {models:{sedan: [s1, s2], cross: [c1, c2]}} = carsModel;
console.log(c1, c2, s1, s2);

//СОЗДАНИЕ ОБЪЕКТА
const auto = 'BMW';
const cycle = 'Ural';
const bike = 'honda';

const transport = {
    auto,
    cycle,
    bike,
    sum(){console.log(1+2)}
}
console.log(transport);

//Object.assign
const price2017 = {
    apple: 90,
    banana: 40
}
const price2018 = {
    apple: 92,
    grape: 150
}
const price2019 = {
    apple: 50,
    grape: 157,
    pineapple: 200,
    mango: 250

}
const vat = '20%';
Object.assign(price2017, price2018);
console.log(price2017);

const currentPrice = {...price2017, ...price2018, ...price2019, vat};
console.log(currentPrice);





const createCar = ({marka = 'ВАЗ', model = 'неизвестной модели', color = 'неустановлен'} = {}) => {
    console.log(`Прибыл автомобиль: ${marka} ${model}, цвет: ${color}`);
};
//createCar ({marka: 'BMW'});
createCar ();

const group = {
    boys: {
        first: 'Ivan',
        second: 'Serg',
    },
    girls: {
        first: 'Anna',
        second: 'Elena',
    },
    teacher: 'Petrova',

};
const {...girls} = group;
console.log(group);

//МАССИВЫ (деструктуризация)
const team = ['Anna', 'Karina', 'Marina', 'Victoria'];
//const [a, b, c, d] = team;
const [, a,, b] = team;
console.log(team);
console.log(a, b);




const car = {
    marka: 'Mazda',
    model: 5,
    color: 'red',
    spareParts:{
        wheels: 4,
        doors: 5,
        seats: 5,
    }
};
const {marka, model, color, spareParts} = car;
const {spareParts: {wheels, doors, seats}} = car;
const {owners: {name = 'mr. Tot'} = {}} = car;
console.log(marka, model+3, color, spareParts);
console.log(wheels, doors, seats, name);



//Rest Spread
const arr1 = [1,5,6,910];
const arr2 = [8,9,45,2020];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const addArr = [1, 5, 60];

function test(...arr){
        console.log(arr);
}
test('red', 5, 12, 'black', [], 9, ...addArr);