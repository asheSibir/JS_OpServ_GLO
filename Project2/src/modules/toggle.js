'use strict';
const toggle = () => {
    const body = document.querySelector('body'),
        menuBlock = body.querySelector('main'),
        btnMenu = body.querySelector('.menu'),//это в самом верху
        menu = body.querySelector('menu'),
        closeBtn = body.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    }

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('menu') || target.closest('.menu')){
            handlerMenu();  
        } else {
            menu.classList.remove('active-menu');
        }
        
    });        
};
export default toggle;