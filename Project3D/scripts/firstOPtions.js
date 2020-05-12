/* eslint-disable no-unused-vars */
'use strict';
window.addEventListener('DOMContentLoaded', () => { //сначала загрузится весь DOM, и только потом скрипт выполнять
    const getTimer = (deadline) => {
        const timerHours = document.getElementById("timer-hours"),
            timerMinutes = document.getElementById("timer-minutes"),
            timerSeconds = document.getElementById("timer-seconds"),
            dateNow = new Date().getTime(),
            dateStop = new Date(deadline).getTime(),
            timeRemain = (dateStop - dateNow) / 1000;
            // hoursToData = Math.floor(timeRemain / 60 / 60),
            // minutesToData = Math.floor((timeRemain - hoursToData * 60 * 60) / 60),
            // secondsToData = Math.floor(timeRemain - hoursToData * 60 * 60 - minutesToData * 60);
        const    secondsToData = Math.floor(timeRemain % 60),
            minutesToData = Math.floor((timeRemain / 60) % 60),
            hoursToData = Math.floor(timeRemain / 60 / 60);

        console.log(hoursToData);
        timerHours.textContent = hoursToData;
        timerMinutes.textContent = minutesToData;
        timerSeconds.textContent = secondsToData;
    };
    getTimer();
    //setInterval(getTimer, 1000, '22 April 2020');
});

