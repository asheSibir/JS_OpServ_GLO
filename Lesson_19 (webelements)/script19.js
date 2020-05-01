'use strict';
const height = document.documentElement.clientHeight,
    btn = document.querySelector('.box_btn');
console.log(height);

const box = document.getElementById('box');
console.dir(box);
console.log(box.clientHeight);
console.log(box.offsetHeight);
console.log(box.scrollHeight);

btn.addEventListener('click', ()=>{
    box.style.height = `${box.scrollHeight + 50}px`;
    box.style.width = `${box.scrollWidth + 70}px`;
})