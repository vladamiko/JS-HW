'use strict';

function DateTime () {
    this.getCurrentTime = function () {
        let currentTime = new Date(),
            hours, minutes, seconds;

        hours = this.normalizeDateTime(currentTime.getHours());
        minutes = this.normalizeDateTime(currentTime.getMinutes());
        seconds = this.normalizeDateTime(currentTime.getSeconds());

        return {hours: hours, minutes: minutes, seconds: seconds};
    };

    this.getTimeShort = function () {
        let currentTime = this.getCurrentTime();
        
        return `${currentTime.hours}:${currentTime.minutes}`;
    };

    this.getTimeFull = function () {
        let currentTime = this.getCurrentTime();
        
        return `${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`;
    };

    this.getCurrentDate = function () {
        let currentDate = new Date(),
            date, month, year, fullYear;

        date = this.normalizeDateTime(currentDate.getDate());
        month = this.normalizeDateTime(currentDate.getMonth() + 1);
        year = String(currentDate.getFullYear()).slice(2);
        fullYear = String(currentDate.getFullYear());

        return {date: date, month: month, year: year, fullYear: fullYear};
    };

    this.getDateEU = function () {
        let currentDate = this.getCurrentDate();

        return `${currentDate.month}/${currentDate.date}/${currentDate.year}`;
    };

    this.getDateUA = function () {
        let currentDate = this.getCurrentDate();

        return `${currentDate.date}.${currentDate.month}.${currentDate.fullYear}`;
    };

    this.normalizeDateTime = function (value) {
        return value >= 10? String(value): `0${value}`;
    };

    this.start = function (refresh) {
        setInterval(() => refresh(), 1000);
    };
}