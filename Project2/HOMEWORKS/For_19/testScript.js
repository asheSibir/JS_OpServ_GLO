'use strict';
const btn = document.querySelector('button'),
popup = document.querySelector('.popup'),
popupClose = popup.querySelector('.popup-close'),
popupContent = popup.querySelector('.popup-content');


const crossAnimate = () => {
    let closeBtnActive;
    let pushCloseBtn = () => {
    closeBtnActive = requestAnimationFrame(pushCloseBtn);
    
    popupClose.style.fontSize = `${6}rem`;
    popupClose.style.width = `${6}rem`;
    popupClose.style.right = `3px`;
    }   
closeBtnActive = requestAnimationFrame(pushCloseBtn);

};

const movePopup = () => {
    let initialTop = 10;
    let popupGoesDown;
    let leavePopup = () => {
        popupGoesDown = requestAnimationFrame(leavePopup);
        initialTop += 5;
        popupContent.style.position = 'relative';
        popupContent.style.top = `${initialTop}%`;
    }
    popupGoesDown = requestAnimationFrame(leavePopup);
}

const visibility = (elem) => {
    elem.style.display = 'none';
};


btn.addEventListener('click', () => {
    popup.style.display = 'block';
});
// popupClose.addEventListener('click', () => {
//     setTimeout('visibility', 500);
// });
popupClose.addEventListener('click', movePopup);
popupClose.addEventListener('mouseenter', crossAnimate);