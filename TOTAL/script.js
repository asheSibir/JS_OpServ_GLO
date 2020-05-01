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
    AccumulatedMonth,
    budgetDay = accumulatedMonth / 30;

console.log(budgetDay);
let helper = mission / accumulatedMonth;
console.log(Math.ceil(helper));

const getExpensesMonth = function (a,b){
    return((a / 1) + (b / 1));
};
alert('Расходы за месяц - ' + getExpensesMonth(amount1, amount2));

function getAccumulatedMonth(a, b, c) {
    a = a / 1;
    b = b / 1;
    c = c / 1;
    return(a - b - c);
}
AccumulatedMonth = (getAccumulatedMonth(money, amount1, amount2));

console.log(AccumulatedMonth);

function getTargetMonth (a, b){
    a = a / 1;
    b = b / 1;
    return (a / b);
}
console.log('Cрок достижения цели в месяцах - ' + getTargetMonth(mission, accumulatedMonth));