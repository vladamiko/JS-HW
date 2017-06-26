'use strict';

document.addEventListener('DOMContentLoaded', init, false);

function init () {
    let view = new View(),
        div = document.querySelector('.clock-calendar');

    view.showTime();

    div.addEventListener('mouseover', () => div.classList.add('hover'), false);
    div.addEventListener('mouseout', () => div.classList.remove('hover'), false);

    div.addEventListener('click', () => view.changeFormat(), false);
    div.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        view.switchInfo();
    }, false);

    setInterval(() => view.refresh(), 1000);
}