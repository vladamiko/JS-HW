'use strict';

let fs = require("fs"),
    currentTime = getCurrentTime(),
    currentDate = getCurrentDate();

function helloWorld (response) {
    console.log("Request handler 'helloWorld' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

function time (response) {
    console.log("Request handler 'time' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(currentTime);
    response.end();
}

function date (response) {
    console.log("Request handler 'date' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(currentDate);
    response.end();
}

function getCurrentTime () {
    let date = new Date(),
        hours, minutes, seconds, currentTime = '';

    hours = normalizeDateTime(date.getHours());
    minutes = normalizeDateTime(date.getMinutes());
    seconds = normalizeDateTime(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
}

function getCurrentDate () {
    let date = new Date(),
        day, month, year, currentDate = '';

    day = normalizeDateTime(date.getDate());
    month = normalizeDateTime(date.getMonth() + 1);
    year = date.getFullYear();

    return `${month}:${day}:${year}`;
}

function normalizeDateTime (value) {
    return value >= 10? String(value): `0${value}`;
}

function index (response) {
    console.log("Request handler 'index' was called.");

    fs.readFile("index.html", function(error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": 'text/html'});
            response.write(file)
            response.end();
        }
    });
}

exports.helloWorld = helloWorld;
exports.time = time;
exports.date = date;
exports.index = index;