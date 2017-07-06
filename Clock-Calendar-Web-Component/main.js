'use strict';

document.addEventListener('DOMContentLoaded', init, false);

function init () {
    let el = document.registerElement('clock-calendar', ClockCalendar),
        widget = document.createElement('clock-calendar');

    widget.setAttribute('id', 'clock-calendar');
    document.querySelector('body').appendChild(widget);

    widget.showTime();
    
    widget.changeColorScheme();
    widget.changeFormatEvent();
    widget.switchInfoEvent();
}


