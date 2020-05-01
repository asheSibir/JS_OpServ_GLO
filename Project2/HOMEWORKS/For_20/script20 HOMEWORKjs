'use strict';
window.addEventListener('DOMContentLoaded', () => {
    function countTimer (deadline){
        const timerHours = document.getElementById("timer-hours"),
            timerMinutes = document.getElementById("timer-minutes"),
            timerSeconds = document.getElementById("timer-seconds");
        let dayMs = 185400;
     
        function getTimeRemaining (){
            let dateNow = new Date().getTime(),
                dateStop = new Date(deadline).getTime(),
                timeRemain = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemain % 60), 
                minutes = (Math.floor(timeRemain / 60) % 60),
                hours = (Math.floor(timeRemain / 60 / 60) % 60); 
                return{timeRemain, hours, minutes, seconds};
        }
        setInterval (function(){
            let timer = getTimeRemaining();

            const updNumberView =(elem)=>{
                if (elem < 10){
                    return ('0' + elem);
                } else {
                    return elem;
                }
            }
            if (timer.seconds > 0) {
                
                timerSeconds.textContent = updNumberView(timer.seconds); 
                timerMinutes.textContent = updNumberView(timer.minutes);  
                timerHours.textContent = updNumberView(timer.hours);
            } else {
                if (timer.seconds <= 0){
                    let finSec = 59,
                        finMin = 59,
                        finHour = 23;  
                    dayMs-= 1;
                    timerSeconds.textContent = updNumberView(Math.floor(dayMs % 60)); 
                    timerMinutes.textContent = updNumberView(Math.floor((dayMs / 60 ) % 60));
                    timerHours.textContent = updNumberView(Math.floor((dayMs / 60 / 60) % 60));
                }
            }

        }, 1000);   
    }
    countTimer('21 April 2020 16:51');

    //МЕНЮ
    const toggle = () => {
        const menuBlock = document.querySelector('main'),
            btnMenu = document.querySelector('.menu'),//это в самом верху
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        }
     
        menuBlock.addEventListener('click', (event) => {
            let target = event.target,
            btn = target.closest('.menu');
            console.log(btn);
            if (btn) {
            handlerMenu();
            } else {
                menu.classList.remove('active-menu');
            }
        });

        menu.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('close-btn') || target.tagName === 'A'){
                handlerMenu();
            }
        });  
        
    };
    toggle();

    //popup
    const togglePopUp =()=> {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            btnPopupClose = document.querySelector('.popup-close'),
            popupContent = popup.querySelector('.popup-content');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                popup.style.popupContent = '10%';
            });
        });
        const movePopup = () => {

            let initialTop = 10;
            let limitTop = 105;
            let popupGoesDown;
            let leavePopup = () => {
                let widthOfScreen = screen.availWidth;
                if (widthOfScreen > 768){
                    popupGoesDown = requestAnimationFrame(leavePopup);
                    initialTop += 2;
                    if (initialTop < 102){
                    popupContent.style.position = 'relative';
                    popupContent.style.top = `${initialTop}%`;
                        if (initialTop === 100){
                            const basicView = () => {
                                popup.style.display = 'none';
                                popupContent.style.top = '10%'; 
                            }
                            setTimeout (basicView, 300);                            
                            cancelAnimationFrame(leavePopup);
                        }
                    }   
                } else {
                    popup.style.display = 'none';
                    cancelAnimationFrame(leavePopup);
                } 
            }
            popupGoesDown = requestAnimationFrame(leavePopup);
        };
        btnPopupClose.addEventListener('click', movePopup);

        popup.addEventListener(('click'), (event)=>{
            let target = event.target;
            target = target.closest('.popup-content');
            if (target === null){
                popup.style.display = 'none';
            }
        })
    };
    togglePopUp();

    //Scroll

    const smoothScroll = () => {
        const linkOfLi = document.querySelectorAll('li>a'),
            btnDown = document.querySelector('[href="#service-block"]');

        const scrolling = (element) =>{
            const idLink = element.getAttribute('href');
            document.querySelector(idLink).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        btnDown.addEventListener('click', (e) =>{
            e.preventDefault();
            scrolling(btnDown);
        });

        linkOfLi.forEach((li) => {
            li.addEventListener('click', (e) =>{
                e.preventDefault();
                scrolling(li);
            });
        });    

    };
    smoothScroll ();

    //TABS
    const tabs = () => {
        const tabHeader = document.querySelector(".service-header"),
            tab = tabHeader.querySelectorAll('.service-header-tab'), //ИХ ТРИ!!!
            tabContent = document.querySelectorAll(".service-tab"); //ИХ ТРИ!!!
            
        const toggleTabContent = (index) =>{
            for (let i = 0; i < tabContent.length; i++){
                if (index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        }
        tabHeader.addEventListener('click', (event)=> {
            let target = event.target; //вывели сам объект нажатия
                target = target.closest('.service-header-tab'); //проверяет селектор, если селектора нет, ищет у родителей и вверх (если не нашел никогда, то Null)
                if (target){ //БЫЛО: (target.classList.contains('service-header-tab')){
                    tab.forEach((item, index) => {
                         if (item === target){
                            toggleTabContent(index);
                        }
                    });
                }
        });

        // РУЧНОЕ ЗАДЕЙСТВОВАНИЕ ДЕТИШЕК ТАРГЕТА, альтернатива closest
        // tabHeader.addEventListener('click', (event)=> {
        //     let target = event.target;
        //     while(target !== tabHeader){
        //         if (target.classList.contains('service-header-tab')){
        //             tab.forEach((item, index) => {
        //                  if (item === target){
        //                     toggleTabContent(index);
        //                 }
        //             });
        //             return;
        //         }
        //         target = target.parentNode;
        //     }
        // });
    };  
    tabs();
});



