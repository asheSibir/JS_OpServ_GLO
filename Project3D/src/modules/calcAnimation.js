'use strict';
const increaseTotal = () => {
    const calcBlock = document.querySelector('.calc-block'),
        totalValue = document.getElementById('total');
    let target, 
        step = 0;
    
    const showRes = () => {
        target = totalValue.textContent;
        totalValue.innerText = 0;
        const increase = () => {
            totalValue.innerHTML = 0;
            if (step < target){
                step += 1; 
            } else if (step > target){
                step -= step;
            }
            totalValue.innerHTML = step;
        };
        setInterval (increase, 0.001);
    };
    calcBlock.addEventListener('change', showRes);

};
export default increaseTotal;