'use strict';
const output = document.getElementById('output'),
    form = document.getElementById('myForm');

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

// const outputPhotos = (data) =>{
//     const random = Math.floor(Math.random() * data.length); //рандомное число, зависящее от количества данных
//     const obj = data[random];
//     console.log(obj);
//     output.innerHTML = `<img src="${obj.thumbnailUrl}" alt="${obj.title}"
//                         <h2>${obj.title}</h2>`;
// }
//const url = 'https://jsonplaceholder.typicode.com/photos';
const url = 'https://github.com/Quper24/dbHeroes.git';
// getData(url, outputPhotos);

getData(url, (data)=> {
    console.log(data);
});