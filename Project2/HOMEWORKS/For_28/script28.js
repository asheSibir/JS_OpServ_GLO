'use strict';
window.addEventListener('DOMContentLoaded', () => {
    //Счетчик
    countTimer('30 September 2020 16:51');

    //МЕНЮ
    toggle();

    //popup
    togglePopUp();

    //Scroll
    smoothScroll ();

    //TABS 
    tabs();

    // Slider
    slider();

    // Наша команда, замена фоток (отрабатываем делегирование + dataset)
    showDataPhot();

    // Калькулятор (отрабатываем регулярки, на ограничение ввода)
    checkData();

    // Работа калькулятора
    calc(100);

    // Анимация калькулятора
    increasTotal();

    // Отправка формы
    sendForm();
});



