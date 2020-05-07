'use strict';
const showDataPhot = () => {
    const command = document.getElementById('command'),
        images = command.querySelectorAll('img');
        let basicPic;
    
        command.addEventListener('mouseover', (event)=> {
            let target = event.target;
            target = target.closest('.command__photo');
            if (target){
                basicPic = target.currentSrc;
                    target.addEventListener('mouseenter', (event)=> {
                        target.src = target.dataset.img;
                    });
                    target.addEventListener('mouseout', (event)=> {
                        target.src = basicPic;
                    }); 
                }  
        });
};
export default showDataPhot;