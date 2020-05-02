'use strict';

window.addEventListener("DOMContentLoaded", () => {
    // Плавная прокрутка
    const scrolling = (el) => {
      if (el.href === undefined) return;
      let link = el.href.split('#')[1];
      document.querySelector('#'+link).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };

  // таймер
  function countTimer() {
    let timerHours = document.querySelector('#timer-hours');
    let timerMinutes = document.querySelector('#timer-minutes');
    let timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaning(){
      let now = new Date();
      let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
      let timeRemaining = (tomorrow - now) / 1000;

      let seconds = Math.floor(timeRemaining % 60);
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let hours = Math.floor(timeRemaining / 60 / 60);
      return {timeRemaining, hours, minutes, seconds};
    }

    getTimeRemaning();
    function formatTime(data) {
      if (data < 10) {
        data = '0' + data;
      }
      return data;
    }

    setInterval( () => {
      let timer = getTimeRemaning();
      timerHours.textContent = formatTime(timer.hours);
      timerMinutes.textContent = formatTime(timer.minutes);
      timerSeconds.textContent = formatTime(timer.seconds);
    }, 1000);

  }
  countTimer();


  // меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    let count = -100;
    const animate = () => {
        if (document.documentElement.clientWidth < 768) {
            menu.style.transform = `translate(0)`;
            return;
        }
        let requestId = requestAnimationFrame(animate);
        count += 2;
        menu.style.transform = `translate(${count}%)`;
        if (count === 0) {
            cancelAnimationFrame(requestId);
        }
    };

    const handlerMenu = (evt) => {

        let target = evt.target;

        if (target.closest('.menu') === null && target.closest('menu') === null) {
          menu.style.transform = `translate(-100%)`;
          return;
        }

        if (target.tagName === 'A' && target.className !== 'close-btn') {
          evt.preventDefault();
          scrolling(target);
        }

        if (!menu.style.transform || menu.style.transform === `translate(-100%)`){
          count = -100;
          animate();
        } else {
          if (target.tagName === 'A' || target.closest('.menu')) {
            menu.style.transform = `translate(-100%)`;
          }
        }
    };

    document.body.addEventListener('click', (event) => {
      handlerMenu(event);
    });
  };
  toggleMenu();

 // popup
  const togglePopup = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.popup-btn');

    popupBtn.forEach(el => {
        el.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    });

    popup.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popup.style.display = 'none';
        }
      }
    });
  };
  togglePopup();

  // Плавная прокрутка
  const scrolHead = () => {
    const btnScrolling = document.querySelector('a[href="#service-block"]');
    btnScrolling.addEventListener('click', (evt) => {
        evt.preventDefault();
        scrolling(btnScrolling);
    });
  };
  scrolHead();

  // табы
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header');
    const tab = tabHeader.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');

    const ToggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');
        if (target.classList.contains('service-header-tab')) {
          tab.forEach((item, i) => {
            if (item === target) {
              ToggleTabContent(i);
            }
          });
        }
    });

  };
  tabs();

  // слайдер  portfolio-item-active
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item');
    const btn = document.querySelectorAll('.portfolio-btn');
    const dots = document.querySelector('.portfolio-dots');
    const slider = document.querySelector('.portfolio-content');

    for (let i = 0; i < slide.length; i++) {
      dots.insertAdjacentHTML('beforeend',
      `<li class="dot ${i === 0 ? 'dot-active' : ''}"></li>`);
    }
    const dot = document.querySelectorAll('.dot');

    let currentSlide = 0;
    let interval;
    const prewSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {

      prewSlide(slide, currentSlide, 'portfolio-item-active');
      prewSlide(dot, currentSlide, 'dot-active');

      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 2000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (evt) => {
      evt.preventDefault();
      let target = evt.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }
      prewSlide(slide, currentSlide, 'portfolio-item-active');
      prewSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) {
          currentSlide++;
        } else if (target.matches('#arrow-left')) {
          currentSlide--;
        } else if (target.matches('.dot')) {
          dot.forEach((elem, index) => {
            if (elem === target) {
              currentSlide = index;
            }
          });
        }
          if (currentSlide >= slide.length) {
            currentSlide = 0;
          }

          if (currentSlide < 0) {
            currentSlide = slide.length - 1;
          }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (evt) => {
      if (evt.target.matches('.portfolio-btn') || evt.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (evt) => {
      if (evt.target.matches('.portfolio-btn') || evt.target.matches('.dot')) {
        startSlide();
      }
    });

    startSlide(2000);
  };
  slider();

  // переключение фотографий "Наша команда"
  const toggleImageCommand = () => {
    const command = document.querySelectorAll('#command .row img');

    let url;
    command.forEach(el => {

      el.addEventListener('mouseenter', (evt) => {
        url = evt.target.src;
        let target = evt.target;
        target.src = target.getAttribute('data-img');
      });

      el.addEventListener('mouseout', (evt) => {
        let target = evt.target;
        target.src = url;
      });
    });
  };
  toggleImageCommand();

  // Запрет ввода букв в "Рассчитать стоимость"
  const calculateCost = () => {
    const calculate = document.querySelector('#calc');
    calculate.addEventListener('keydown', (evt) => {

      let target = evt.target;

      if (/[^\d]/g.test(target.value) ||
        target.type !== 'number'||
        evt.keyCode > 100||
        evt.keyCode === 69) {evt.preventDefault();}

    });
  };
  calculateCost();

  // калькулятор

  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const totalValue = document.querySelector('#total');

    let intervlId;
    const renderTotal = (total) => {
      let startTotal = 0;

      clearInterval(intervlId);

      if (calcType.options[calcType.selectedIndex] === 0) {
        clearInterval(intervlId);
        startTotal = 0;
      }

      intervlId = setInterval(()=> {
        startTotal += total.toString().length;
        totalValue.textContent = Math.trunc(startTotal);
        if (startTotal >= total) {
          totalValue.textContent = Math.trunc(total);
          clearInterval(intervlId);
        }
      }, 10);
    };

    const countSum = () => {
      let total = 0;
      let countValue = 1;
      let dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value;
      const squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;

      }
      renderTotal(total);
    };



    calcBlock.addEventListener('change', (evt) => {
      const target = evt.target;

      if (target.matches('select') ||target.matches('input')) {
        countSum();
      }

    });
  };

  calc(100);


  // Отправка формы
  const sendForm = () => {
    const errorMessage = 'Что то пошло не так...';
    const loadMessage = 'Загрузка...';
    const successMessage = 'Спасибо! Мы с вами свяжемся!';

    const bodyHtml = document.querySelector('body');
    const forms = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
          statusMessage.classList.add('status-message');

    const loader = () => {
      return (`<style>
                .preloader__container {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  width: 100%;
                  overflow: hidden;
                  animation-delay: 1s;
                  background-color: rgba(0,0,0,0.33);
                  
                  position: fixed;
                  left: 0;
                  top: 0;
                      z-index: 999999;
                }
                .item-1 {
                  width: 20px;
                  height: 20px;
                  background: #f583a1;
                  border-radius: 50%;
                  margin: 7px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                @keyframes scale {
                  0% {
                    transform: scale(1);
                  }
                  50%,
                    75% {
                    transform: scale(2.5);
                  }
                  78%, 100% {
                    opacity: 0;
                  }
                }
                .item-1:before {
                  content: '';
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background-color: #eed968;
                  opacity: 0.7;
                  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
                  animation-delay: 200ms;
                  transition: 0.5s all ease;
                  transform: scale(1);
                }
                .item-2 {
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background-color: #eece68;
                  margin: 7px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                @keyframes scale {
                  0% {
                    transform: scale(1);
                  }
                  50%,
                    75% {
                    transform: scale(2.5);
                  }
                  78%, 100% {
                    opacity: 0;
                  }
                }
                .item-2:before {
                  content: '';
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background-color: #eece68;
                  opacity: 0.7;
                  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
                  animation-delay: 400ms;
                  transition: 0.5s all ease;
                  transform: scale(1);
                }
                .item-3 {
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background-color: #eec368;
                  margin: 7px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                @keyframes scale {
                  0% {
                    transform: scale(1);
                  }
                  50%,
                    75% {
                    transform: scale(2.5);
                  }
                  78%, 100% {
                    opacity: 0;
                  }
                }
                .item-3:before {
                  content: '';
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background-color: #eec368;
                  opacity: 0.7;
                  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
                  animation-delay: 600ms;
                  transition: 0.5s all ease;
                  transform: scale(1);
                }
                .item-4 {
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background-color: #eead68;
                  margin: 7px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                @keyframes scale {
                  0% {
                    transform: scale(1);
                  }
                  50%,
                    75% {
                    transform: scale(2.5);
                  }
                  78%, 100% {
                    opacity: 0;
                  }
                }
                .item-4:before {
                  content: '';
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background-color: #eead68;
                  opacity: 0.7;
                  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
                  animation-delay: 800ms;
                  transition: 0.5s all ease;
                  transform: scale(1);
                }
                .item-5 {
                  width: 20px;
                  height: 20px;
                  background: #f583a1;
                  border-radius: 50%;
                  background-color: #ee8c68;
                  margin: 7px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                @keyframes scale {
                  0% {
                    transform: scale(1);
                  }
                  50%,
                    75% {
                    transform: scale(2.5);
                  }
                  78%, 100% {
                    opacity: 0;
                  }
                }
                .item-5:before {
                  content: '';
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  background-color: #ee8c68;
                  opacity: 0.7;
                  animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
                  animation-delay: 1000ms;
                  transition: 0.5s all ease;
                  transform: scale(1);
                }
                </style>
                <div class="preloader">
                  <div class="preloader__container">
                    <div class="item-1"></div>
                    <div class="item-2"></div>
                    <div class="item-3"></div>
                    <div class="item-4"></div>
                    <div class="item-5"></div>
                  </div>
                </div>`);
    };

    const removeStatusMessage = () => {
      const status = document.querySelector('.status-message');
      if (!status) return;
        setTimeout(() => {
        status.remove();
      }, 5000);
    };

    const postData = (body) => {
      return new Promise ((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
          if (request.readyState !== 4) {
            return;
          }
          if (request.status === 200) {
           resolve();
          } else {
           reject(request.status);
          }
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));
      });


    };
    forms.forEach(form => {
      form.addEventListener('input', (evt) => {
        let target = evt.target;
        if (target.name === 'user_phone') {
          target.value = target.value.replace(/[^\+\d]/g, '');
        }

        if (target.name === 'user_name' || target.name === 'user_message') {
          target.value = target.value.replace(/[^а-я ]/gi, '');
        }
      });





      form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.style.cssText = `font-size: 2rem;
              color: #fff; `;
        const formData = new FormData(form);
        statusMessage.textContent = loadMessage;

        bodyHtml.insertAdjacentHTML(`beforeend`, loader());
        const loaderHtml = document.querySelector('.preloader');

        let body = {};
        for (let val of formData.entries()) {
          body[val[0]] = val[1];
        }

        const outputData = () => {
            statusMessage.style.cssText = `font-size: 2rem;
              color: green; `;
            removeStatusMessage();
            statusMessage.textContent = successMessage;
            form.reset();
            loaderHtml.remove();
        };

        const error = () => {
            statusMessage.style.cssText = `font-size: 2rem;
              color: red; `;
            removeStatusMessage();
            statusMessage.textContent = errorMessage;
            loaderHtml.remove();
        };


        postData(body)
          .then(outputData)
          .catch(error);

      });
    });
  };

  sendForm();
});