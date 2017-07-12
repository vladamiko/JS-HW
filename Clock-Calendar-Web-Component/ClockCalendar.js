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
        this.addEventListener('click', () => this.changeFormat(this.currentState), false);
    }

    changeFormat (state) {
        let obj = {
            short: () => {
                this.currentState = 'full';
                this.root.innerHTML = this.dateTime.getTimeFull();
            },
            full: () => {
                this.currentState = 'short';
                this.root.innerHTML = this.dateTime.getTimeShort(); 
            },
            ua: () => {
                this.currentState = 'eu';
                this.root.innerHTML = this.dateTime.getDateEU();
            },
            eu: () => {
                this.currentState = 'ua';
                this.root.innerHTML = this.dateTime.getDateUA();
            }
        };

        return obj[state]();
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

    strategy (state) {
        let obj = {
            short: () => {
                this.currentTime = this.dateTime.getTimeShort();
                this.root.innerHTML = this.dateTime.getTimeShort();
            },
            full: () => {
                this.currentTime = this.dateTime.getTimeFull();
                this.root.innerHTML = this.dateTime.getTimeFull(); 
            },
            ua: () => {
                this.currentTime = this.dateTime.getDateUA();
                this.root.innerHTML = this.dateTime.getDateUA();
            },
            eu: () => {
                this.currentTime = this.dateTime.getDateEU();
                this.root.innerHTML = this.dateTime.getDateEU();
            }
        };

        return obj[state]();
    }

    refresh () {
        this.strategy(this.currentState);
    }
}