'use strict';

class ClockCalendar extends HTMLElement {
    constructor () {
        super();
    }

    start () {
        this.root = this.createShadowRoot();
        this.dateTime = new DateTime();
        this.currentState = 'short';
        this.currentTime = '';
    }

    showTime () {
        this.start();
        this.root.innerHTML = this.dateTime.getTimeShort();
        this.currentTime = this.dateTime.getTimeShort();
        this.dateTime.start(() => this.refresh());
    }

    changeColorScheme () {
        this.addEventListener('mouseover', () => 
            this.classList.add('hover'), false);
        this.addEventListener('mouseout', () => 
            this.classList.remove('hover'), false);
    }

    changeFormatEvent () {
        this.addEventListener('click', () => this.changeFormat(), false);
    }

    changeFormat () {
        if (this.currentState === 'short') {
            this.currentState = 'full';
            this.root.innerHTML = this.dateTime.getTimeFull();
        } else if (this.currentState === 'full') {
            this.currentState = 'short';
            this.root.innerHTML = this.dateTime.getTimeShort();
        } else if (this.currentState === 'ua') {
            this.currentState = 'eu';
            this.root.innerHTML = this.dateTime.getDateEU();
        } else if (this.currentState === 'eu') {
            this.currentState = 'ua';
            this.root.innerHTML = this.dateTime.getDateUA();
        }
    }

    switchInfoEvent () {
        this.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            this.switchInfo();
        }, false);
    }

    switchInfo () {
        if (this.currentState === 'short' || this.currentState === 'full') {
            this.currentState = 'ua';
            this.root.innerHTML = this.dateTime.getDateUA();
        } else if (this.currentState === 'ua' || this.currentState === 'eu') {
            this.currentState = 'short';
            this.root.innerHTML = this.dateTime.getTimeShort();
        }
    }

    refresh () {
        let shortTime = this.currentState === 'short' 
            && this.currentTime !== this.dateTime.getTimeShort(),
            fullTime = this.currentState === 'full' 
            && this.currentTime !== this.dateTime.getTimeFull(),
            uaDate = this.currentState === 'ua' 
            && this.currentTime !== this.dateTime.getDateUA(),
            euDate = this.currentState === 'eu' 
            && this.currentTime !== this.dateTime.getDateEU();
        
        if (shortTime) {
            this.root.innerHTML = this.dateTime.getTimeShort();
            this.currentTime = this.dateTime.getTimeShort();
        } else if (fullTime) {
            this.root.innerHTML = this.dateTime.getTimeFull();
            this.currentTime = this.dateTime.getTimeFull();
        } else if (uaDate) {
            this.root.innerHTML = this.dateTime.getDateUA();
            this.currentTime = this.dateTime.getDateUA();
        } else if (euDate) {
            this.root.innerHTML = this.dateTime.getDateEU();
            this.currentTime = this.dateTime.getDateEU();
        }
    }
}