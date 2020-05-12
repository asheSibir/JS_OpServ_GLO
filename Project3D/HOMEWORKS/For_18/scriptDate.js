'use strict';
const text = document.getElementById('text');
let date = new Date();
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let time = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

function hello (moment) {
    function partOfDay (){
        if (date.getHours() < 5){
            return 'Доброй ночи!';
        } else {
            if (date.getHours() < 10){
                return 'Доброе утро!';
            } else {
                if (date.getHours() > 17){
                    return 'Доброй вечер!';
                } else {
                    return 'Добрый день!'
                }
            }
        }    
    }
    function ampm (){
        if (date.getHours() < 12){
            return 'AM';
        } else {
            return 'PM';
        }
    }
    function newYearCount(){
        let dateNW = new Date ('31 December 2020');
        return Math.floor((dateNW - date) / 1000 / 60 / 60 / 24);
    }
    return(`${partOfDay()}
    Сегодня: ${days[moment.getDay()]}
    Текущее время: ${moment.toTimeString().slice(0, 9) + ampm()}
    До нового года осталось ${newYearCount()+1} дней`);
}
console.log(hello(date));

