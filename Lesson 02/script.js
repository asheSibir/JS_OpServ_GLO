let money = 5, /*- любое число “Доход за месяц”*/
    income = 'фриланс (дополнительный доход)', /*строка с дополнительными доходом (например: фриланс), */
    addExpenses = 'интернет, такси, коммуналка', 
/*- строка с перечислением дополнительных расходов через запятую (например: интернет, такси, коммуналка), */
    deposit = false, /*- любое булево значение,*/
    mission = 99.999999999, /* - любое число (Какую сумму хотите накопить),*/
    period = 11; /*число от 1 до 12 (месяцев)*/

console.log(typeof money + '' + typeof income + '' + typeof deposit);

console.log(addExpenses.length);

console.log('\"Период равен ' + period + ' месяцев\"');

console.log('\"Цель заработать ' + mission + ' рублей/долларов/гривен/юани\"');

console.log('addExpenses'.toLowerCase());

console.log(addExpenses.split(', '));

let budgetDay = money/22;
console.log(budgetDay);
