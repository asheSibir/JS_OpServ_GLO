'use strict';
window.addEventListener('DOMContentLoaded', () => {
    function countTimer (deadline){
        const timerHours = document.getElementById("timer-hours"),
            timerMinutes = document.getElementById("timer-minutes"),
            timerSeconds = document.getElementById("timer-seconds");
        let dayMs = 86400;
     
        function getTimeRemaining (){
            let dateNow = new Date().getTime(),
                dateStop = new Date(deadline).getTime(),
                timeRemain = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemain % 60), 
                minutes = (Math.floor(timeRemain / 60) % 60),
                hours = (Math.floor(timeRemain / 60 / 60) % 60); 
                return{timeRemain, hours, minutes, seconds};
        }
        function addZero(elem){
            if (elem < 10){
                return '0'+elem;
            } return elem;
        }
        setInterval (function(){
            let timer = getTimeRemaining();
            if (timer.seconds > 0) {
                
                timerSeconds.textContent = timer.seconds < 10? '0'+ timer.seconds : timer.seconds; 
                timerMinutes.textContent = timer.minutes < 10? '0'+ timer.minutes : timer.minutes;  
                timerHours.textContent = timer.hours < 10? '0'+ timer.hours : timer.hours;
            } else {
                if (timer.seconds <= 0){
                    let finSec = 59,
                        finMin = 59,
                        finHour = 23;  
                    dayMs-= 1;
                    timerSeconds.textContent = Math.floor(dayMs % 60); 
                    timerMinutes.textContent = Math.floor((dayMs / 60 ) % 60);
                    timerHours.textContent = Math.floor((dayMs / 60 / 60) % 60);
                    
                    // timerSeconds.textContent = addZero(Math.floor(dayMs % 60));
                    // timerMinutes.textContent = addZero(Math.floor((dayMs / 60) % 60));  
                    // timerHours.textContent = addZero(Math.floor((dayMs / 60 / 60) % 60));  
                }
            }

        }, 1000);   
    }
    countTimer('21 April 2020 16:51');
});
