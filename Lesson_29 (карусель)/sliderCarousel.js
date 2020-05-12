'use strict';
class SliderCarousel{
    constructor({ //перечень того, что должен передавать пользующийся конструктором
        main, 
        wrap, 
        next,
        prev,
        position = 0,
        slidesToShow = 3,
        infinity = false,
        responsive = []
    }){
        if(!main || !wrap){
            console.warn(`Для работы слайдера необходимо указать, минимум, 2 параметра!`);
        }
        //инструкция, что брать из ф-ций-последователей этого конструктора
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slides = document.querySelector(wrap).children; //все дочерние элементы
        this.slidesToShow = slidesToShow;
        this.responsive = responsive;
        this.option = {
            position,//откуда начинать, если не задано в ф-ции, использующей конструктор, начинаем с 0 кадра
            widthSlide: Math.floor(100/this.slidesToShow), //100% / на количество слайдов к показу. Это для .glo-slider__item{flex}
            infinity,
        };
        this.slidesToShow = slidesToShow;
    }

    init(){
        
       this.addClass();
       this.addStyle();

       if (this.prev && this.next) {
           this.controlSlider();
       } else {
           this.addArrow();
           this.controlSlider();
       }
       if (this.responsive){ //пустой массив (по умолчанию) даст false
        this.responseInit();
       } 
    }
    addClass() { //добавляем элементам классы css
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const slide of this.slides){
            slide.classList.add('glo-slider__item');
        }
    }
    addStyle(){ //описываем классы css, через important! убиваем то, что могло прийти из верстки
        let style = document.getElementById('sliderCarousel-style');
        
        if (!style){
            
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        style.textContent = `
        .glo-slider{
            overflow: hidden; !important
        }
        .glo-slider__wrap {
            display: flex; !important
            aligh-text: center;
            transition: transform 0.5s; !important
            will-change: transform !important
        }
        .glo-slider__item {
            flex: 0 0 ${this.option.widthSlide}%; !important
            margin: auto 0 !important
        }
        `;
        document.head.appendChild(style); //добавляем стили в head
    }
    prevSlider(){
        if (this.option.infinity || this.option.position > 0){ //чтобы не ходило еще левее, когда отображается первая тройка
            --this.option.position;
            if (this.option.position < 0){
                this.option.position = this.slides.length - this.slidesToShow;
            }
            this.wrap.style.transform = `translateX(-${this.option.position * this.option.widthSlide}%)`;
        }
    }
    nextSlider(){
        if (this.option.infinity || this.option.position < this.slides.length - this.slidesToShow){
        //номер текущего слайда меньше разницы количества слайдов и показываемых слайдов количества
        //чтобы не уходило правее, когда последний слайд уже показан
            ++this.option.position;
            if (this.option.position > this.slides.length - this.slidesToShow){
                this.option.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.option.position * this.option.widthSlide}%)`;
        }
        
    }
    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this)); //передаем в фунцию глобальный this этого class
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }
    addArrow(){
        this.prev = document.createElement('button'); 
        this.next = document.createElement('button');
        this.prev.className = 'glo-slider__prev'; 
        this.next.className = 'glo-slider__next';
        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);
        const style = document.createElement('style');
        style.textContent =`
        .glo-slider__prev,
        .glo-slider__next{
            margin: 0 10px;
            border: 20px solid transparent;
            background: transparent;
        }
        .glo-slider__next{
            border-left-color: #19b5fe;
        }
        .glo-slider__prev{
            border-right-color: #19b5fe;
        }
        .glo-slider__next:focus,
        .glo-slider__prev:focus,
        .glo-slider__next:hover,
        .glo-slider__prev:hover{
            background: transparent !important;
            outline: transparent !important;
            background-color: transparent !important;
        }
        `;
        document.head.appendChild(style);
        

    }
    responseInit(){
        const slidesToShowDefault = this.slidesToShow;
        const allRespone = this.responsive.map(item => item.breakpoint); //новый массив из значений с одинаковым ключом
        const maxRespone = Math.max(...allRespone); //самое большое число нового массива
        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxRespone){
                for (let i = 0; i < allRespone.length; i++){
                    if (widthWindow < allRespone[i]){
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.option.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    } 
                }
            } else {
                this.slidesToShow = this.slidesToShowDefault;
                this.option.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            } 
        };
        checkResponse();
        window.addEventListener('resize', checkResponse);
    }
}