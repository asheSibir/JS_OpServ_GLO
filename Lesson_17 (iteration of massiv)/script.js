'use strict';
// fetch('./example_2.json')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// const heroe1 = {name: 'Kate', male: 'f', age: '35'};
// const heroe2 = {name: 'Tom', male: 'm', age: '21'};
// const heroe3 = {name: 'Serg', male: 'm', age: '16'};
// const heroe4 = {name: 'Lena', male: 'f', age: '8'};
// const heroe5 = {name: 'Carl', male: 'm', age: '54'};

function practice(){
    const heroe1 = {name: 'Kate', male: 'f', age: '35'},
        heroe2 = {name: 'Tom', male: 'm', age: '21'},
        heroe3 = {name: 'Serg', male: 'm', age: '16'},
        heroe4 = {name: 'Lena', male: 'f', age: '8'},
        heroe5 = {name: 'Carl', male: 'm', age: '54'};
    const masHeroes = [];
    masHeroes.push(heroe1, heroe2, heroe3, heroe4, heroe5);
   
    
    const oldheroes = masHeroes.find(({age}) => age > 40); //только первый элемент, отвечающий условиям
    const allHeroesRedu = masHeroes.reduce((acc, elem) => acc.concat(elem.male), []); //все варианты этого ключа (f,m,m,f,m в нашем случае)
    const filterAge = allHeroesRedu.filter((elem, index) => allHeroesRedu.indexOf(elem) === index); //все ключи без повторений (f, m тут) 

    const allHeroesNames = masHeroes.map(elem => elem.name); //отбор значений по одному ключу
    const allHeroes = masHeroes.map(({name, age}) => ({name, age })); //И скобки! И курлы! Отбор значений по нескольким ключам
    const femaleHeroes = masHeroes.filter(({male, age}) => male === 'f' && age > 18);
    const hasOldheroes = masHeroes.some(({age}) => age > 60);
    
   
    console.log(allHeroes);
    console.log(allHeroesNames);
    console.log(allHeroesRedu);
    console.log(filterAge);
    console.log(femaleHeroes);
    console.log(hasOldheroes);
    console.log(oldheroes);
}
practice();


//КАК ШЛИ К ТОМУ, ЧТО НАПИСАНО ВЫШЕ:
    //Одну характеристику объекта-элемента из массива
    //const allHeroesNames = response.map(elem => elem.name);
    
    //НЕСКОЛЬКО КЛЮЧЕЙ КАЖДОГО ЭЛЕМЕНТА МАССИВА, ЯВЛЯЮЩЕГОСЯ ОБЪЕКТОМ
    // const allHeroes = response.map(elem => ({ //И скобки! И курлы!
    //     name: elem.name,
    //     age: elem.age
    // })); 