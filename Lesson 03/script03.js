'use strict';
// 1) Весь функционал что был ранее оставляем,
// Функционал первого урока:
let money = 0,
    income = 1,
    addExpenses,
    deposit,
    mission, 
    period;
alert('4) Вывести на экран в модальном окне (alert) сообщение с любым текстом');
console.log('5) Вывести в консоль сообщение с любым текстом'); 

// Функционал второго урока:
    money = 5,
    income = 'фриланс (дополнительный доход)',
    addExpenses = 'интернет, такси, коммуналка', 
    deposit = false, 
    mission = 987654, 
    period = 8; 
console.log(typeof money + '' + typeof income + '' + typeof deposit);
console.log(addExpenses.length);
console.log('\"Период равен ' + period + ' месяцев\"');
console.log('\"Цель заработать ' + mission + ' рублей/долларов/гривен/юани\"');
console.log('addExpenses'.toLowerCase());
console.log(addExpenses.split(', '));
let budgetDay = money/22;
console.log(budgetDay);

// ТРЕТИЙ УРОК. ДОМАШКА
// 2) Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money

money = prompt('Ваш месячный доход?', '');
// console.log(typeof money);

//3) Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” 
// сохранить в переменную addExpenses

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '');
console.log(addExpenses);
// console.log(typeof addExpenses);

//4) Спросить у пользователя “Есть ли у вас депозит в банке?” 
// и сохранить данные в переменной deposit (булево значение true/false)

deposit = prompt('Есть ли у вас депозит в банке?', '');
if (deposit === 'да'){
    deposit = true;
} else {
    deposit = false;
}
// console.log(typeof deposit);

//5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
// “Введите обязательную статью расходов?” (например expenses1, expenses2)
// “Во сколько это обойдется?” (например amount1, amount2)
// в итоге 4 вопроса и 4 разные переменных

let expenses1,
    expenses2,
    amount1,
    amount2;

let firstQue = prompt('Введите обязательную статью расходов?', '');
expenses1 = firstQue;

firstQue = prompt('Введите обязательную статью расходов?', '');
expenses2 = firstQue;

let secQue = prompt('Во сколько это обойдется?', '');
amount1 = secQue;

secQue = prompt('Во сколько это обойдется?', '');
amount2 = secQue;

//6) Вычислить бюджет на месяц, учитывая обязательные расходы, 
//сохранить в новую переменную budgetMonth и вывести результат в консоль

let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц составляет ' + budgetMonth);

// 7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, 
// вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)

let periodNec = mission / budgetMonth;
console.log('Цель будет достигнута за ' + Math.ceil(periodNec) + ' месяцев');

// 8) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону 

budgetDay = budgetMonth / 30;
console.log('Бюджет на день:' + Math.floor(budgetDay));

// 9) Написать конструкцию условий (расчеты приведены в рублях)	
// Если budgetDay больше 1200, то “У вас высокий уровень дохода”
// Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
// Если budgetDay меньше 600 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
// Если отрицательное значение то вывести “Что то пошло не так”
// Учесть варианты 0, 600 и 1200

if (Math.floor(budgetDay) >= 1200) {
    alert('У вас высокий уровень дохода');
} else {
    if (Math.floor(budgetDay) >= 600) {
        alert('У вас средний уровень дохода');
    } else {
        if (Math.floor(budgetDay) < 600 && Math.floor(budgetDay) > 0) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
        } else {
            console.log('Что то пошло не так');
        }
    }
}