'use strict';
const header = document.querySelector('h1'),
link = document.getElementById('google'),
img = document.querySelector('img');

link.className = 'newClass link-class';
header.dataset.aboutHeader = 'Заголовок';

console.log(header);
console.log(img.attributes);
console.log(link.classList);
console.log(header.dataset);
console.log(img.dataset.img);
console.log(link.dataset);

let basicImg;
img.addEventListener('mouseover', (event) => {
    basicImg = event.target.src;
    event.target.src = event.target.dataset.img;
});
img.addEventListener('mouseout', (event) => {
    console.log(event.target);
    console.log(event.target.dataset);
    event.target.src = basicImg;
});

