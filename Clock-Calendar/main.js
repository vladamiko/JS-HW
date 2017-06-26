'use strict';

window.onload = function () {
    let view = new View(),
        calendarElement = view.createCalendar(),
        clockElement = view.createClock(),
        calendarFlag = 'ua',
        clockFlag = 'short',
        timeShort, timeFull;

    clockElement.innerHTML = view.getCurrentTimeShort();
    view.changeStyle();
    timeShort = setInterval(() => clockElement.innerHTML = view.getCurrentTimeShort(), 1000);

    clockElement.addEventListener('click', function () {
        if (clockFlag === 'short') {
            clockFlag = 'full';
            clearInterval(timeShort);
            this.innerHTML = view.getCurrentTimeFull();
            timeFull = setInterval(() => this.innerHTML = view.getCurrentTimeFull(), 1000);
        } else if (clockFlag === 'full') {
            clockFlag = 'short';
            clearInterval(timeFull);
            this.innerHTML = view.getCurrentTimeShort();
            timeShort = setInterval(() => this.innerHTML = view.getCurrentTimeShort(), 1000);
        }
    });

    calendarElement.addEventListener('click', function () {
        if (calendarFlag === 'ua') {
            calendarFlag = 'eu';
            this.innerHTML = view.getCurrentDateEU();
        } else if (calendarFlag === 'eu') {
            calendarFlag = 'ua';
            this.innerHTML = view.getCurrentDateUA();
        }
    });

    clockElement.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        clearInterval(timeShort);
        clearInterval(timeFull);

        calendarFlag = 'ua';
        calendarElement.innerHTML = view.getCurrentDateUA();
        this.classList.add('hidden');
        calendarElement.classList.remove('hidden');
    });

    calendarElement.addEventListener('contextmenu', function (event) {
        event.preventDefault();

        clockFlag = 'short';
        clockElement.innerHTML = view.getCurrentTimeShort();
        timeShort = setInterval(() => clockElement.innerHTML = view.getCurrentTimeShort(), 1000);
        this.classList.add('hidden');
        clockElement.classList.remove('hidden');
    });
}