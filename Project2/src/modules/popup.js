'use strict';
const togglePopUp =()=> {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        btnPopupClose = document.querySelector('.popup-close'),
        popupContent = popup.querySelector('.popup-content');

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            popup.style.popupContent = '10%';
        });
    });
    const movePopup = () => {

        let initialTop = 10;
        let limitTop = 105;
        let popupGoesDown;
        let leavePopup = () => {
            let widthOfScreen = screen.availWidth;
            if (widthOfScreen > 768){
                popupGoesDown = requestAnimationFrame(leavePopup);
                initialTop += 2;
                if (initialTop < 102){
                popupContent.style.position = 'relative';
                popupContent.style.top = `${initialTop}%`;
                    if (initialTop === 100){
                        const basicView = () => {
                            popup.style.display = 'none';
                            popupContent.style.top = '10%'; 
                        }
                        setTimeout (basicView, 300);                            
                        cancelAnimationFrame(leavePopup);
                    }
                }   
            } else {
                popup.style.display = 'none';
                cancelAnimationFrame(leavePopup);
            } 
        }
        popupGoesDown = requestAnimationFrame(leavePopup);
    };
    btnPopupClose.addEventListener('click', movePopup);

    popup.addEventListener(('click'), (event)=>{
        let target = event.target;
        target = target.closest('.popup-content');
        if (target === null){
            popup.style.display = 'none';
        }
    });
};
export default togglePopUp;