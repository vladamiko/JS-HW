'use strict'

function task1 (height, width, symbol) {
    let errorMessage = preValidateTask1(height, width, symbol),
        result;

    if (!errorMessage) {
        result = createChessBoard(height, width, symbol);
    } else {
        result = {status: 'failed', reason: errorMessage};
    }

    return result;
}

function createChessBoard (height, width, symbol) {
    let result = '',
        resultWidth = width * 2 - 1;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < resultWidth; j++) {
            if (i % 2 === j % 2) {
                result += symbol;
            } else {
                result += ' ';
            }
        }
        result += '\n';
    }

    return result;
}

function preValidateTask1 (height, width, symbol) {
    let errorMessage = '';

    if (!height || !width || !symbol) {
        errorMessage = 'please, enter all the arguments';
    } else if (typeof height !== 'number' || typeof width !== 'number') {
        errorMessage = 'height and/or width are not a number';
    } else if (typeof symbol !== 'string') {
        errorMessage = 'symbol is not a string';
    }

    return errorMessage;
}