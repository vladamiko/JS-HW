'use strict';

document.addEventListener('DOMContentLoaded', init, false);

function init () {
    let view = new View();

    view.showTime();

    view.changeFormatEvent();
    view.switchInfoEvent();
}