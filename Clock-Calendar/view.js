'use strict';

function View () {
    this.div = document.querySelector('.clock-calendar');

    this.dateTime = new DateTime();

    this.currentState = 'short';

    this.showTime = function () {
        this.div.innerHTML = this.dateTime.getCurrentTimeShort();
    }

    this.changeFormat = function () {
        if (this.currentState === 'short') {
            this.currentState = 'full';
            this.div.innerHTML = this.dateTime.getCurrentTimeFull();
        } else if (this.currentState === 'full') {
            this.currentState = 'short';
            this.div.innerHTML = this.dateTime.getCurrentTimeShort();
        } else if (this.currentState === 'ua') {
            this.currentState = 'eu';
            this.div.innerHTML = this.dateTime.getCurrentDateEU();
        } else if (this.currentState === 'eu') {
            this.currentState = 'ua';
            this.div.innerHTML = this.dateTime.getCurrentDateUA();
        }
    };

    this.switchInfo = function () {
        if (this.currentState === 'short' || this.currentState === 'full') {
            this.currentState = 'ua';
            this.div.innerHTML = this.dateTime.getCurrentDateUA();
        } else if (this.currentState === 'ua' || this.currentState === 'eu') {
            this.currentState = 'short';
            this.div.innerHTML = this.dateTime.getCurrentTimeShort();
        }
    };

    this.refresh = function () {
        if (this.currentState === 'short') {
            this.div.innerHTML = this.dateTime.getCurrentTimeShort();
        } else if (this.currentState === 'full') {
            this.div.innerHTML = this.dateTime.getCurrentTimeFull();
        } else if (this.currentState === 'ua') {
            this.div.innerHTML = this.dateTime.getCurrentDateUA();
        } else if (this.currentState === 'eu') {
            this.div.innerHTML = this.dateTime.getCurrentDateEU();
        }
    };
}

