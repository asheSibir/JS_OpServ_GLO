'use strict';
const checkData = () => {
    const calcBlock = document.querySelector('.calc-block');
    calcBlock.addEventListener('input', (event) =>{
        let target = event.target;
        target = target.closest('.calc-item');
        if (!target.classList.contains('calc-type')){
            if (target.value.match(/\d/g) === null || target.value.match(/[^\d]/g)){
                target.value = '';
            }
        }
    });

};
export default checkData;