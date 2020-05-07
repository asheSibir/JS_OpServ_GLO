'use strict';
const sendForm = () => {
    //SPINNER
    const preloader = () => {
        return `
        <div id="loader" class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>`;
    }; 
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successsMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
        
    const forms = document.querySelectorAll('form'),
        form = document.getElementById('form1'),
        formEnd = document.getElementById('form2'),
        formPopUp = document.getElementById('form3'),
        statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';
        
// Отправка на сервер
    
    const showError = (status) =>{
        if (status !== 200){
            statusMessage.textContent = errorMessage;
        }
    };
    const successFin = (status) => {
        const loader = document.getElementById('loader'),
        formPopUp = document.querySelector('.popup-content');
        loader.style.display = 'none';
        formPopUp.style.display = 'none';
        statusMessage.textContent = successsMessage;

    }
    
    forms.forEach((form) => {
        form.addEventListener('submit', (event)=> {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            form.insertAdjacentHTML('beforeend', preloader());
            const formData = new FormData(form);
            const postData = (body) => {
                return fetch('./server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: formData,
                    credentials: 'include'
                }); 
            };
            
            postData(formData)
                .then((response) => {
                    if (response.status !== 200){
                        return new Error();
                    } 
                    successFin();                      
                })
                // .then((data) => {
                //     console.log(data);
                // })
                .catch(showError);
            
            const inputs = [form.querySelectorAll('input')];
            inputs[0].forEach((elem) => {
                elem.value = '';
            });
            
        });
    });    

    // ВАЛИДАЦИЯ ИНПУТОВ
    const validate = (block) => {
        const fullForm = new Set(block.elements),
            chechedForm = [];
            fullForm.forEach((elem) => {
            chechedForm.push(elem);
        });
        const inputs = chechedForm.filter(elem => elem.tagName === 'INPUT');
        inputs.forEach((input) => {
            if (input.name === 'user_name'){
                if (/^[А-ЯЁ][а-яё]*$/gi.test(input.value)){
                    return;
                } else {input.value = '';}
            }
            if (input.name === 'user_email'){
                if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gi.test(input.value)){
                    return;
                } else {input.value = '';}
            }
            if (input.name === 'user_phone'){
                if(/\+?[\d\s\-\(\)]{10,}/g.test(input.value)){
                    return;
                }  else {input.value = '';}
            }
        });
    } 

    forms.forEach((form) => {
        form.addEventListener('change', (event)=> {
            validate(form);
        });
    });
 
};
export default sendForm;

