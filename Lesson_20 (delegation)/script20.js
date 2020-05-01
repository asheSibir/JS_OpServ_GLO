'use strict';
let buttons = document.querySelectorAll('.button');
const wrapperButton = document.querySelector('.wrapper-button'),
    content = document.querySelector('.content'),
    content2 = document.querySelector('.content2'),
    addButton = document.querySelector('.add-button');

       
// const changeText = (element) => {
//     content.textContent = element.textContent;
// }

// buttons.forEach((but) => {
//     but.addEventListener('click', ()=>{
//         changeText(but);
//     });
// });

// const getButton =()=>{
//     const newButton = buttons[0].cloneNode();
//     let textButton = buttons.length + 1;
//     if (textButton < 10){
//         textButton = '0' + textButton;
//     } 
//     newButton.textContent = textButton;
//     newButton.addEventListener('click', () =>{
//         changeText(newButton);
//     })
//     wrapperButton.appendChild(newButton);
//     buttons = document.querySelectorAll('.button');
// }
// getButton();

// addButton.addEventListener('click', ()=>{
//     getButton();
// })

//ДРУГОЙ СПОСОБ
const changeSecText = (event) => {
    content2.textContent = event.target.textContent;
}
const getSecButton =()=>{
    const newButton = buttons[0].cloneNode();
    let textButton = buttons.length + 1;
    if (textButton < 10){
        textButton = '0' + textButton;
    } 
    newButton.textContent = textButton;
    wrapperButton.appendChild(newButton);
    buttons = document.querySelectorAll('.button');
}
getSecButton();
addButton.addEventListener('click', ()=>{
    getSecButton();
});

wrapperButton.addEventListener('click', () => {
       if (event.target.tagName === 'BUTTON'){
        changeSecText(event);
       }
})

//Фильтрация по тэгу event.target.tagName === 'BUTTON'
//Фильтрация по классу event.target.classList.contains('styleName')
//Фильтрация по элементу (но указывай корректно, если класс, то "."...) event.target.matches('button')
