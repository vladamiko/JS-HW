'use strict';

function View () {
    this.createClock = function () {
        let divClockCalendar = document.getElementsByClassName('clock-calendar'),
            divClock = document.createElement('div');

        divClockCalendar[0].appendChild(divClock);
        divClock.classList.add('clock');

        return divClock;
    }

    this.createCalendar = function () {
        let divClockCalendar = document.getElementsByClassName('clock-calendar'),
            divCalendar = document.createElement('div');

        divClockCalendar[0].appendChild(divCalendar);
        divCalendar.classList.add('calendar');

        return divCalendar;
    }

    this.getCurrentTimeShort = function () {
        let currentTime = new Date(),
            hours, minutes;

        hours = currentTime.getHours() >= 10 ? String(currentTime.getHours()) : '0' + currentTime.getHours();
        minutes = currentTime.getMinutes() >= 10 ? String(currentTime.getMinutes()) : '0' + currentTime.getMinutes();

        return `${hours}:${minutes}`;
    }

    this.getCurrentTimeFull = function () {
        let currentTime = new Date(),
            hours, minutes, seconds;

        hours = currentTime.getHours() >= 10 ? String(currentTime.getHours()) : '0' + currentTime.getHours();
        minutes = currentTime.getMinutes() >= 10 ? String(currentTime.getMinutes()) : '0' + currentTime.getMinutes();
        seconds = currentTime.getSeconds() >= 10 ? String(currentTime.getSeconds()) : '0' + currentTime.getSeconds();

        return `${hours}:${minutes}:${seconds}`;
    }

    this.getCurrentDateEU = function () {
        let currentDate = new Date(),
            date, month, year;

        date = currentDate.getDate() >= 10 ? String(currentDate.getDate()) : '0' + currentDate.getDate();
        month = currentDate.getMonth() + 1 >= 10 ? String((currentDate.getMonth() + 1)) : '0' + (currentDate.getMonth() + 1);
        year = String(currentDate.getFullYear()).slice(2);

        return `${month}/${date}/${year}`;

    }

    this.getCurrentDateUA = function () {
        let currentDate = new Date(),
            date, month, year;

        date = currentDate.getDate() >= 10 ? String(currentDate.getDate()) : '0' + currentDate.getDate();
        month = currentDate.getMonth() + 1 >= 10 ? String((currentDate.getMonth() + 1)) : '0' + (currentDate.getMonth() + 1);
        year = String(currentDate.getFullYear());

        return `${date}.${month}.${year}`;
    }

    this.changeStyle = function () {
        let divClockCalendar = document.getElementsByClassName('clock-calendar');

        divClockCalendar[0].addEventListener('mouseover', function () {
            this.classList.add('clock-calendar-hover');
        });

        divClockCalendar[0].addEventListener('mouseout', function () {
            this.classList.remove('clock-calendar-hover');
        });
    }
}