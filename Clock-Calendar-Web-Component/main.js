'use strict';

window.onload = function () {
    init();
}

function init () {
    let el = document.registerElement('clock-calendar', ClockCalendar),
        widget = document.querySelector('clock-calendar');

    widget.showTime();
    
    widget.changeColorScheme();
    widget.changeFormatEvent();
    widget.switchInfoEvent();
}
