'use strict'

window.onload = function () {
    let buttonTime = document.querySelector('.time-btn'),
        buttonDate = document.querySelector('.date-btn');
      
    buttonTime.addEventListener('click', getTime);
    // buttonDate.addEventListener('click', getDate);
};

function getTime () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/time', true);
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                showTime(xhr.responseText);
            }
        }
    });
    xhr.send();
}

function showTime (serverTime) {
    let time = document.querySelector('.time');

    time.innerHTML = `${serverTime}`;
}