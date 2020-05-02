'use strict';
const output = document.getElementById('output');

// ОБЫЧНЫЙ AJAX
// const getData = (url, outputData) => {
//     const requst = new XMLHttpRequest();
//     requst.open('GET', url);
//     requst.addEventListener('readystatechange', (event) => {
//         if (requst.readyState !== 4){
//             return;
//         }
//         if (requst.status === 200){
//             const response = JSON.parse(requst.responseText);
//             outputData(response);
//         } else {
//             console.warn(requst.statusText);
//         }
//     });
//     requst.send();
// };
// const outputPhotos = (data) =>{
//     const random = Math.floor(Math.random() * data.length); //рандомное число, зависящее от количества данных
//     const obj = data[random];
//     console.log(obj);
//     output.innerHTML = `<img src="${obj.thumbnailUrl}" alt="${obj.title}"
//                         <h2>${obj.title}</h2>`;
// }
// const url = 'https://jsonplaceholder.typicode.com/photos';
// getData(url, outputPhotos);


// PROMISE
// const getData = (url) => { //вот тут разница
//     return new Promise ((resolve, reject) => {
//         const requst = new XMLHttpRequest();
//         requst.open('GET', url);
//         requst.addEventListener('readystatechange', (event) => {
//             if (requst.readyState !== 4){
//                 return;
//             }
//             if (requst.status === 200){
//                 const response = JSON.parse(requst.responseText);
//                 resolve(response); //вот тут разница
//             } else {
//                 reject(requst.statusText); //вот тут разница
//             }
//         });
//         requst.send();
//     });
    
// };
// const outputPhotos = (data) =>{
//     const random = Math.floor(Math.random() * data.length); //рандомное число, зависящее от количества данных
//     const obj = data[random];
//     console.log(obj);
//     output.innerHTML = `<img src="${obj.thumbnailUrl}" alt="${obj.title}"
//                         <h2>${obj.title}</h2>`;
// }
// const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';
// getData(urlPhotos) //вот тут разница
//     .then(outputPhotos)  //вот тут разница
//     .catch(error => console.warn(error)); //вот тут разница

// Promise ALL
const getData = (url) => { //вот тут разница
    return new Promise ((resolve, reject) => {
        const requst = new XMLHttpRequest();
        requst.open('GET', url);
        requst.addEventListener('readystatechange', (event) => {
            if (requst.readyState !== 4){
                return;
            }
            if (requst.status === 200){
                const response = JSON.parse(requst.responseText);
                resolve(response); //вот тут разница
            } else {
                reject(requst.statusText); //вот тут разница
            }
        });
        requst.send();
    });
    
};
const outputPhotos = (data, num) =>{
    console.log(data);
    //РАЗНИЦА! Иначе перезаписывается INNERHTML
    for (let i in data){
        output.insertAdjacentHTML('beforebegin', `<img src="${data[i].thumbnailUrl}" alt="${data[i].title}"
    <h2>${data[i].title}</h2>`);
    }
    
}
const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

const fotoFirst = getData(`https://jsonplaceholder.typicode.com/photos/1`),
        fotoSec = getData(`https://jsonplaceholder.typicode.com/photos/2`);

// fotoFirst
//     .then(outputPhotos)  //вот тут разница
//     .catch(error => console.warn(error)); //вот тут разница
// fotoSec
//     .then(outputPhotos)  //вот тут разница
//     .catch(error => console.warn(error)); //вот тут разница

// Promise.race([fotoFirst, fotoSec])
//     .then(outputPhotos)  //вот тут разница
//     .catch(error => console.warn(error)); //вот тут разница

Promise.all([fotoFirst, fotoSec])
    .then(outputPhotos)  //вот тут разница
    .catch(error => console.warn(error)); //вот тут разница