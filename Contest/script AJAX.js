'use strict';
const output = document.getElementById('output'),
    form = document.getElementById('myForm'),
    actor = document.getElementById('actor'),
    citizenship = document.getElementById('citizenship'),
    gender = document.getElementById('gender'),
    statusHeroe = document.getElementById('status'),
    btn = document.querySelector('button');

console.log(output);

const getData = (url, outputData) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.setRequestHeader('Content-type', 'application/json');
    request.addEventListener('readystatechange', ()=> {
        if (request.readyState !== 4){
            return;
        }
        if (request.status === 200){
            const response = JSON.parse(request.responseText);
            outputData(response);
        } else {
            console.warn(request.statusText);
        }
    });
    request.send();
};

const url = './dbHeroes.json';

let prop = [];
const getUnique = (elem) =>{
    if (!prop.includes(elem)){
        prop.push(elem);
        return elem;
    }
};

getData(url, (data)=> {

    data.forEach((elem, key) => {
        // console.log(Object.keys(elem));
        actor.insertAdjacentHTML('afterbegin', `<option value="${elem.actors}">${elem.actors}</option>`);
        const citezen = getUnique(elem.citizenship);
        console.log(`${citezen} - уже внутри ${citizenship.lastChild.textContent}`);
        if (citezen){
            if(citezen > citizenship.lastChild.textContent){
                citizenship.insertAdjacentHTML('afterbegin', `<option value="${citezen}">${citezen}</option>`);   
            } else {
                citizenship.insertAdjacentHTML('beforeend', `<option value="${citezen}">${citezen}</option>`);   
            }
        }
        const genderOfAct = getUnique(elem.gender);
        if (genderOfAct){
            gender.insertAdjacentHTML('afterbegin', `<option value="${genderOfAct}">${genderOfAct}</option>`);   
        }
        const herStatus = getUnique(elem.status);
        if (herStatus){
            statusHeroe.insertAdjacentHTML('afterbegin', `<option value="${herStatus}">${herStatus}</option>`);   
        } 
    }); 
    
});
const showHeroe = (data) => {
    //console.log(data);
    form.addEventListener('change', ()=>{
        let allHeroes = [];
        data.forEach((heroe) => {
            console.log(heroe.actors);
            if(heroe.actors === actor.value){
                allHeroes.push(heroe);
            }
        })
        console.log(allHeroes);
    });    
};

getData(url, showHeroe);



