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
    countTimer('30 September 2020 16:51');

    //МЕНЮ
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
    };  
    tabs();
    // Slider
    const slider = () => {
        const slider = document.querySelector('.portfolio-content'), //id="all-progects">
            slide = slider.querySelectorAll('.portfolio-item'),
            btn = slider.querySelectorAll('.portfolio-btn');
//ВОЗВРАЩЕНИЕ УДАЛЕННЫХ ДОТОВ
        const dotsUl = document.createElement('ul');
        dotsUl.classList.add('portfolio-dots');
        slider.insertAdjacentElement('beforeend', dotsUl);
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dotsUl.appendChild(dot);
        for (let i = 0; i < slide.length - 1; i++){
            const newDot = dot.cloneNode(true);
            dotsUl.appendChild(newDot);
        }
        const dots = dotsUl.querySelectorAll('li'); 
        dots[0].classList.add('dot-active');
// ДОТЫ СНОВА С НАМИ            
        let currentSlide = 0, 
            interval; //для включения и остановки

        const prevSlide = (elem, index, strClass) =>{
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) =>{
            elem[index].classList.add(strClass);
        };
        // Сам слайдер, активация и дизактивация класса (видимости) элемента
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dots, currentSlide, 'dot-active'); //ВЕРНУТЬ!!
            currentSlide++;
            if (currentSlide === slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dots, currentSlide, 'dot-active'); //ВЕРНУТЬ!!
        };
        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlide = () => {
            clearInterval(interval);
        };
        slider.addEventListener('click', (event) =>{
            event.preventDefault();
            let target = event.target;

            if (target.matches('#arrow-right, #arrow-left, .dot')){
                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(dots, currentSlide, 'dot-active'); //ВЕРНУТЬ!!
                if (target.matches('#arrow-right')){
                    currentSlide++;
                } else if (target.matches('#arrow-left')){
                    currentSlide--;
                    } 
                    else if (target.matches('.dot')){ //ВЕРНУТЬ!!
                            dots.forEach((elem, index) => {
                                if (elem === target){
                                    currentSlide = index;
                                }
                            });
                        }
                if (currentSlide >= slide.length){
                    currentSlide = 0;
                }  
                if (currentSlide < 0){
                    currentSlide = slide.length - 1;
                }
                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide(dots, currentSlide, 'dot-active'); //ВЕРНУТЬ!!
            }
        });
        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
               startSlide(1500);
            }
        });
        startSlide(1500);
			
    };
    slider();
    // Наша команда, замена фоток (отрабатываем делегирование + dataset)
    const showDataPhtot = () => {
        const command = document.getElementById('command'),
            images = command.querySelectorAll('img');
            let basicPic;
        
            command.addEventListener('mouseover', (event)=> {
                let target = event.target;
                target = target.closest('.command__photo');
                if (target){
                    basicPic = target.currentSrc;
                        target.addEventListener('mouseenter', (event)=> {
                            target.src = target.dataset.img;
                            console.dir(target);
                        });
                        target.addEventListener('mouseout', (event)=> {
                            target.src = basicPic;
                            console.dir(target);
                        });
                        
                    }
                    
            });
    };
    showDataPhtot();
    // Калькулятор (отрабатываем регулярки, на ограничение ввода)
    const checkData = () => {
        const calcBlock = document.querySelector('.calc-block');
        calcBlock.addEventListener('input', (event) =>{
            let target = event.target;
            target = target.closest('.calc-item');
            if (!target.classList.contains('calc-type')){
                if (target.value.match(/\d/g) === null || target.value.match(/[^\d]/g)){
                    target.value = '';
                }
            }
        });

    };
    checkData();
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = calcBlock.querySelector('.calc-type'),
            calcSquare = calcBlock.querySelector('.calc-square'),
            calcCount = calcBlock.querySelector('.calc-count'),
            calcDay = calcBlock.querySelector('.calc-day'),
            totalValue = document.getElementById('total');
        
            const countSum = () => {
                let total = 0,
                countValue = 1,
                dayValue = 1;
                const typeValue = calcType.options[calcType.selectedIndex].value,
                    squareValue = +calcSquare.value;

                if (calcCount.value > 1){
                    countValue += (calcCount.value - 1) / 10;
                }
                if (calcDay.value !== '' && calcDay.value <= 5){
                    dayValue += 1;  
                } else if (calcDay.value !== '' && calcDay.value < 10) {dayValue += 0.5;} 
    
                if (typeValue && squareValue){
                    total = price * typeValue * squareValue * countValue * dayValue;
                } 
                
                totalValue.textContent = Math.ceil(total);
                
            };
             calcBlock.addEventListener('change', (event) => {
                let target = event.target;
                target = target.closest('.calc-item');
                // if (calcType.value !== '' && calcSquare.value !== ''){
                // if (target === calcType || target === calcSquare){
                // countSum ();
                // }
                if (target){countSum ();}
            });
    };
    calc(100);
    // Анимация калькулятора
    const increasTotal = () => {
        const calcBlock = document.querySelector('.calc-block'),
            totalValue = document.getElementById('total');
        let target, 
            step = 0;
        
        const showRes = () => {
            target = totalValue.textContent;
            totalValue.innerText = 0;
            const increase = () => {
                totalValue.innerHTML = 0;
                if (step < target){
                    step += 1; 
                } else if (step > target){
                    step -= step;
                }
                totalValue.innerHTML = step;
            };
            setInterval (increase, 0.001);
        };
        calcBlock.addEventListener('change', showRes);

    };
    increasTotal();
    // Отправка AJAX-FORM
    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successsMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
            
        const form = document.getElementById('form1'),
            statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'font-size: 2rem';
        
        form.addEventListener('submit', (event)=> {
            event.preventDefault();
            form.appendChild(statusMessage);

            const request = new XMLHttpRequest();
            // добавляем меняющееся информационное сообщение о ходе изменения request.readyState
            request.addEventListener('readystatechange', ()=>{
                statusMessage.textContent = loadMessage; //в этом месте можно добавить spiner, иконку загрузки!
                if (request.readyState !== 4){
                    return;
                } 
                if (request.status === 200){
                    statusMessage.textContent = successsMessage;
                    console.log(successsMessage);
                } else {
                    statusMessage.textContent = errorMessage;
                }

            });

            request.open('POST', './server.php');
            //ДЛЯ СЕРВЕРОВ, РАБОТАЮЩИХ С FORMDATA!!!
            // request.setRequestHeader('Content-Type', 'multipart/form-data');
            // const formData = new FormData(form);
            //request.send(formData); //это и есть BODY 

            //если сервер не работает с FormData, а только с JSON
            request.setRequestHeader('Content-Type', 'application/json');
            const formData = new FormData(form);
            const body = {};
            // for (let val of formData.entries()){
            //     body[val[0]] = val[1];
            // }
            formData.forEach((val, key) => {
                body[key] = val;
            });
            request.send(JSON.stringify(body));
        });
    };
    sendForm();
});



