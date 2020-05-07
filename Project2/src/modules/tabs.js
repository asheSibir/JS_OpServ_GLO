'use strict';
const tabs = () => {
    const tabHeader = document.querySelector(".service-header"),
        tab = tabHeader.querySelectorAll('.service-header-tab'), //ИХ ТРИ!!!
        tabContent = document.querySelectorAll(".service-tab"); //ИХ ТРИ!!!
        
    const toggleTabContent = (index) =>{
        for (let i = 0; i < tabContent.length; i++){
            if (index === i){
                tab[i].classList.add('active');
                tabContent[i].classList.remove('d-none');
            } else {
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    };
    tabHeader.addEventListener('click', (event)=> {
        let target = event.target; //вывели сам объект нажатия
            target = target.closest('.service-header-tab'); //проверяет селектор, если селектора нет, ищет у родителей и вверх (если не нашел никогда, то Null)
            if (target){ //БЫЛО: (target.classList.contains('service-header-tab')){
                tab.forEach((item, index) => {
                     if (item === target){
                        toggleTabContent(index);
                    }
                });
            }
    });
};  
export default tabs;