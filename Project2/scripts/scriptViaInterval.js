'use strict';
window.addEventListener('DOMContentLoaded', () => {
    function countTimer (deadline){
        const timerHours = document.getElementById("timer-hours"),
            timerMinutes = document.getElementById("timer-minutes"),
            timerSeconds = document.getElementById("timer-seconds");  
                
        function getTimeRemaining (){
            const dateNow = new Date().getTime(),
                dateStop = new Date(deadline).getTime(),
                timeRemain = (dateStop - dateNow) / 1000, //получили секунды
                seconds = Math.floor(timeRemain % 60), //
                minutes = (Math.floor(timeRemain / 60) % 60),
                hours = (Math.floor(timeRemain / 60 / 60) % 60); 
                return{timeRemain, hours, minutes, seconds};
        }
        setInterval (function(){
            let timer = getTimeRemaining();
            if (timer.seconds > 0) {
                timerSeconds.textContent = timer.seconds < 10? '0'+ timer.seconds : timer.seconds; 
                timerHours.textContent = timer.hours < 10? '0'+ timer.hours : timer.hours;
                timerMinutes.textContent = timer.minutes < 10? '0'+ timer.minutes : timer.minutes;  
            } else {
                timerSeconds.textContent = '00'; 
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
            }

        }, 1000);
        // setInterval(updateClock, 1000); 
        
    }
 
    countTimer('22 April 2020');
});
