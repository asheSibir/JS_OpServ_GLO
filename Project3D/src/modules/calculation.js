'use strict';
const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = calcBlock.querySelector('.calc-type'),
        calcSquare = calcBlock.querySelector('.calc-square'),
        calcCount = calcBlock.querySelector('.calc-count'),
        calcDay = calcBlock.querySelector('.calc-day'),
        totalValue = document.getElementById('total');
    
        const countSum = () => {
            let total = 0,
            countValue = 1,
            dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1){
                countValue += (calcCount.value - 1) / 10;
            }
            if (calcDay.value !== '' && calcDay.value <= 5){
                dayValue += 1;  
            } else if (calcDay.value !== '' && calcDay.value < 10) {dayValue += 0.5;} 

            if (typeValue && squareValue){
                total = price * typeValue * squareValue * countValue * dayValue;
            } 
            
            totalValue.textContent = Math.ceil(total);
            
        };
         calcBlock.addEventListener('change', (event) => {
            let target = event.target;
            target = target.closest('.calc-item');
            // if (calcType.value !== '' && calcSquare.value !== ''){
            // if (target === calcType || target === calcSquare){
            // countSum ();
            // }
            if (target){countSum ();}
        });
};
export default calc;