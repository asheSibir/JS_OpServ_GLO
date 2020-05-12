'use strict';
// 1.Написать скрипт, которые заменяет слово функция и его однокоренные слова 
// в div с id=task1 на <strong>функция</strong>. 
// 2. Написать скрипт который в div с id=task2 найдет время. Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
// заключить найденное время в тег <b></b>
//3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark>
//4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>, 

const div1 = document.getElementById('task1'),
    div2 = document.getElementById('task2'),
    func = 'функция';

div1.innerHTML = div1.textContent.replace(/функц.+?[^.,\/#!$%\^&\*;:{}=\-_`~()]/gi, (match) => `<strong>${func}</strong>`);
console.log(div1.innerHTML.match(/функци./g));

div2.innerText = div2.textContent.replace(/\d+\:\d+/g, (match) => '<b>'+`${match}`+'</b>');

const quotation = () =>{
    div1.innerHTML = div1.textContent.replace(/\«.+?\»/g, (match) => `<mark>${match}</mark>`);
    div2.innerHTML = div2.textContent.replace(/\".+?\"/g, (match) => `<mark>${match}</mark>`);
};
quotation();
const links = () =>{
    div2.innerHTML = div2.textContent.replace(/http:\/+([\w|\.|\/|\-]*)/g, (match, val1) => `<a href="${match}">${val1}</a>`)
};
links();

const color = '#ABCDEF';
console.log(/#[A-Z]{6}/.test(color));    