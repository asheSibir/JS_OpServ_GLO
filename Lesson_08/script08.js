'use strict';
const isNum = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function(){
        do{
            money = prompt('Ваш месячный доход?','987654');
        }
        while(isNaN(money) || money === '' || money === null);
    };   
start();
    
let 
    
    expenses2 = prompt('Введите обязательную статью расходов?','Питание'), 
    amount2 = prompt('Во сколько это обойдется?','');
 

let appData = {
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    income: {}, 
    addIncome: [],
    expenses: {},
    addExpenses: [], 
    deposit: false, 
    mission: 456578, 
    period: 3,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split('. ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++){
            let expenses = prompt('Введите обязательную статью расходов?','Жилье');
            let amount;
            do{
                amount = prompt('Во сколько это обойдется?','');
            } 
            while (isNaN(amount) || amount === '' || amount === null);

            appData.expenses[expenses] = amount;
        }
    },

    getExpensesMonth: function(){
        for (let key in appData.expenses) {
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.getBudget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        if (appData.budgetDay > 800) {
            return ('Высокий уровень дохода');
        } else if (appData.budgetDay > 300) {
            return ('Средний уровень дохода');
        } else if (appData.budgetDay > 0) {
            return ('Низкий уровень дохода')
        } else {
            return('Что-то пошло не так!');
        }
    }
    
};
appData.asking(); 
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth);

if (appData.getTargetMonth() > 0) {
    console.log('Цель будет достигнута за ' + Math.ceil(app.getTargetMonth()) + 'месяцев');
} else {
    console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

for (let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}
