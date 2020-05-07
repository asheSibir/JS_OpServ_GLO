'use strict';
import countTimer from './modules/countTimer';
import toggle from './modules/toggle';
import togglePopUp from './modules/popup';
import smoothScroll from './modules/smoothScroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import showDataPhot from './modules/showTeam';
import checkData from './modules/checkdataCalc';
import calc from './modules/calculation';
import increaseTotal from './modules/calcAnimation';
import sendForm from './modules/postData';


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
increaseTotal();
// Отправка формы
sendForm();

