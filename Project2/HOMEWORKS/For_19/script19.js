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
        const btnMenu = document.querySelector('.menu'), //это в самом верху
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            // if(!menu.style.transform || menu.style.transform === `translate(-100%)`){
            //     menu.style.transform = `translate(0)`;
            // } else {
            //     menu.style.transform = `translate(-100%)`;
            // }
            // ТО ЖЕ САМОЕ, НО ЧЕРЕЗ TOOGLE
            menu.classList.toggle('active-menu');
        }
     
        btnMenu.addEventListener('click', () =>{handlerMenu()});
        closeBtn.addEventListener('click', () =>{handlerMenu()});
        menuItems.forEach((li) => li.addEventListener('click', () =>{handlerMenu()}));   
        
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
    };
    togglePopUp();

    //Scroll

    const smoothScroll = () => {
        const linkOfLi = document.querySelectorAll('li>a'),
            btnDown = document.querySelector('[href="#service-block"]');

        console.log(linkOfLi);
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

});



