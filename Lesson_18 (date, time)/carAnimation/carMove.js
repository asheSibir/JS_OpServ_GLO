'use strict';
let image = document.getElementById('car'),
    map = document.querySelector('#map'),
    papa = document.getElementById('papa'),
    countHor = 50,
    countVert = 50;
   
let interval;

const moveCar =()=>{
    interval = requestAnimationFrame(moveCar);
    if (countVert < 4550 && countHor < 1350){
    countHor += 4;
    countVert += 5;
    image.style.left = countHor + `px`;
    image.style.top = countVert + 'px';
    }
    if (countVert > 4550 && countHor > 1350){
        countHor += 7;
        countVert += 4;
        image.style.left = countHor + `px`;
        image.style.top = countVert + 'px';
    }
};
interval = requestAnimationFrame(moveCar);
const removeCar =()=>{
    image.remove();
}
const hello =()=>{
    papa.style.visibility = 'visible';
    papa.style.top = '1000px';
    papa.style.left = '1100px';
}

// const idInt = setInterval(moveCar, 200);
// setInterval(() => {
//     clearInterval(idInt);
// }, 2300);

// setTimeout(removeCar, 12500);
// setTimeout(hello, 12600);