'use strict';

function View () {
    this.div = document.querySelector('.clock-calendar');
    this.dateTime = new DateTime();
    this.currentState = 'short';
    this.currentTime = '';

    this.showTime = function () {
        this.div.innerHTML = this.dateTime.getTimeShort();
        this.currentTime = this.dateTime.getTimeShort();
        this.dateTime.start(() => this.refresh());
        this.changeColorScheme();
    };

    this.changeColorScheme = function () {
        this.div.addEventListener('mouseover', () => 
            this.div.classList.add('hover'), false);
        this.div.addEventListener('mouseout', () => 
            this.div.classList.remove('hover'), false);
    };

    this.changeFormatEvent = function () {
        this.div.addEventListener('click', () => this.changeFormat(), false);
    };

    this.changeFormat = function () {
        if (this.currentState === 'short') {
            this.currentState = 'full';
            this.div.innerHTML = this.dateTime.getTimeFull();
        } else if (this.currentState === 'full') {
            this.currentState = 'short';
            this.div.innerHTML = this.dateTime.getTimeShort();
        } else if (this.currentState === 'ua') {
            this.currentState = 'eu';
            this.div.innerHTML = this.dateTime.getDateEU();
        } else if (this.currentState === 'eu') {
            this.currentState = 'ua';
            this.div.innerHTML = this.dateTime.getDateUA();
        }
    };

    this.switchInfoEvent = function () {
        this.div.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            this.switchInfo();
        }, false);
    };

    this.switchInfo = function () {
        if (this.currentState === 'short' || this.currentState === 'full') {
            this.currentState = 'ua';
            this.div.innerHTML = this.dateTime.getDateUA();
        } else if (this.currentState === 'ua' || this.currentState === 'eu') {
            this.currentState = 'short';
            this.div.innerHTML = this.dateTime.getTimeShort();
        }
    };

    this.refresh = function () {
        let shortTime = this.currentState === 'short' 
            && this.currentTime !== this.dateTime.getTimeShort(),
            fullTime = this.currentState === 'full' 
            && this.currentTime !== this.dateTime.getTimeFull(),
            uaDate = this.currentState === 'ua' 
            && this.currentTime !== this.dateTime.getDateUA(),
            euDate = this.currentState === 'eu' 
            && this.currentTime !== this.dateTime.getDateEU();
        
        if (shortTime) {
            this.div.innerHTML = this.dateTime.getTimeShort();
            this.currentTime = this.dateTime.getTimeShort();
        } else if (fullTime) {
            this.div.innerHTML = this.dateTime.getTimeFull();
            this.currentTime = this.dateTime.getTimeFull();
        } else if (uaDate) {
            this.div.innerHTML = this.dateTime.getDateUA();
            this.currentTime = this.dateTime.getDateUA();
        } else if (euDate) {
            this.div.innerHTML = this.dateTime.getDateEU();
            this.currentTime = this.dateTime.getDateEU();
        }
    };
}

