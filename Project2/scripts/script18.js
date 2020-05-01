/* eslint-disable no-unused-vars */
'use strict';
window.addEventListener('DOMContentLoaded', () => { //сначала загрузится весь DOM, и только потом скрипт выполнять
    function countTimer(deadline) {
        const timerHours = document.getElementById("timer-hours"),
            timerMinutes = document.getElementById("timer-minutes"),
            timerSeconds = document.getElementById("timer-seconds");

        function getTimeRemaining() {
            const dateNow = new Date().getTime(),
                dateStop = new Date(deadline).getTime(),
                timeRemain = (dateStop - dateNow) / 1000,
                secondsToData = Math.floor(timeRemain % 60),
                minutesToData = Math.floor((timeRemain / 60) % 60),
                hoursToData = Math.floor(timeRemain / 60 / 60);
            return {timeRemain, hoursToData, minutesToData, secondsToData};
        }
        function updateClock() {
            let timer = getTimeRemaining();

            timerHours.textContent = timer.hoursToData;
            timerMinutes.textContent = timer.minutesToData;
            timerSeconds.textContent = timer.secondsToData;

        if (timer.timeRemain > 0){
            setTimeout(updateClock, 1000);
            }
        }
        updateClock();
    }
    countTimer('22 April 2020');
});