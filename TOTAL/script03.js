'use strict';
let money = 950000, 
    income = 'фриланс', 
    addExpenses = 'Интернет, Такси, Коммуналка', 
    deposit = false, 
    mission = 456578, 
    period = 11;

alert('4) Вывести на экран в модальном окне (alert) сообщение с любым текстом');
console.log('5) Вывести в консоль сообщение с любым текстом');

function showType(n){
    console.log(typeof n);
}
showType(money);
showType(income);
showType(deposit);

console.log(addExpenses.length);
console.log('Период равен ' + period + 'месяцев'); 
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

addExpenses.toLowerCase();

console.log(addExpenses.split('. '));



money = prompt('Ваш месячный доход?','987654');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?','Жилье'),
    amount1 = prompt('Во сколько это обойдется?',''),
    expenses2 = prompt('Введите обязательную статью расходов?','Питание'), 
    amount2 = prompt('Во сколько это обойдется?',''),
    budgetMonth = money - amount1 - amount2,
    budgetDay = budgetMonth / 30;

console.log(budgetDay);
let helper = mission / budgetMonth;
console.log(Math.ceil(helper));

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