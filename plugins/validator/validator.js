'use strict';
class Validator {
    constructor({selector, pattern = {}, method}){
        this.form = document.querySelector(selector); //вся форма из html
        this.pattern = pattern;
        this.method = method;
        this.elementsForm = [...this.form.elements].filter(item => { //все не button из form
            return item.tagName.toLowerCase() !== 'button' &&
            item.type !== 'button';
        });
        this.error = new Set();
    }
    init(){ // запуск всей проверки
        this.applyStyle(); // добавляем стиль, в зависимости от true или false
        this.setPattern(); // подключаем шаблоны к процессу
        this.elementsForm.forEach(elem => {
            elem.addEventListener('change', this.checkIt.bind(this)); // вешаем на изменение проверку
        });
        this.form.addEventListener('submit', (e)=> { //вешаем запрет на отправку
            this.elementsForm.forEach( elem => this.checkIt({target: elem})); // нельзя отправлять пустое
            if (this.error.size){ //если в архиве ошибок есть ошибки, ничего не отправлять
                e.preventDefault();
            }
        });
        
    }
    isValid(elem){
        const  validatorMethod = {
            notEmpty(elem){
                console.log(elem);
                if (elem.value.trim() === ''){ //если поля пустые, играем через error, так как false
                    return false;
                }
                return true;
            },
            pattern(elem, pattern){
                return pattern.test(elem.value); //шаблон сверяем с вводом
            }
        };
        if (this.method){//проверка на наличие методов от пользователя
            const method = this.method[elem.id]; // массив из методов, прописанных в html
            if (method){ //это добавляем на случай ошибок в html, если там просто ошиблись, то код не запускается, method undefined
                return method.every(item => {
                console.log(this.pattern[item[1]]); //так получаем сам шаблон
                console.log(validatorMethod[item[0]](elem, this.pattern[item[1]])); // этот ноль очень важен!
                    return validatorMethod[item[0]](elem, this.pattern[item[1]]);
             });
            } 
        } else {
            console.warn('Необходимо задать параметры для проверки полей');
        }
        
        return true; //это означает, что, если поля пустые, можно отправлять
    }
    checkIt(event){
        const target = event.target;
        if (this.isValid(target)){
            this.showSuccess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
    }
    showError(elem){ //действия при ошибке
        elem.classList.remove('success');
        elem.classList.add('error');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){ //первое условие на случай другой верстки
            return; //удаление (недобавление) доп. элемента, если он уже есть
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.classList.add('validator-error');
        elem.insertAdjacentElement('afterend', errorDiv);
    }
    showSuccess(elem){ //действия, когда все ок
        elem.classList.remove('error');
        elem.classList.add('success');
        if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){ 
            elem.nextElementSibling.remove('validator-error'); //удаление элемента, если он есть (см. выше другой вариант)
        }
    }
    applyStyle(){
        const style = document.createElement('style');
        style.textContent = `
        input.success {
            border: 2px solid green;
        }
        input.error {
            border: 2px solid red;
        }
        .validator-error{
            font-size: 10px;
            font-family: sans-serif;
            color: red;
        }`;
        document.head.appendChild(style);
    }
    setPattern(){
        if (!this.pattern.phone){ // благодаря этой конструкции, внешние параметры имеют приоритет, перед вписанными в конструктор
            this.pattern.phone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        }
        if (!this.pattern.email){
            this.pattern.email = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        }
    }
}