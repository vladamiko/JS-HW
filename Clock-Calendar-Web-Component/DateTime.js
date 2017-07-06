'use strict';

class DateTime {
    getCurrentTime () {
        let currentTime = new Date(),
            hours, minutes, seconds;

        hours = this.normalizeDateTime(currentTime.getHours());
        minutes = this.normalizeDateTime(currentTime.getMinutes());
        seconds = this.normalizeDateTime(currentTime.getSeconds());

        return {hours: hours, minutes: minutes, seconds: seconds};
    }

    getTimeShort () {
        let currentTime = this.getCurrentTime();
        
        return `${currentTime.hours}:${currentTime.minutes}`;
    }

    getTimeFull () {
        let currentTime = this.getCurrentTime();
        
        return `${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`;
    }

    getCurrentDate () {
        let currentDate = new Date(),
            date, month, year, fullYear;

        date = this.normalizeDateTime(currentDate.getDate());
        month = this.normalizeDateTime(currentDate.getMonth() + 1);
        year = String(currentDate.getFullYear()).slice(2);
        fullYear = String(currentDate.getFullYear());

        return {date: date, month: month, year: year, fullYear: fullYear};
    }

    getDateEU () {
        let currentDate = this.getCurrentDate();

        return `${currentDate.month}/${currentDate.date}/${currentDate.year}`;
    }

    getDateUA () {
        let currentDate = this.getCurrentDate();

        return `${currentDate.date}.${currentDate.month}.${currentDate.fullYear}`;
    }

    normalizeDateTime (value) {
        return value >= 10? String(value): `0${value}`;
    }

    start (refresh) {
        setInterval(() => refresh(), 1000);
    }
}